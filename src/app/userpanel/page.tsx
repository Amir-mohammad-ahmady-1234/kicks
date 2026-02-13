import { permanentRedirect } from "next/navigation";

function page() {
  permanentRedirect("/userpanel/profile");
  return <div>page</div>;
}

export default page;
