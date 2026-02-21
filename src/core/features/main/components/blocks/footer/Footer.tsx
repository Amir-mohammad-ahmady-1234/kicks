import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import {
  TypographyH2,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";

function Footer() {
  return (
    <footer className="mx-auto max-w-345 p-5 ">
      <div className="rounded-2xl bg-primary  overflow-hidden">
        <div className="p-6 sm:p-10 lg:p-12 text-secondary">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="flex-1 max-w-2xl text-center lg:text-right space-y-6">
              <div className="space-y-3">
                <TypographyH2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Join our KicksPlus Club & get 15% off
                </TypographyH2>
                <TypographySmall className="text-secondary/80 text-sm sm:text-base">
                  Sign up for free! Join the community.
                </TypographySmall>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30 h-12"
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="h-12 px-8 bg-white text-black hover:bg-gray-100 font-medium whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="shrink-0">
              <ImgNormalCustom
                src="/common/img/logop.png"
                alt="KicksPlus Logo"
                width={500}
                height={500}
                className="w-48 sm:w-64 lg:w-80 xl:w-96 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="bg-foreground/95 px-6 py-4 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 KicksPlus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
