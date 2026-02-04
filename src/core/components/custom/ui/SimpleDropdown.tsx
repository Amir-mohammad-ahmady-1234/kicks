"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";
import { Button } from "../../shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../shadcn/ui/dropdown-menu";

type Option = {
  value: string;
  label: string;
};

interface SimpleDropdownProps {
  options: Option[];
  value?: string;
  onValueChange?: (value: string) => void;
  title?: string;
  placeholder?: string;
  className?: string;
}

export function SimpleDropdown({
  options,
  value: controlledValue,
  onValueChange,
  title = "Size",
  placeholder = "انتخاب کنید",
  className,
}: SimpleDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState("");

  const value = controlledValue ?? internalValue;
  const selectedLabel =
    options.find((o) => o.value === value)?.label || placeholder;

  const handleSelect = (newValue: string) => {
    setInternalValue(newValue);
    onValueChange?.(newValue);
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-1">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={className}>
            <span className="font-normal">{selectedLabel}</span>
            <ChevronDown className="mr-2 h-2 w-2 opacity-60" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-[100px]">
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            chose {title}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onSelect={() => handleSelect(option.value)}
              className="cursor-pointer"
            >
              <span>{option.label}</span>
              {value === option.value && (
                <span className="mr-auto text-primary">✓</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
