import { filterProductTabel } from "@/core/api-route/admin/handlers/tabel/filterProductTabel";
import { TypographyH4 } from "@/core/components/custom/ui/Typography";
import { OrdersChart } from "@/core/features/admin/components/ui/product/OrdersChart";
import SalesChart from "@/core/features/admin/components/ui/ShadcnCharts";
import Tavel5BestProduct from "@/core/features/admin/components/ui/Tavel5BestProduct";

async function Page() {
  const Pdata = await filterProductTabel({
    limit: 5,
    page: 1,
  });
  console.log(Pdata);
  return (
    <section className="p-4 space-y-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="group rounded-xl border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          <TypographyH4 className="text-xs text-muted-foreground">
            Total Products
          </TypographyH4>

          <p className="mt-2 text-2xl font-bold text-[hsl(var(--chart-1))]">
            1,234
          </p>

          <span className="mt-1 block text-xs text-muted-foreground">
            +12% from last month
          </span>
        </div>

        <div className="group rounded-xl border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          <TypographyH4 className="text-xs text-muted-foreground">
            Active Orders
          </TypographyH4>

          <p className="mt-2 text-2xl font-bold text-[hsl(var(--chart-2))]">
            89
          </p>

          <span className="mt-1 block text-xs text-muted-foreground">
            +5% growth
          </span>
        </div>

        <div className="group rounded-xl border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          <TypographyH4 className="text-xs text-muted-foreground">
            Conversion Rate
          </TypographyH4>

          <p className="mt-2 text-2xl font-bold text-[hsl(var(--chart-3))]">
            4.7%
          </p>

          <span className="mt-1 block text-xs text-muted-foreground">
            +0.8% improvement
          </span>
        </div>

        <div className="group rounded-xl border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          <TypographyH4 className="text-xs text-muted-foreground">
            Avg. Order Value
          </TypographyH4>

          <p className="mt-2 text-2xl font-bold text-[hsl(var(--chart-4))]">
            $124.50
          </p>

          <span className="mt-1 block text-xs text-muted-foreground">
            Stable
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SalesChart />
        <OrdersChart />
      </div>

      <Tavel5BestProduct data={Pdata.data || []} />
    </section>
  );
}

export default Page;
