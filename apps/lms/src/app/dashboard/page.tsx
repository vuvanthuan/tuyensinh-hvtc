import { DashboardTable } from "~/components/dashboard/dashboard-table";
import { StatCard } from "~/components/dashboard/stat-card";
import { TrafficChart } from "~/components/dashboard/traffic-chart";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$1,250.00"
          trend={{
            percentage: "+12.5%",
            description: "Trending up this month",
            subDescription: "Visitors for the last 6 months",
            isUp: true,
          }}
        />
        <StatCard
          title="New Customers"
          value="1,234"
          trend={{
            percentage: "-20%",
            description: "Down 20% this period",
            subDescription: "Acquisition needs attention",
            isUp: false,
          }}
        />
        <StatCard
          title="Active Accounts"
          value="45,678"
          trend={{
            percentage: "+12.5%",
            description: "Strong user retention",
            subDescription: "Engagement exceed targets",
            isUp: true,
          }}
        />
        <StatCard
          title="Growth Rate"
          value="4.5%"
          trend={{
            percentage: "+4.5%",
            description: "Steady performance increase",
            subDescription: "Meets growth projections",
            isUp: true,
          }}
        />
      </div>

      <div className="grid grid-cols-1">
        <TrafficChart />
      </div>

      <div className="grid grid-cols-1">
        <DashboardTable />
      </div>
    </div>
  );
}
