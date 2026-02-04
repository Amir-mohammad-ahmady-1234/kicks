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
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSendOtp = async () => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    setIsLoading(true);

    const result = await requestRegistration({ email, password });

    if (result.success) {
      toast.success(result.message || "Verification code sent!");
      setStep("otp");
    } else {
      toast.error(result.error || "Failed to send code");
    }

    setIsLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return;

    setIsLoading(true);

    const result = await createUser({ email, otp });

    if (result.success) {
      toast.success(result.message || "Account created successfully!");
      router.push("/admin/dashboard");
    } else {
      toast.error(result.error || "Verification failed");
      setOtp("");
    }

    setIsLoading(false);
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    const result = await requestRegistration({ email, password });
    if (result.success) {
      toast.success("New code sent!");
    } else {
      toast.error(result.error || "Failed to resend code");
    }
    setIsLoading(false);
  };

  return (
    <section className="flex flex-col sm:flex-row min-h-screen md:w-4/5  justify-center">
      <div>
        {step === "login" ? (
          <FormLoginUser
            email={email}
            password={password}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onSendOtp={handleSendOtp}
            isLoading={isLoading}
          />
        ) : (
          <FormOtpVerification
            email={email}
            otp={otp}
            onOtpChange={setOtp}
            onVerify={handleVerifyOtp}
            onResend={handleResendOtp}
            isLoading={isLoading}
          />
        )}
      </div>
    </section>
  );
}
