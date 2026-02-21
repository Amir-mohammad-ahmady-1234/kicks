import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import Link from "next/link";

function Logo({ width = 100 }: { width?: number }) {
  return (
    <Link href={"/"}>
      <ImgNormalCustom
        alt="logo"
        src={"/common/img/logo.png"}
        width={width}
        height={100}
      />
    </Link>
  );
}

export default Logo;
