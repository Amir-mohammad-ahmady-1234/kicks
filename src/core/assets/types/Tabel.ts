import { TItemCardMoreFilter } from "@/core/components/custom/ui/tabel/CardMoreFilter";

type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (value: unknown, item: T) => React.ReactNode;
};
export interface TabelType<T> {
  Data: T[];
  CheckboxTabel: boolean;
  TableTextHead: string[];
  ShowImage: boolean;
  Columns: Column<T>[];
  pagination?: {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
  };
  ShowActions: boolean;
  ShowFilter: boolean;
  TextPlaceholder: string;
  ShowMoreFilter?: boolean;
  ItemsCategory?: TItemCardMoreFilter[];
  ItemsGender?: TItemCardMoreFilter[];
  ItemsSize?: TItemCardMoreFilter[];
}
