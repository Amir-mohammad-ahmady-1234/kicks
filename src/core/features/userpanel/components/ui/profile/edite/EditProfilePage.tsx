import { getUserId } from "@/core/utils/getUserId";
import FormProfileInfo from "./FormProfileInfo";
import ProfileRouteBack from "./ProfileRouteBack";

async function EditProfilePage() {
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

export default EditProfilePage;
