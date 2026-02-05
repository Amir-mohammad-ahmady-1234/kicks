import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";

function InputNewPass({
  handleChangePassword,
  newPassword,
  setNewPassword,
  loading,
  setConfirmPassword,
  confirmPassword,
  setStep,
}) {
  return (
    <form onSubmit={handleChangePassword} className="w-full space-y-6">
      <div className="text-center space-y-2">
        <TypographyH3>New Password</TypographyH3>
        <p className="text-sm text-muted-foreground">Enter your new password</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border border-accent-foreground rounded-sm"
            disabled={loading}
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-accent-foreground rounded-sm"
            disabled={loading}
            required
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          className="flex-1 h-12"
          onClick={() => setStep("otp")}
          disabled={loading}
        >
          Back
        </Button>
        <Button type="submit" className="flex-1 h-12" disabled={loading}>
          {loading ? "Changing..." : "Change Password"}
        </Button>
      </div>
    </form>
  );
}

export default InputNewPass;
