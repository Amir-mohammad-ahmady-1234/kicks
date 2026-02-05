import {
  TypographyH3,
  TypographyP,
} from "@/core/components/custom/ui/Typography";

import Logo from "@/core/features/main/components/ui/Logo";
import OtoFormAuth from "./OtoFormAuth";

interface FormOtpVerificationTs {
  email: string;
  otp: string;
  OtpChange: (value: string) => void;
  Verify: () => void;
  Resend: () => void;
  Loading: boolean;
  disabled?: boolean;
}

export default function FormOtpVerification({
  email,
  otp,
  OtpChange,
  Verify,
  Resend,
  Loading,
  disabled = false,
}: FormOtpVerificationTs) {
  return (
    <div className="flex flex-col w-full md:p-4 h-screen justify-center items-center space-y-10">
      <Logo width={150} />

      <div className="md:w-3/4 w-full p-4 flex flex-col space-y-6">
        <div className="space-y-2 text-center">
          <TypographyH3>Verification Code</TypographyH3>
          <TypographyP className="text-muted-foreground">
            Enter the 6-digit code sent to
          </TypographyP>
          <TypographyP className="font-medium">{email}</TypographyP>
        </div>

        <OtoFormAuth
          otp={otp}
          OtpChange={OtpChange}
          Verify={Verify}
          Resend={Resend}
          Loading={Loading}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
