
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import { Users, UserCheck, BookOpen, TrendingUp } from "lucide-react";

const Seekers = () => {
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
                  <h1 className="text-2xl font-bold text-gray-900">Solution Seekers</h1>
                  <p className="text-gray-600">Manage and view all solution seekers</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Seekers"
                value="3,891"
                change="+15% from last month"
                changeType="positive"
                icon={Users}
                color="blue"
              />
              <MetricCard
                title="Active Seekers"
                value="2,456"
                change="+12% from last week"
                changeType="positive"
                icon={UserCheck}
                color="green"
              />
              <MetricCard
                title="Solutions Found"
                value="1,823"
                change="+18% from last month"
                changeType="positive"
                icon={BookOpen}
                color="purple"
              />
              <MetricCard
                title="Success Rate"
                value="74.2%"
                change="+3.1% from last quarter"
                changeType="positive"
                icon={TrendingUp}
                color="orange"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Solution Seeker Management</h2>
              <p className="text-gray-600">Solution seeker management functionality will be implemented here.</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Seekers;
