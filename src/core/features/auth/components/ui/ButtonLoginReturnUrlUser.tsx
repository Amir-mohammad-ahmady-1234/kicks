"use client";

import { Button } from "@/core/components/shadcn/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function ButtonLoginReturnUrlUser() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="md:hidden">
      <Button
        className="mt-2 ml-2 flex"
        variant="outline"
        onClick={() => handleBack()}
      >
        <ArrowLeft />
        Return
      </Button>
    </div>
  );
}

export default ButtonLoginReturnUrlUser;
