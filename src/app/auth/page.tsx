import ButtonLoginReturnUrlUser from "@/core/features/auth/components/ui/ButtonLoginReturnUrlUser";
import Image from "next/image";
import AuthSection from "@/core/features/auth/components/blocks/Auth";

function page() {
  return (
    <section className="flex flex-col sm:flex-row min-h-screen">
      <div className="relative hidden lg:block lg:w-3/5 overflow-hidden">
        <Image
          src="/common/img/auth/auth.png"
          alt="Background image"
          fill
          className="object-cover object-center"
          priority
          quality={75}
        />
      </div>
      <ButtonLoginReturnUrlUser />
      <AuthSection />
    </section>
  );
}

export default page;
