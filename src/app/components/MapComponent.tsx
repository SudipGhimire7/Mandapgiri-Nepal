import { useEffect, useRef } from 'react';
import type { MapData } from '../data/packageDetails';

// We dynamically import Leaflet to avoid SSR issues and CSS conflicts
interface MapComponentProps {
  mapData: MapData;
  title: string;
}

export function MapComponent({ mapData, title }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    // Dynamically import leaflet to prevent SSR issues
    import('leaflet').then((L) => {
      // Fix default icon paths broken by bundlers
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      if (!mapRef.current || leafletMapRef.current) return;

      const map = L.map(mapRef.current, {
        center: mapData.center,
        zoom: mapData.zoom,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      leafletMapRef.current = map;

      // OpenTopoMap for terrain — perfect for trekking routes
      L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution:
          'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors | Rendering &copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
      }).addTo(map);

      // Draw the trekking route polyline
      const polyline = L.polyline(mapData.route as [number, number][], {
        color: '#C8102E',
        weight: 3.5,
        opacity: 0.85,
        lineJoin: 'round',
        lineCap: 'round',
      }).addTo(map);

      // Custom camp marker icon
      const campIcon = L.divIcon({
        html: `<div style="
          width: 10px; height: 10px;
          background: #1B4D3E;
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(0,0,0,0.5);
        "></div>`,
        className: '',
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });

      // Add markers for each key stop
      mapData.markers.forEach((marker) => {
        const m = L.marker(marker.position as [number, number], { icon: campIcon }).addTo(map);
        m.bindPopup(
          `<div style="font-family: sans-serif; min-width: 120px;">
            <strong style="color:#1B4D3E; font-size:14px;">${marker.label}</strong>
            ${marker.altitude ? `<br/><span style="color:#C8102E; font-weight:600;">${marker.altitude}</span>` : ''}
          </div>`,
          { closeButton: false }
        );
        m.on('mouseover', () => m.openPopup());
        m.on('mouseout', () => m.closePopup());
      });

      // Fit map to the route bounds
      map.fitBounds(polyline.getBounds(), { padding: [24, 24] });
    });

    // Cleanup on unmount
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      {/* Legend header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1B4D3E]/5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-1.5 rounded-full bg-[#C8102E]" />
          <span className="text-sm text-gray-600 font-medium">Trek Route</span>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-3 h-3 rounded-full bg-[#1B4D3E] border-2 border-white shadow" />
          <span className="text-sm text-gray-600 font-medium">Key Stops (hover)</span>
        </div>
        <span className="ml-auto text-xs text-gray-400 italic">{title}</span>
      </div>
      {/* Map container */}
      <div ref={mapRef} style={{ height: '320px', width: '100%' }} />
    </div>
  );
}
