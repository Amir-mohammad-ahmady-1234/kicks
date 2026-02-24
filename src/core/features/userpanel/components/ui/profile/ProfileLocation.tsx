import {
  TypographyH3,
  TypographyMuted,
} from "@/core/components/custom/ui/Typography";
import { MapPin, Navigation } from "lucide-react";

function ProfileLocation({ user }) {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6">
      <TypographyH3 className="text-xl font-semibold mb-6 text-foreground">
        Location Information
      </TypographyH3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <TypographyMuted className="text-sm text-muted-foreground">
                Country
              </TypographyMuted>
              <TypographyMuted className="font-medium text-foreground">
                {user.country || "Not set"}
              </TypographyMuted>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Navigation className="h-5 w-5 text-muted-foreground" />
            <div>
              <TypographyMuted className="text-sm text-muted-foreground">
                City
              </TypographyMuted>
              <TypographyMuted className="font-medium text-foreground">
                {user.city || "Not set"}
              </TypographyMuted>
            </div>
          </div>
        </div>

        {user.address && (
          <div className="space-y-4">
            <div>
              <TypographyMuted className="text-sm text-muted-foreground mb-2">
                Address
              </TypographyMuted>
              <TypographyMuted className="font-medium text-foreground">
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
