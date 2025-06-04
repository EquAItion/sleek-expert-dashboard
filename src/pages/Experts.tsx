
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import { Users, UserCheck, Star, Clock } from "lucide-react";

const Experts = () => {
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
                  <h1 className="text-2xl font-bold text-gray-900">Experts</h1>
                  <p className="text-gray-600">Manage and view all platform experts</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Experts"
                value="1,247"
                change="+12% from last month"
                changeType="positive"
                icon={UserCheck}
                color="blue"
              />
              <MetricCard
                title="Active Experts"
                value="892"
                change="+8% from last week"
                changeType="positive"
                icon={Users}
                color="green"
              />
              <MetricCard
                title="Average Rating"
                value="4.8"
                change="+0.2 from last month"
                changeType="positive"
                icon={Star}
                color="purple"
              />
              <MetricCard
                title="Response Time"
                value="12 min"
                change="-3 min from last week"
                changeType="positive"
                icon={Clock}
                color="orange"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Expert Management</h2>
              <p className="text-gray-600">Expert management functionality will be implemented here.</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Experts;
