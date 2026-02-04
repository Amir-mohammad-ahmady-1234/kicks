import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/shadcn/ui/select";
import { categoryP } from "../../../../assets/types/Products";
function SelectBoxProductsDashboard({ setValues, values }) {
  return (
    <Select
      onValueChange={(value) =>
        setValues({ ...values, category: value as categoryP })
      }
      value={values.category}
      name="category"
    >
      <SelectTrigger className="w-[200px] bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-sm px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200 text-sm font-medium">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>

      <SelectContent className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-xl animate-in fade-in-0 zoom-in-95">
        <SelectGroup>
          <SelectItem
            className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
            value="allen"
          >
            {categoryP.allen}
          </SelectItem>
          <SelectItem
            className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
            value="clarks"
          >
            {categoryP.clarks}
          </SelectItem>

          <SelectItem
            className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
            value="crocs"
          >
            {categoryP.crocs}
          </SelectItem>
          <SelectItem
            className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
            value="hunter"
          >
            {categoryP.hunter}
          </SelectItem>
          <SelectItem
            className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
            value="nirkenstock"
          >
            {categoryP.nirkenstock}
          </SelectItem>
          <SelectItem
            className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
            value="oofos"
          >
            {categoryP.oofos}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectBoxProductsDashboard;
