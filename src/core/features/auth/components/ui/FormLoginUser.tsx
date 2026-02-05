import Logo from "@/core/features/main/components/ui/Logo";
import { toast } from "sonner";
import InputFormLogin from "./InputFormLogin";

interface FormLoginUserProps {
  email: string;
  password: string;
  EmailChange: (value: string) => void;
  PasswordChange: (value: string) => void;
  SendOtp: () => void;
  Loading: boolean;
}

export default function FormLoginUser({
  email,
  password,
  EmailChange,
  PasswordChange,
  SendOtp,
  Loading,
}: FormLoginUserProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("error");
      return;
    }
    SendOtp();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full md:p-4 h-screen justify-center items-center space-y-10 "
    >
      <Logo width={150} />

      <InputFormLogin
        EmailChange={EmailChange}
        PasswordChange={PasswordChange}
        Loading={Loading}
        email={email}
        password={password}
      />
    </form>
  );
}
