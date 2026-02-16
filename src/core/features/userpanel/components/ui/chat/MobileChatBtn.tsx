"use client";

import { Button } from "@/core/components/shadcn/ui/button";
import { User } from "lucide-react";

type MobileChatBtnTs = {
  isclick: () => void;
};

function MobileChatBtn({ isclick }: MobileChatBtnTs) {
  return (
    <div className="lg:hidden fixed bottom-10 left-20 z-50">
      <Button
        variant="outline"
        size="lg"
        onClick={isclick}
        className="bg-white"
      >
        <User className="h-10 w-10" />
      </Button>
    </div>
  );
}

export default MobileChatBtn;
