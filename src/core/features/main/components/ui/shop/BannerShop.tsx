import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import React from "react";

function BannerShop() {
  return (
    <div className="flex justify-center">
      <ImgNormalCustom
        src={"/common/img/main/banshop.png"}
        width={1200}
        height={1000}
        alt=""
        className="rounded-3xl object-cover"
      />
    </div>
  );
}

export default BannerShop;
