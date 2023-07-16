'use client';
import { useEffect } from 'react';

function useWindowScroll(callback) {
  useEffect(() => {
    function handleWindowScroll() {
      if (window.scrollY > 25) {
        callback(true);
      } else {
        callback(false);
      }
    }

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [callback]);
}

export default useWindowScroll;
