"use client";
import { changePass } from "@/core/api-route/auth/handlers/changePass";
import { requestForgetPass } from "@/core/api-route/auth/handlers/requestForgetPass";
import { verifyForgetPassOtp } from "@/core/api-route/auth/handlers/verifyForgetPassOtp";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import FormOtpVerification from "./FormOtpVerification";
import InputFormForgetPass from "./InputFormForgetPass";
import InputNewPass from "./InputNewPass";

function FormForgetPasUser() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "newpassword">("email");
  const [otp, setOtp] = useState("");
  const router = useRouter();

  async function handleSendOtp(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    setLoading(true);
    const result = await requestForgetPass({ email: email.trim() });
    setLoading(false);
    if (result.success) {
      toast.success(result.message || "Verification code sent to your email");
      setStep("otp");
    } else {
      toast.error(result.error || "Failed to send code");
    }
  }

  async function handleVerifyOtp() {
    if (otp.length !== 6) {
      toast.error("Verification code must be 6 digits");
      return;
    }
    setLoading(true);
    const result = await verifyForgetPassOtp({ email, otp });
    setLoading(false);
    if (result.success) {
      toast.success("Code verified!");
      setStep("newpassword");
    } else {
      toast.error(result.error || "Invalid code");
      setOtp("");
    }
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    if (!newPassword || newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    const result = await changePass({ email, newPassword });
    setLoading(false);
    if (result.success) {
      toast.success("Password changed successfully");
      router.push("/");
    } else {
      toast.error(result.error || "Failed to change password");
    }
  }

  async function handleResendOtp() {
    await handleSendOtp();
  }
  return (
    <div className="flex flex-col w-1/2 md:p-4 justify-center items-center space-y-10">
      {step === "email" && (
        <InputFormForgetPass
          handleSendOtp={handleSendOtp}
          email={email}
          setEmail={setEmail}
          loading={loading}
        />
      )}

      {step === "otp" && (
        <FormOtpVerification
          email={email}
          otp={otp}
          OtpChange={setOtp}
          Verify={handleVerifyOtp}
          Resend={handleResendOtp}
          Loading={loading}
        />
      )}

      {step === "newpassword" && (
        <InputNewPass
          handleChangePassword={handleChangePassword}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          loading={loading}
          setConfirmPassword={setConfirmPassword}
          confirmPassword={confirmPassword}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default FormForgetPasUser;
