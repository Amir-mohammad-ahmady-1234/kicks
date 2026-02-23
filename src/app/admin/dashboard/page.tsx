import BoxDashboard from "@/core/features/admin/components/ui/analysis/BoxDashboard";
import { OrdersChart } from "@/core/features/admin/components/ui/product/OrdersChart";
import SalesChart from "@/core/features/admin/components/ui/analysis/ShadcnCharts";
import Tavel5BestProduct from "@/core/features/admin/components/ui/tabel/Tavel5BestProduct";

function Page() {
  return (
    <section className="p-4 space-y-6">
      <BoxDashboard />

      <div className="grid gap-4 md:grid-cols-2">
        <SalesChart />
        <OrdersChart />
      </div>

      <Tavel5BestProduct />
    </section>
  );
}

export default Page;
