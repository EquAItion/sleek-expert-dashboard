
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import { Settings as SettingsIcon, Shield, Database, Wifi } from "lucide-react";

const Settings = () => {
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
                  <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                  <p className="text-gray-600">Platform configuration and system settings</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="System Status"
                value="Online"
                change="99.9% uptime"
                changeType="positive"
                icon={SettingsIcon}
                color="green"
              />
              <MetricCard
                title="Security Level"
                value="High"
                change="All checks passed"
                changeType="positive"
                icon={Shield}
                color="blue"
              />
              <MetricCard
                title="Database Health"
                value="Optimal"
                change="No issues detected"
                changeType="positive"
                icon={Database}
                color="purple"
              />
              <MetricCard
                title="API Status"
                value="Active"
                change="All endpoints healthy"
                changeType="positive"
                icon={Wifi}
                color="orange"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">System Configuration</h2>
              <p className="text-gray-600">Platform settings and configuration options will be implemented here.</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
