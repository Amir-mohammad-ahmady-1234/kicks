"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
type HeaderContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
  scrolled: boolean;
  setScrolled: (v: boolean) => void;
  searchModalOpen: boolean;
  setSearchModalOpen: (v: boolean) => void;
};

const HeaderContext = createContext<HeaderContextType | null>(null);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        open,
        setOpen,
        scrolled,
        setScrolled,
        searchModalOpen,
        setSearchModalOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used inside HeaderProvider");
  }
  return context;
}
