'use client';
import { useEffect } from 'react';

function useEscapeKey(callback, showMobileNav) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    if (!showMobileNav) {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback, showMobileNav]);
}

export default useEscapeKey;
