"use client";
import { useEffect } from "react";

// Force single dark mode for the entire site by ensuring the `dark` class is
// present on the root <html> element. This keeps existing `dark:` Tailwind
// styles working without next-themes.
export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      document.documentElement.classList.add("dark");
    } catch (e) {
      // server or other non-DOM environment — ignore
    }
  }, []);

  return <>{children}</>;
}
