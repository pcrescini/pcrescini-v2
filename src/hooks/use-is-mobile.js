'use client';
import { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const getIsMobile = () => window.innerWidth <= 768;

    // initializes isMobile state on page load
    setIsMobile(getIsMobile);

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
