"use client";
import React, { useEffect, useRef } from 'react';

export default function TubesCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<any>(null);

  const randomColors = (count: number) => {
    return new Array(count)
      .fill(0)
      .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
  };

  useEffect(() => {
    const initTimer = setTimeout(() => {
      // Using eval to bypass webpack parsing the https import directly,
      // which can cause build errors in some Next.js setups.
      // Alternatively, we can use a dynamic import with webpackIgnore
      import(/* webpackIgnore: true */ 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
        .then(module => {
          const Tubes = module.default;
          
          if (canvasRef.current) {
            const app = Tubes(canvasRef.current, {
              tubes: {
                colors: ["#5e72e4", "#8965e0", "#f5365c"],
                lights: {
                  intensity: 200,
                  colors: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"]
                }
              }
            });
            appRef.current = app;
          }
        })
        .catch(err => console.error("Failed to load TubesCursor module:", err));
    }, 100);

    const handleClick = () => {
      if (appRef.current) {
        appRef.current.tubes.setColors(randomColors(3));
        appRef.current.tubes.setLightsColors(randomColors(4));
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener('click', handleClick);
      if (appRef.current && typeof appRef.current.dispose === 'function') {
        appRef.current.dispose();
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none" 
      style={{ opacity: 0.6 }} // slightly transparent so it doesn't distract too much from content
    />
  );
}
