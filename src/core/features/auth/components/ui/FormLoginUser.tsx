import {
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import Logo from "@/core/features/main/components/ui/Logo";
import Link from "next/link";
import { toast } from "sonner";

interface FormLoginUserProps {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSendOtp: () => void;
  isLoading: boolean;
}

export default function FormLoginUser({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSendOtp,
  isLoading,
}: FormLoginUserProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("error");
      return;
    }
    onSendOtp();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full md:p-4 h-screen justify-center items-center space-y-10 "
    >
      <Logo width={150} />

      <div className="w-full p-4 flex flex-col space-y-4">
        <div className="space-y-1">
          <TypographyH3>Login / Register</TypographyH3>
          <Link href="/forget-password" className="underline text-sm">
            <TypographyMuted>Forget your password?</TypographyMuted>
          </Link>
        </div>

        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="border border-accent-foreground rounded-sm"
            disabled={isLoading}
            required
          />

          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            className="border border-accent-foreground rounded-sm"
            disabled={isLoading}
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
          disabled={isLoading || !email || !password}
        >
          {isLoading ? "Sending..." : "Send OTP Code"}
        </Button>
      </div>
    </form>
  );
}
