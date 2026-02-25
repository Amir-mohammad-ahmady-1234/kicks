"use client";

import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import Link from "next/link";
import { useTheme } from "next-themes";

function Logo({ width = 100 }: { width?: number }) {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "/common/img/logo/logopsite.png"
      : "/common/img/logo/logosite.png";

  return (
    <Link href="/">
      <ImgNormalCustom
        alt="logosite"
        src={logoSrc }
        width={width}
        height={100}
      />
    </Link>
  );
}

export default Logo;
