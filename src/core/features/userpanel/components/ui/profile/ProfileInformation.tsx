import {
  TypographyH4,
  TypographyMuted,
} from "@/core/components/custom/ui/Typography";
import { Phone, User } from "lucide-react";
import ProfileUserDate from "./ProfileUserDate";

function ProfileInformation({ user }) {
  return (
    <>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-linear-to-r from-blue-100 to-purple-100 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">
            {user.name?.charAt(0).toUpperCase() ||
              user.email?.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <TypographyH4 className="text-2xl font-bold">
            {user.name || "Anonymous User"}
          </TypographyH4>
          <TypographyMuted className="text-gray-800 ">
            {user.email}
          </TypographyMuted>
          <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
            {user.role}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-gray-400" />
            <div>
              <TypographyMuted className="text-sm text-gray-800 ">
                Phone
              </TypographyMuted>
              <TypographyMuted className="font-medium">
                {user.phone || "Not set"}
              </TypographyMuted>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-gray-400" />
            <div>
              <TypographyMuted className="text-sm text-gray-800 ">
                Gender
              </TypographyMuted>
              <TypographyMuted className="font-medium">
                {user.gender || "Not set"}
              </TypographyMuted>
            </div>
          </div>
        </div>

        <ProfileUserDate user={user} />
      </div>
    </>
  );
}

export default ProfileInformation;
