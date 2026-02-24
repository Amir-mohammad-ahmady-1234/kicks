import {
  TypographyH3,
  TypographyMuted,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Edit } from "lucide-react";
import Link from "next/link";
import ProfileInformation from "./ProfileInformation";

function ProfileBio({ user }) {
  return (
    <div className="bg-background rounded-xl shadow-sm border border-border p-6">
      <div className="flex justify-between items-start mb-6">
        <TypographyH3 className="text-xl font-semibold">
          Personal Information
        </TypographyH3>
        <Link href="/userpanel/profile/edit">
          <Button variant="outline">
            <Edit className="h-4 w-4" />
            Edit
          </Button>
        </Link>
      </div>

      <div className="space-y-6">
        <ProfileInformation user={user} />

        {user.bio && (
          <div className="pt-4 border-t">
            <h4 className="font-medium mb-2">About</h4>
            <TypographyMuted className="text-muted-foreground whitespace-pre-line">
              {user.bio}
            </TypographyMuted>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileBio;
