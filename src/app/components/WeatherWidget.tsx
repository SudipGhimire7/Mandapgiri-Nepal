import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, CloudRain, Snowflake, CloudLightning, Loader2, MapPin } from 'lucide-react';

interface WeatherData {
  location: string;
  temp: number;
  conditionCode: number;
}

const LOCATIONS = [
  { name: 'Kathmandu', lat: 27.7017, lon: 85.3206 },
  { name: 'Pokhara', lat: 28.2096, lon: 83.9856 },
  { name: 'Everest Base Camp', lat: 28.0026, lon: 86.8526 },
];

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const promises = LOCATIONS.map(async (loc) => {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current_weather=true`
          );
          const data = await res.json();
          return {
            location: loc.name,
            temp: Math.round(data.current_weather.temperature),
            conditionCode: data.current_weather.weathercode,
          };
        });

        const results = await Promise.all(promises);
        setWeather(results);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // WMO Weather interpretation codes (Open-Meteo)
  const getWeatherIcon = (code: number, className = 'w-6 h-6') => {
    if (code === 0) return <Sun className={`${className} text-yellow-400`} />;
    if (code >= 1 && code <= 3) return <Cloud className={`${className} text-gray-300`} />;
    if (code >= 45 && code <= 48) return <Cloud className={`${className} text-gray-400`} />; // Fog
    if (code >= 51 && code <= 67) return <CloudRain className={`${className} text-blue-400`} />; // rain/drizzle
    if (code >= 71 && code <= 77) return <Snowflake className={`${className} text-blue-200`} />; // snow
    if (code >= 80 && code <= 82) return <CloudRain className={`${className} text-blue-500`} />; // showers
    if (code >= 95) return <CloudLightning className={`${className} text-purple-400`} />; // thunderstorm
    return <Sun className={`${className} text-yellow-400`} />;
  };

  const getWeatherDescription = (code: number) => {
    if (code === 0) return 'Clear';
    if (code >= 1 && code <= 3) return 'Partly Cloudy';
    if (code >= 45 && code <= 48) return 'Foggy';
    if (code >= 51 && code <= 67) return 'Rainy';
    if (code >= 71 && code <= 77) return 'Snowy';
    if (code >= 80 && code <= 82) return 'Showers';
    if (code >= 95) return 'Stormy';
    return 'Clear';
  };

  if (loading) {
    return (
      <div className="w-full bg-[#1A1A1A] py-3 text-white flex justify-center items-center">
        <Loader2 className="w-5 h-5 animate-spin mr-2" />
        <span className="text-sm">Loading Live Weather...</span>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#1A1A1A]/90 backdrop-blur-md border-y border-white/10 py-3 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-gray-300 text-sm font-medium">
            <span className="uppercase tracking-wider mr-4 text-xs font-bold text-[#D4AF37]">Live Local Weather</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {weather.map((item, index) => (
              <motion.div
                key={item.location}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white/5 rounded-full px-4 py-1.5 border border-white/5"
              >
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                  <div className="flex items-center gap-2">
                    {getWeatherIcon(item.conditionCode, 'w-5 h-5')}
                    <span className="text-white font-bold">{item.temp}°C</span>
                    <span className="text-xs text-gray-400 hidden sm:inline-block">
                      {getWeatherDescription(item.conditionCode)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
