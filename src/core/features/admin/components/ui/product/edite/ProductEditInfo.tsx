import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import { Input } from "@/core/components/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/shadcn/ui/select";
import { categoryP, Gender } from "@prisma/client";

const categories = [
  { value: "crocs", label: "Crocs" },
  { value: "nirkenstock", label: "Nirkenstock" },
  { value: "clarks", label: "Clarks" },
  { value: "timberland", label: "Timberland" },
  { value: "allen", label: "Allen" },
  { value: "oofos", label: "Oofos" },
  { value: "sorel", label: "Sorel" },
  { value: "hunter", label: "Hunter" },
];

const genders = [
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
];
function ProductEditInfo({
  productName,
  setProductName,
  price,
  setPrice,
  discount,
  setDiscount,
  category,
  setCategory,
  gender,
  setGender,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Product Name
          </label>
          <Input
            placeholder="Enter product name..."
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Price ($)
            </label>
            <Input
              type="number"
              placeholder="0.00"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Discount (%)
            </label>
            <Input
              type="number"
              placeholder="0"
              value={discount}
              onChange={(e) => {
                setDiscount(e.target.value);
              }}
              min="0"
              max="100"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Category</label>
            <Select
              value={category}
              onValueChange={(value: categoryP) => setCategory(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Gender</label>
            <Select
              value={gender}
              onValueChange={(value: Gender) => setGender(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                {genders.map((g) => (
                  <SelectItem key={g.value} value={g.value}>
                    {g.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductEditInfo;
