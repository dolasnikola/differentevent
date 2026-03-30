"use client";

import { useState } from "react";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";

export function HeaderWrapper() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Header
        mobileOpen={mobileOpen}
        onMobileToggle={() => setMobileOpen(!mobileOpen)}
      />
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
