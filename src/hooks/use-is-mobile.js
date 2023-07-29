'use client';
import { useState, useEffect } from 'react';

function useIsMobile() {
  const getIsMobile = () => window.innerWidth <= 768;
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    function handleWindowResize() {
      setIsMobile(getIsMobile);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
