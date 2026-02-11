"use client";
import { Button } from "@/core/components/shadcn/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function ProfileRouteBack() {
  const router = useRouter();

  return (
    <div className="mb-8">
      <Button onClick={() => router.back()} variant="secondary">
        <ArrowLeft className="h-4 w-4" />
        Back to Profile
      </Button>
      <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
    </div>
  );
}

export default ProfileRouteBack;
