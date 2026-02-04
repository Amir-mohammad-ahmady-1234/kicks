import CardMoreFilter, { TItemCardMoreFilter } from "./CardMoreFilter";

function MoreFilterComponents({
  ItemsCategory,
  ItemsGender,
  ItemsSize,
}: {
  ItemsCategory?: TItemCardMoreFilter[];
  ItemsGender?: TItemCardMoreFilter[];
  ItemsSize?: TItemCardMoreFilter[];
}) {
  return (
    <div>
      <CardMoreFilter
        title="Category"
        classname="grid grid-cols-3 md:grid-cols-4"
        items={ItemsCategory}
      />
      <CardMoreFilter
        title="Gender"
        classname="grid grid-cols-2 md:grid-cols-2"
        items={ItemsGender}
      />
      <CardMoreFilter
        title="Size"
        classname="grid grid-cols-5 md:grid-cols-7"
        items={ItemsSize}
      />
    </div>
  );
}

export default MoreFilterComponents;
