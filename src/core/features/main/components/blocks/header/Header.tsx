"use client";

import { useEffect } from "react";

import ScrolledHeader from "../../ui/header/ScrolledHeader";
import SearchModal from "../../ui/header/SearchModal";
import TopHeader from "../../ui/header/TopHeader";
import { useHeader } from "../../../context/HeaderContext";

interface Props {
  isSignUp: boolean;
  userId: string;
}

function Header({ isSignUp, userId }: Props) {
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
      <SearchModal userId={userId} />

      <TopHeader isSignUp={isSignUp} />

      <ScrolledHeader isSignUp={isSignUp} />
    </>
  );
}

export default Header;
