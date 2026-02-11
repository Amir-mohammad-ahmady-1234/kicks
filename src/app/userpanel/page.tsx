import { redirect } from "next/navigation";

function page() {
  redirect("/userpanel/profile");
  return <div>page</div>;
}

export default page;
