import React, { useEffect, useRef } from "react";

export default function AdBanner() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Prevent duplicate injections
    if (adRef.current.innerHTML !== "") return;

    const confScript = document.createElement("script");
    confScript.type = "text/javascript";
    confScript.innerHTML = `
      atOptions = {
        'key' : '2a0fac36539a6209d81c807ce42890f3',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "https://www.highperformanceformat.com/2a0fac36539a6209d81c807ce42890f3/invoke.js";
    invokeScript.async = true;

    adRef.current.appendChild(confScript);
    adRef.current.appendChild(invokeScript);
  }, []);

  return (
    <div className="w-full flex justify-center py-4 relative z-10 bg-transparent">
      <div
        ref={adRef}
        className="w-[728px] h-[90px] max-w-full overflow-hidden flex items-center justify-center bg-black/5 rounded-lg"
      >
        {/* The ad will inject its iframe here */}
      </div>
    </div>
  );
}
