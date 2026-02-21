import ButtonLoginReturnUrlUser from "@/core/features/auth/components/ui/ButtonLoginReturnUrlUser";
import Image from "next/image";
import type { ReactNode } from "react";

function layoutauth({ children }: { children: ReactNode }) {
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
      <section className="flex flex-col sm:flex-row min-h-screen md:w-4/5  justify-center">
        {children}
      </section>
    </section>
  );
}

export default layoutauth;
