// app/contact/layout.tsx
import { ReactNode } from "react";
import Script from "next/script";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Google Maps API読み込み */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=maps,marker&callback=Function.prototype`}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
