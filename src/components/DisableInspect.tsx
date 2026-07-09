'use client';

import { useEffect } from 'react';

export default function DisableInspect() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // In development mode, we still allow inspecting for easier debugging
      // Uncomment this if you want it blocked in development too!
      // return;
    }

    // Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable Keyboard Shortcuts for DevTools
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      
      // Ctrl+Shift+I (Windows) or Cmd+Option+I (Mac)
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') || (e.metaKey && e.altKey && e.key.toLowerCase() === 'i')) {
        e.preventDefault();
      }
      
      // Ctrl+Shift+J (Windows) or Cmd+Option+J (Mac)
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') || (e.metaKey && e.altKey && e.key.toLowerCase() === 'j')) {
        e.preventDefault();
      }
      
      // Ctrl+U / Cmd+Option+U (View Source)
      if ((e.ctrlKey && e.key.toLowerCase() === 'u') || (e.metaKey && e.altKey && e.key.toLowerCase() === 'u')) {
        e.preventDefault();
      }

      // Ctrl+Shift+C / Cmd+Shift+C (Inspect Element cursor)
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') || (e.metaKey && e.shiftKey && e.key.toLowerCase() === 'c')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
