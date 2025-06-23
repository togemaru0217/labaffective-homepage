"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
}

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return;
      if (!window.google || !window.google.maps) {
        console.error("Google Maps API not ready");
        return;
      }

      const { Map } = (await window.google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
      const { ColorScheme } = (await window.google.maps.importLibrary('core')) as google.maps.CoreLibrary;

      const map = new Map(mapRef.current, {
        center: { lat: 35.60588880373278, lng: 139.68275167183145 },
        zoom: 18,
        mapId: "4a1d353f7d598e79",
        colorScheme: ColorScheme.DARK,
      });

      const { AdvancedMarkerElement } = (await window.google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;

      new AdvancedMarkerElement({
        map,
        position: { lat: 35.605798489436275, lng: 139.68274177677952 },
        content: (() => {
          const img = document.createElement("img");
          img.src = "/研究室のマーカーアイコン.png";
          img.style.width = "100px";
          img.style.height = "100px";
          return img;
        })(),
      });
    };

    initMap();
  }, []);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden" ref={mapRef} />
  );
}


