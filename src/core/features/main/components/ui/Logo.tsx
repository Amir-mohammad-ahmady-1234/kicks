import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import Link from "next/link";

function Logo({ width = 100 }: { width?: number }) {
  return (
    <Link href={"/"}>
      <ImgNormalCustom
        alt="logosite"
        src={"/common/img/logo/logosite.png"}
        width={width}
        height={100}
      />
    </Link>
  );
}

export default Logo;
