import { Button } from "@/core/components/shadcn/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { TypographyH4 } from "../Typography";

export type TItemCardMoreFilter = {
  item: string;
};

function CardMoreFilter({
  items,
  title,
  classname,
}: {
  title: string;
  classname: string;
  items: TItemCardMoreFilter[];
}) {
  const route = useRouter();
  const useparams = useSearchParams();
  const [select, setselect] = useState(null);

  function handelSelectItem(item: string) {
    const params = new URLSearchParams(useparams.toString());
    if (item === select) {
      toast.success("Ok!");
      setselect(null);
      params.delete(title.toLowerCase());
    } else {
      params.set(title.toLowerCase(), item.toLowerCase());
      toast.success("Add Filter");
      setselect(item);
    }
    const newQuery = params.toString();
    if (newQuery !== useparams.toString()) {
      route.push(`?${newQuery}`);
    }
  }

  if (items.length === 0) {
    return (
      <div className={`border ${classname ? classname : ""} p-2 rounded mt-2`}>
        <Button variant="outline">❌</Button>
      </div>
    );
  }
  return (
    <div>
      <TypographyH4>{title}</TypographyH4>
      <div className={`border ${classname ? classname : ""} p-2 rounded mt-2`}>
        {items.map((i) => {
          return (
            <Button
              key={i.item}
              variant="outline"
              className={`${
                select === i.item
                  ? "bg-amber-100 border border-sidebar opacity-70 hover:bg-destructive"
                  : ""
              }`}
              onClick={() => handelSelectItem(i.item)}
            >
              {i.item}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default CardMoreFilter;
