import {
  TypographyH3,
  TypographyMuted,
} from "@/core/components/custom/ui/Typography";
import { MapPin, Navigation } from "lucide-react";

function ProfileLocation({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <TypographyH3 className="text-xl font-semibold mb-6">
        Location Information
      </TypographyH3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <div>
              <TypographyMuted className="text-sm text-gray-800">
                Country
              </TypographyMuted>
              <TypographyMuted className="font-medium">
                {user.country || "Not set"}
              </TypographyMuted>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Navigation className="h-5 w-5 text-gray-400" />
            <div>
              <TypographyMuted className="text-sm text-gray-800">
                City
              </TypographyMuted>
              <TypographyMuted className="font-medium">
                {user.city || "Not set"}
              </TypographyMuted>
            </div>
          </div>
        </div>

        {user.address && (
          <div className="space-y-4">
            <div>
              <TypographyMuted className="text-sm text-gray-800 mb-2">
                Address
              </TypographyMuted>
              <TypographyMuted className="font-medium">
                {user.address}
              </TypographyMuted>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileLocation;
