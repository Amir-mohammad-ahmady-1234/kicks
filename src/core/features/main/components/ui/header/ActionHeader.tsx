"use client";

import React, { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { LogIn, Search } from "lucide-react";
import { Input } from "@/core/components/shadcn/ui/input";
import { Button } from "@/core/components/shadcn/ui/button";
function ActionHeader() {
  const [showisserch, setshowisserch] = useState(false);

  function handelshow() {
    setshowisserch(!showisserch);
  }
  return (
    <div className="flex  items-center gap-4">
      <Search className="hidden lg:flex" onClick={() => handelshow()} />
      <div
        className={`transition-all duration-300  ${
          showisserch ? "w-40 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <Input type="search" className="w-full" />
      </div>

      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal">
          <Button variant="outline">
            Sign Up <LogIn />
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default ActionHeader;
