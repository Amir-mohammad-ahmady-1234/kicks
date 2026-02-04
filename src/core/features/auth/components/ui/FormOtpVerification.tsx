// src/core/features/auth/components/blocks/FormOtpVerification.tsx

import {
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/core/components/shadcn/ui/input-otp";
import Logo from "@/core/features/main/components/ui/Logo";
import Link from "next/link";

interface FormOtpVerificationProps {
  email: string;
  otp: string;
  onOtpChange: (value: string) => void;
  onVerify: () => void;
  onResend: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

export default function FormOtpVerification({
  email,
  otp,
  onOtpChange,
  onVerify,
  onResend,
  isLoading,
  disabled = false,
}: FormOtpVerificationProps) {
  const isOtpComplete = otp.length === 6;

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

        <div className="flex flex-col items-center space-y-6">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={onOtpChange}
            containerClassName="group"
            disabled={isLoading || disabled}
          >
            <InputOTPGroup className="gap-3 sm:gap-4">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <Button
            variant="default"
            className="w-full max-w-xs"
            size="lg"
            disabled={!isOtpComplete || isLoading || disabled}
            onClick={onVerify}
          >
            {isLoading ? "Verifying..." : "Verify & Continue"}
          </Button>

          <div className="text-center space-y-3 text-sm">
            <TypographyMuted>
              Did not receive the code?
              <button
                type="button"
                onClick={onResend}
                className="text-primary hover:underline font-medium disabled:opacity-50"
                disabled={isLoading || disabled}
              >
                Resend Code
              </button>
            </TypographyMuted>

            <Link
              href="/login"
              className="text-muted-foreground hover:underline block"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
