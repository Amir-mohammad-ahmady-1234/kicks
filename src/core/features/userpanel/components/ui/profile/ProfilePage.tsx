import { getAllUserData } from "@/core/api-route/userpanel/handlers/profile/getalluserdata/getAllUserData";
import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import ErrorProfilePage from "@/core/features/userpanel/components/ui/profile/ErrorProfilePage";
import ProfileBio from "@/core/features/userpanel/components/ui/profile/ProfileBio";
import ProfileLocation from "@/core/features/userpanel/components/ui/profile/ProfileLocation";
import ProfileQuickStats from "@/core/features/userpanel/components/ui/profile/ProfileQuickStats";
import ProfileSocialUser from "@/core/features/userpanel/components/ui/profile/ProfileSocialUser";
import { getUserId } from "@/core/utils/getUserId";
async function ProfilePage() {
  const userId = await getUserId();

  const result = await getAllUserData(userId);

  if (!result.success || !result.user) {
    return <ErrorProfilePage result={result} />;
  }
  const user = result.user;

  return (
    <section className="mx-auto px-4 py-8">
      <div className="mx-auto">
        <div className="mb-8">
          <TypographyH3 className="text-3xl font-bold text-foreground">
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
