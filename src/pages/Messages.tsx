
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import { MessageSquare, Send, Inbox, Archive } from "lucide-react";

const Messages = () => {
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
                  <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                  <p className="text-gray-600">Platform messaging and communication center</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Messages"
                value="12,847"
                change="+24% from last month"
                changeType="positive"
                icon={MessageSquare}
                color="blue"
              />
              <MetricCard
                title="Messages Sent"
                value="8,923"
                change="+18% from last week"
                changeType="positive"
                icon={Send}
                color="green"
              />
              <MetricCard
                title="Unread Messages"
                value="47"
                change="-15% from yesterday"
                changeType="positive"
                icon={Inbox}
                color="orange"
              />
              <MetricCard
                title="Archived"
                value="3,892"
                change="+12% from last month"
                changeType="neutral"
                icon={Archive}
                color="purple"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Message Center</h2>
              <p className="text-gray-600">Message management and communication tools will be implemented here.</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Messages;
