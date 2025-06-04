
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import { Bell, BellRing, CheckCircle, AlertCircle } from "lucide-react";

const Notifications = () => {
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
                  <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                  <p className="text-gray-600">System notifications and alerts management</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Notifications"
                value="2,456"
                change="+8% from last week"
                changeType="positive"
                icon={Bell}
                color="blue"
              />
              <MetricCard
                title="Unread"
                value="23"
                change="-12% from yesterday"
                changeType="positive"
                icon={BellRing}
                color="orange"
              />
              <MetricCard
                title="Acknowledged"
                value="2,401"
                change="+15% from last week"
                changeType="positive"
                icon={CheckCircle}
                color="green"
              />
              <MetricCard
                title="Critical Alerts"
                value="3"
                change="-2 from yesterday"
                changeType="positive"
                icon={AlertCircle}
                color="red"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Notification Management</h2>
              <p className="text-gray-600">Notification system and alert management functionality will be implemented here.</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Notifications;
