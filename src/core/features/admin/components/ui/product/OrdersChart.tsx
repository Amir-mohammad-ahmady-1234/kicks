"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/core/components/shadcn/ui/chart";
import { chartConfig, ordersData } from "../../../assets/mock/chart";

export function OrdersChart() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-base font-semibold">
          📦 Monthly Orders
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Orders performance over time
        </p>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-70 w-full">
          <BarChart data={ordersData}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              className="stroke-muted"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => [`${value}`, "Orders"]}
                />
              }
            />

            <Bar
              dataKey="orders"
              radius={[6, 6, 0, 0]}
              fill="var(--color-chart-4)"
              className="transition-opacity hover:opacity-80"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
