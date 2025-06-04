
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react";

const Analytics = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        
        <main className="flex-1 overflow-auto">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="lg:hidden" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
                  <p className="text-gray-600">Platform performance insights and metrics</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Revenue"
                value="$124,560"
                change="+18% from last month"
                changeType="positive"
                icon={BarChart3}
                color="blue"
              />
              <MetricCard
                title="Growth Rate"
                value="23.5%"
                change="+2.1% from last quarter"
                changeType="positive"
                icon={TrendingUp}
                color="green"
              />
              <MetricCard
                title="Conversion Rate"
                value="8.4%"
                change="+1.2% from last month"
                changeType="positive"
                icon={PieChart}
                color="purple"
              />
              <MetricCard
                title="Platform Activity"
                value="94.2%"
                change="+5.3% from last week"
                changeType="positive"
                icon={Activity}
                color="orange"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h2>
              <p className="text-gray-600">Detailed analytics and reporting functionality will be implemented here.</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
