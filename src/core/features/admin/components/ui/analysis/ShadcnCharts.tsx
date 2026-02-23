"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/core/components/shadcn/ui/chart";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
};
export const salesChartData = [
  { month: "Jan", sales: 2400 },
  { month: "Feb", sales: 2398 },
  { month: "Mar", sales: 9800 },
  { month: "Apr", sales: 3908 },
  { month: "May", sales: 4800 },
  { month: "Jun", sales: 3800 },
];
export default function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 Sales Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-80 w-full">
          <AreaChart data={salesChartData}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />

            <ChartTooltip content={<ChartTooltipContent />} />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="var(--color-sales)"
              fill="url(#salesGradient)"
              strokeWidth={5}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
