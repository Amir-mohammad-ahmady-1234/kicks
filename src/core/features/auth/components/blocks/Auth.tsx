"use client";

import { createUser } from "@/core/api-route/auth/handlers/createUser";
import { requestRegistration } from "@/core/api-route/auth/handlers/requestRegister";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import FormLoginUser from "../ui/FormLoginUser";
import FormOtpVerification from "../ui/FormOtpVerification";

export default function AuthSection() {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [Loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSendOtp() {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    setLoading(true);
    const result = await requestRegistration({ email, password });
    if (result.success && result.login) {
      toast.success(result.message || "login was successfully");
      router.push("/");
    } else if (result.success && result.register) {
      toast.success(result.message || "Verification code sent!");
      setStep("otp");
    } else {
      toast.error(result.error || "Failed to send code");
    }
    setLoading(false);
  }

  async function handleVerifyOtp() {
    if (otp.length !== 6) return;
    setLoading(true);
    const result = await createUser({ email, otp });
    if (result.success) {
      toast.success(result.message || "Account created successfully!");
      router.push("/admin/dashboard");
    } else {
      toast.error(result.error || "Verification failed");
      setOtp("");
    }
    setLoading(false);
  }

  async function handleResendOtp() {
    setLoading(true);
    const result = await requestRegistration({ email, password });
    if (result.success) {
      toast.success("New code sent!");
    } else {
      toast.error(result.error || "Failed to resend code");
    }
    setLoading(false);
  }

  return (
    <div>
      {step === "login" ? (
        <FormLoginUser
          email={email}
          password={password}
          EmailChange={setEmail}
          PasswordChange={setPassword}
          SendOtp={handleSendOtp}
          Loading={Loading}
        />
      ) : (
        <FormOtpVerification
          email={email}
          otp={otp}
          OtpChange={setOtp}
          Verify={handleVerifyOtp}
          Resend={handleResendOtp}
          Loading={Loading}
        />
      )}
    </div>
  );
}
