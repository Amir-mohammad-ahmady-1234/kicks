"use client";

import { Button } from "@/core/components/shadcn/ui/button";
import { User } from "lucide-react";

type MobileChatToggleProps = {
  onToggle: () => void;
};

function MobileChatToggle({ onToggle }: MobileChatToggleProps) {
  return (
    <div className="lg:hidden fixed bottom-10 left-20 z-50">
      <Button
        variant="outline"
        size="lg"
        onClick={onToggle}
        className="bg-white"
      >
        <User className="h-10 w-10" />
      </Button>
    </div>
  );
}

export default MobileChatToggle;

