'use client';
import { useState, useEffect } from 'react';

const getIsMobile = () => window.innerWidth <= 768;

function useIsMobile() {
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
