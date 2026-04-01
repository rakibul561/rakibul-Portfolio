"use client";

import { useEffect } from "react";

export default function Oneko() {
  useEffect(() => {
    // Check if the script is already loaded to avoid duplicates
    if (document.getElementById("oneko-script")) return;

    const script = document.createElement("script");
    script.src = "/oneko.js";
    script.id = "oneko-script";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script and the cat element if necessary
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      const onekoEl = document.getElementById("oneko");
      if (onekoEl) onekoEl.remove();
    };
  }, []);

  return null;
}
