"use client";

import updateProfile from "@/core/api-route/userpanel/handlers/profile/updateuser/updateProfile";
import {
  TypographyH4,
  TypographyMuted,
} from "@/core/components/custom/ui/Typography";
import { Loader2, Phone, User } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";
import ProfileUserDate from "./ProfileUserDate";

function ProfileInformation({ user }) {
  const [IsUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleEditClicked() {
    fileInputRef.current?.click();
  }
  async function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      toast.loading("Uploading image...", { id: "upload" });

      const url = await updateProfile(user.id, file);

      if (url.success) {
        toast.success("Image uploaded successfully", { id: "upload" });
      } else {
        toast.error("Failed to upload image", { id: "upload" });
      }
    } catch {
      toast.error("Error uploading image", { id: "upload" });
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <div className="relative shrink-0">
          <div className="relative w-18 h-18 sm:w-28 sm:h-28 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
            {user.image ? (
              <Image
                src={user.image}
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                  {user.name?.charAt(0)?.toUpperCase() ||
                    user.email?.charAt(0)?.toUpperCase() ||
                    "?"}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={handleEditClicked}
            className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2
                       bg-blue-600 hover:bg-blue-700 text-white
                       text-xs sm:text-sm font-medium
                       px-2.5 py-1 sm:px-3 sm:py-1.5
                       rounded-full shadow-md transition-all"
            aria-label="Edit profile picture"
          >
            Edit
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleChangeImage}
          />
          {IsUploading && (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <TypographyH4 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">
            {user.name || "Anonymous User"}
          </TypographyH4>

          <TypographyMuted className="text-gray-700 text-sm sm:text-base mt-0.5">
            {user.email}
          </TypographyMuted>

          <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-full">
            {user.role}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-gray-500 shrink-0" />
            <div>
              <TypographyMuted className="text-xs sm:text-sm text-gray-600">
                Phone
              </TypographyMuted>
              <p className="font-medium text-gray-900 text-sm sm:text-base">
                {user.phone || "Not set"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-gray-500 shrink-0" />
            <div>
              <TypographyMuted className="text-xs sm:text-sm text-gray-600">
                Gender
              </TypographyMuted>
              <p className="font-medium text-gray-900 text-sm sm:text-base">
                {user.gender || "Not set"}
              </p>
            </div>
          </div>
        </div>

        <ProfileUserDate user={user} />
      </div>
    </>
  );
}

export default ProfileInformation;
