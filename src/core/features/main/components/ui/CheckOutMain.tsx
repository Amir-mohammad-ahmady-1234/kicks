import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import {
  TypographyH3,
  TypographyH4,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/core/components/shadcn/ui/card";
import { Checkbox } from "@/core/components/shadcn/ui/checkbox";
import { Input } from "@/core/components/shadcn/ui/input";
function CheckOutMain() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full p-5 space-y-2 ">
          <TypographyP>Login and Checkout faster</TypographyP>
          <TypographyH3>Contact Details</TypographyH3>
          <TypographyMuted>
            We will use these details to keep you inform about your delivery.
          </TypographyMuted>
          <Input
            type="email"
            placeholder="Email"
            className="border border-foreground/60 w-full sm:w-1/3 rounded-md"
          />
          <TypographyH3>Shipping Address</TypographyH3>
          <div className="space-y-5">
            <div className="flex gap-4">
              <Input
                type="text"
                required
                placeholder="First Name*"
                className="border border-foreground/60 w-full sm:w-1/3 rounded-md"
              />
              <Input
                type="text"
                required
                placeholder="Last Name*"
                className="border border-foreground/60 w-full sm:w-1/3 rounded-md"
              />
            </div>
            <div>
              {" "}
              <Input
                type="text"
                required
                placeholder="Find Delivery Address*"
                className="border border-foreground/60 w-full sm:w-2/3 rounded-md"
              />
              <TypographyMuted>
                Start typing your street address or zip code for suggestion
              </TypographyMuted>
            </div>
          </div>
          <Input
            type="text"
            required
            placeholder="Phone Number*"
            className="border border-foreground/60 w-full sm:w-1/3 rounded-md mt-5"
          />
          <TypographyMuted>E.g. (123) 456-7890</TypographyMuted>
        </div>
        <div className="sm:w-2/4 w-full space-y-4 ">
          <Card>
            <CardHeader>
              <TypographyH3>Order Summary</TypographyH3>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <TypographySmall>1 ITEM</TypographySmall>
                <TypographySmall className="text-stone-500">
                  $130.00
                </TypographySmall>
              </div>

              <div className="flex items-center justify-between">
                <TypographySmall>Delivery</TypographySmall>
                <TypographySmall className="text-stone-500">
                  $6.99
                </TypographySmall>
              </div>

              <div className="flex items-center justify-between">
                <TypographySmall>Sales Tax</TypographySmall>
                <TypographySmall className="text-stone-500">-</TypographySmall>
              </div>
            </CardContent>

            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <TypographyH4>Total</TypographyH4>
                <TypographyP className="text-stone-500">$136.99</TypographyP>
              </div>
            </CardFooter>
          </Card>

          <Card className="p-4">
            <div className="flex flex-col items-start gap-4">
              <TypographyH4>Order Details</TypographyH4>
              <div className="flex  gap-2">
                <ImgNormalCustom
                  src={"/common/img/main/products/Rectangle1.png"}
                  alt="image produt"
                  width={100}
                  height={50}
                />

                <div>
                  <TypographySmall className="font-medium">
                    DROPSET TRAINER SHOES
                  </TypographySmall>

                  <TypographyMuted className="text-stone-600">
                    Men’s Road Running Shoes
                  </TypographyMuted>

                  <TypographyMuted className="text-stone-600">
                    Enamel Blue / University White
                  </TypographyMuted>

                  <TypographyMuted className="text-stone-600">
                    Size 10
                  </TypographyMuted>

                  <TypographyMuted className="text-stone-600">
                    Quantity: 1
                  </TypographyMuted>

                  <TypographyH4 className="mt-2">$130.00</TypographyH4>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="space-y-6">
        <TypographyH3>Delivery Options</TypographyH3>

        <div className="flex gap-4">
          <Card className="border rounded-xl w-full">
            <CardContent>
              <div className="space-y-1">
                <TypographySmall className="font-medium">
                  Standard Delivery — $6.00
                </TypographySmall>
                <TypographyMuted>
                  Enter your address to see when you’ll get your order
                </TypographyMuted>
              </div>
            </CardContent>
          </Card>
          <Card className="border rounded-xl w-full">
            <CardContent>
              <div className="space-y-1">
                <TypographySmall className="font-medium">
                  Collect in store — Free
                </TypographySmall>
                <TypographyMuted>Pay now, collect in store</TypographyMuted>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox className="border-stone-400 data-[state=checked]:bg-black data-[state=checked]:text-white" />
            <TypographyMuted>
              My billing and delivery information are the same
            </TypographyMuted>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox className="border-stone-400 data-[state=checked]:bg-black data-[state=checked]:text-white" />
            <TypographyMuted>I’m 13+ year old</TypographyMuted>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox className="border-stone-400 data-[state=checked]:bg-black data-[state=checked]:text-white" />
            <TypographyMuted>
              Yes, I’d like to receive emails about exclusive sales and more.
            </TypographyMuted>
          </label>
        </div>

        <Button
          className="bg-black/80 rounded-md text-secondary w-full sm:w-1/4  py-2 text-base font-medium hover:bg-secondary hover:text-black hover:border hover:border-stone-600"
          variant="secondary"
        >
          Review AND PAY
        </Button>
      </div>
    </>
  );
}

export default CheckOutMain;
