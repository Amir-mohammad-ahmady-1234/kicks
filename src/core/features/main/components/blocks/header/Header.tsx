"use client";

import { useEffect } from "react";

import ScrolledHeader from "./ScrolledHeader";
import SearchModal from "./SearchModal";
import TopHeader from "./TopHeader";
import { useHeader } from "../../../context/HeaderContext";

function Header({ isSignUp }) {
  const { setScrolled, searchModalOpen, setSearchModalOpen } = useHeader();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSearchModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setSearchModalOpen]);

  useEffect(() => {
    if (searchModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [searchModalOpen]);

  return (
    <>
      <SearchModal />

      <TopHeader isSignUp={isSignUp} />

      <ScrolledHeader isSignUp={isSignUp} />
    </>
  );
}

export default Header;
