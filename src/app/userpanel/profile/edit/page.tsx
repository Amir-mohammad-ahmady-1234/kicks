import FormProfileInfo from "@/core/features/userpanel/components/ui/profile/edite/FormProfileInfo";
import ProfileRouteBack from "@/core/features/userpanel/components/ui/profile/edite/ProfileRouteBack";
import { getUserId } from "@/core/utils/getUserId";

export default async function EditProfilePage() {
  const userId = await getUserId();
  return (
    <section className="px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <ProfileRouteBack />

        <FormProfileInfo userId={userId} />
      </div>
    </section>
  );
}
