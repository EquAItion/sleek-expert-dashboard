
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";

const Schedules = () => {
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
                  <h1 className="text-2xl font-bold text-gray-900">Schedules</h1>
                  <p className="text-gray-600">Manage all scheduled sessions and appointments</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Today's Sessions"
                value="47"
                change="+3 from yesterday"
                changeType="positive"
                icon={Calendar}
                color="blue"
              />
              <MetricCard
                title="Upcoming Sessions"
                value="156"
                change="+8% from last week"
                changeType="positive"
                icon={Clock}
                color="green"
              />
              <MetricCard
                title="Completed"
                value="892"
                change="+15% from last month"
                changeType="positive"
                icon={CheckCircle}
                color="purple"
              />
              <MetricCard
                title="Cancelled"
                value="23"
                change="-12% from last month"
                changeType="positive"
                icon={XCircle}
                color="red"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Schedule Management</h2>
              <p className="text-gray-600">Schedule management functionality will be implemented here.</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Schedules;
