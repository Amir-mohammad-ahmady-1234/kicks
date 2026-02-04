import { Input } from "@/core/components/shadcn/ui/input";
import { Textarea } from "@/core/components/shadcn/ui/textarea";

function ProductDashboardStep1({ setValues, values }) {
  return (
    <>
      <Input
        label="Product Name"
        name="name"
        type="text"
        placeholder="Enter product name"
        value={values.productName}
        onChange={(e) => setValues({ ...values, productName: e.target.value })}
      />
      <Input
        label="Short Description"
        name="description"
        type="text"
        placeholder="Enter short description"
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
      />
      <Textarea
        label="Full Description"
        name="fullDescription"
        placeholder="Enter full description"
        value={values.fullDescription}
        onChange={(e) =>
          setValues({ ...values, fullDescription: e.target.value })
        }
      />
      <Input
        label="Price ($)"
        name="price"
        type="number"
        min={0}
        placeholder="100"
        value={values.price}
        onChange={(e) =>
          setValues({ ...values, price: Number(e.target.value) })
        }
      />
      <Input
        label="Discount (%)"
        name="discount"
        type="number"
        min={0}
        max={100}
        placeholder="20"
        value={values.discount}
        onChange={(e) =>
          setValues({ ...values, discount: Number(e.target.value) })
        }
      />
    </>
  );
}

export default ProductDashboardStep1;
