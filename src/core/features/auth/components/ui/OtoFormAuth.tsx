import { TypographyMuted } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/core/components/shadcn/ui/input-otp";
import Link from "next/link";
function OtoFormAuth({
  otp,
  OtpChange,
  Verify,
  Resend,
  Loading,
  disabled = false,
}) {
  const isOtpComplete = otp.length === 6;

  return (
    <div className="flex flex-col items-center space-y-6">
      <InputOTP
        maxLength={6}
        value={otp}
        onChange={OtpChange}
        containerClassName="group"
        disabled={Loading || disabled}
      >
        <InputOTPGroup className="gap-3 sm:gap-4">
          <InputOTPSlot
            index={0}
            className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary"
          />
          <InputOTPSlot
            index={1}
            className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary"
          />
          <InputOTPSlot
            index={2}
            className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary"
          />
          <InputOTPSlot
            index={3}
            className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary"
          />
          <InputOTPSlot
            index={4}
            className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary"
          />
          <InputOTPSlot
            index={5}
            className="bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary"
          />
        </InputOTPGroup>
      </InputOTP>

      <Button
        variant="default"
        className="w-full max-w-xs"
        size="lg"
        disabled={!isOtpComplete || Loading || disabled}
        onClick={Verify}
      >
        {Loading ? "Verifying..." : "Verify & Continue"}
      </Button>

      <div className="text-center space-y-3 text-sm">
        <TypographyMuted>
          Did not receive the code?
          <button
            type="button"
            onClick={Resend}
            className="text-primary hover:underline font-medium disabled:opacity-50"
            disabled={Loading || disabled}
          >
            Resend Code
          </button>
        </TypographyMuted>

        <Link
          href="/auth"
          className="text-muted-foreground hover:underline block"
        >
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default OtoFormAuth;
