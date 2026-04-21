import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface Package {
  id: string;
  title: string;
  price: number;
  duration: string;
  image: string;
}

interface WishlistContextType {
  wishlist: Package[];
  addToWishlist: (pkg: Package) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  isWishlistModalOpen: boolean;
  setWishlistModalOpen: (open: boolean) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { user, setAuthModalOpen } = useAuth();
  const [wishlist, setWishlist] = useState<Package[]>([]);
  const [isWishlistModalOpen, setWishlistModalOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      setWishlist([]);
      return;
    }

    // Try fetching from server first
    fetch(`http://localhost:3001/api/wishlist/${user.email}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load from server');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setWishlist(data);
          localStorage.setItem(`mandapgiri_wishlist_${user.email.toLowerCase()}`, JSON.stringify(data));
        }
      })
      .catch((err) => {
        console.error('Server wishlist fetch failed, using local storage:', err);
        const storageKey = `mandapgiri_wishlist_${user.email.toLowerCase()}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          try {
            setWishlist(JSON.parse(saved));
          } catch (e) {
            console.error('Failed to parse wishlist from local storage', e);
          }
        } else {
          setWishlist([]);
        }
      });
  }, [user]);

  const saveWishlistLocalOnly = (newList: Package[]) => {
    setWishlist(newList);
    if (user) {
      const storageKey = `mandapgiri_wishlist_${user.email.toLowerCase()}`;
      localStorage.setItem(storageKey, JSON.stringify(newList));
    }
  };

  const addToWishlist = async (pkg: Package) => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }
    if (!wishlist.find(item => item.id === pkg.id)) {
      saveWishlistLocalOnly([...wishlist, pkg]);
      
      try {
        fetch('http://localhost:3001/api/wishlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: user.email,
            package_id: pkg.id,
            title: pkg.title,
            price: pkg.price,
            duration: pkg.duration,
            image: pkg.image,
          }),
        });
      } catch (err) {
        console.error('Failed to save to server', err);
      }
    }
  };

  const removeFromWishlist = async (id: string) => {
    saveWishlistLocalOnly(wishlist.filter(item => item.id !== id));
    
    if (user) {
      try {
        fetch(`http://localhost:3001/api/wishlist/${encodeURIComponent(user.email.toLowerCase())}/${encodeURIComponent(id)}`, {
          method: 'DELETE',
        });
      } catch (err) {
        console.error('Failed to delete from server', err);
      }
    }
  };

  const isInWishlist = (id: string) => {
    return wishlist.some(item => item.id === id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, isWishlistModalOpen, setWishlistModalOpen }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
