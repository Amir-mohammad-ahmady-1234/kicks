import { getAllUserData } from "@/core/api-route/userpanel/handlers/profile/getalluserdata/getAllUserData";
import {
  TypographyH3,
  TypographyMuted,
} from "@/core/components/custom/ui/Typography";
import ProfileBio from "@/core/features/userpanel/components/ui/profile/ProfileBio";
import ProfileLocation from "@/core/features/userpanel/components/ui/profile/ProfileLocation";
import ProfileQuickStats from "@/core/features/userpanel/components/ui/profile/ProfileQuickStats";
import ProfileSocialUser from "@/core/features/userpanel/components/ui/profile/ProfileSocialUser";
import { getUserId } from "@/core/utils/getUserId";

async function ProfilePage() {
  const userId = await getUserId();

  const result = await getAllUserData(userId);

  if (!result.success || !result.user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <TypographyH3 className="text-2xl font-bold mb-4">
            Error loading profile
          </TypographyH3>
          <TypographyMuted className="text-gray-500">
            {result.error || "Please try again later"}
          </TypographyMuted>
        </div>
      </div>
    );
  }
  const user = result.user;

  return (
    <section className="mx-auto px-4 py-8">
      <div className="mx-auto">
        <div className="mb-8">
          <TypographyH3 className="text-3xl font-bold text-gray-900">
            My Profile
          </TypographyH3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProfileBio user={user} />

            <ProfileLocation user={user} />
          </div>

          <div className="space-y-8">
            <ProfileSocialUser user={user} />

            <ProfileQuickStats user={user} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
