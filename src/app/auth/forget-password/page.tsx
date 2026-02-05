import FormForgetPasUser from "@/core/features/auth/components/ui/FormForgetPasUser";
import Logo from "@/core/features/main/components/ui/Logo";

function page() {
  return (
    <div className="flex flex-col w-full md:p-4 h-screen justify-center  items-center space-y-10 ">
      <Logo width={150} />

      <FormForgetPasUser />
    </div>
  );
}

export default page;
