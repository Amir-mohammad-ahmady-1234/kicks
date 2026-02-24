import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import { calculateAge } from "@/core/features/userpanel/utils/calculateAge";
import { formatDate } from "@/core/utils/formatDate";
import { Calendar } from "lucide-react";

function ProfileUserDate({ user }) {
  const age = user.dateOfBirth
    ? calculateAge(new Date(user.dateOfBirth))
    : null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Calendar className="h-5 w-5 text-muted-foreground" />
        <div>
          <TypographyMuted className="text-sm text-muted-foreground">
            Date of Birth
          </TypographyMuted>

          <div className="flex items-center gap-2">
            <TypographyMuted className="font-medium text-foreground">
              {formatDate(user.dateOfBirth)}
            </TypographyMuted>

            {age && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                {age} years
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserDate;
