import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";

function InputFormForgetPass({ handleSendOtp, email, setEmail, loading }) {
  return (
    <form onSubmit={handleSendOtp} className="w-full  space-y-6">
      <div className="text-center space-y-2">
        <TypographyH3>Forgot Password</TypographyH3>
        <p className="text-sm text-muted-foreground">
          Enter your email to receive a verification code
        </p>
      </div>

      <div className="space-y-2">
        <Input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="border border-accent-foreground rounded-sm"
          required
          dir="ltr"
        />
      </div>

      <Button
        type="submit"
        variant="outline"
        className="w-full h-12"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Code"}
      </Button>
    </form>
  );
}

export default InputFormForgetPass;
