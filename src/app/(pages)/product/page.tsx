import { redirect } from "next/navigation";
import React from "react";

function page() {
  async function CreateProduct(formdData: FormData) {
      "use sercer";
      const title = formdData.get("title") String
      const price = formdData.get("price") String
      const description = formdData.get("description") String

      await addProduct(title,parseInt(price),description)
 redirect("/product")
    }
  return (
    <form action={CreateProduct} className="p-4 space-y-4 max-w-96">
      <label htmlFor="" className="text-black">
        Title
        <input
          type="text"
          name="title"
          className="block p-2 w-full text-black border rounded"
          id=""
        />
      </label>
      <label htmlFor="" className="text-black">
        Price
        <input
          type="text"
          name="price"
          className="block p-2 w-full text-black border rounded"
          id=""
        />
      </label>
      <label htmlFor="" className="text-black">
        Description
        <input
          type="text"
          name="description"
          className="block p-2 w-full text-black border rounded"
          id=""
        />
      </label>
    </form>
  );
}

export default page;
