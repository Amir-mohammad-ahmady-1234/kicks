import {
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import Link from "next/link";
function InputFormLogin({
  EmailChange,
  PasswordChange,
  Loading,
  email,
  password,
}) {
  return (
    <div className="w-full p-4 flex flex-col space-y-4">
      <div className="space-y-1">
        <TypographyH3>Login / Register</TypographyH3>
        <Link href="/auth/forget-password" className="underline text-sm">
          <TypographyMuted>Forget your password?</TypographyMuted>
        </Link>
      </div>

      <div className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => EmailChange(e.target.value)}
          className="border border-accent-foreground rounded-sm"
          disabled={Loading}
          required
        />

        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => PasswordChange(e.target.value)}
          className="border border-accent-foreground rounded-sm"
          disabled={Loading}
          required
        />
      </div>

      <label className="flex items-center gap-2 cursor-pointer text-sm">
        <input
          type="checkbox"
          name="terms"
          className="accent-accent mt-0.5"
          required
        />
        <TypographyP>I agree to the Terms of Service</TypographyP>
      </label>

      <Button
        type="submit"
        variant="outline"
        className="w-full"
        size="lg"
        disabled={Loading || !email || !password}
      >
        {Loading ? "Sending..." : "Send OTP Code"}
      </Button>
    </div>
  );
}

export default InputFormLogin;
