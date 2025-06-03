
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import { DashboardChart } from "@/components/DashboardChart";
import { RecentActivity } from "@/components/RecentActivity";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  BookOpen, 
  TrendingUp,
  Clock,
  Star,
  DollarSign
} from "lucide-react";

const Index = () => {
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
                  <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                  <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">Last login: 2 hours ago</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">AU</span>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            {/* Metrics Grid */}
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
                title="Solution Seekers"
                value="3,891"
                change="+8% from last month"
                changeType="positive"
                icon={Users}
                color="green"
              />
              <MetricCard
                title="Today's Schedules"
                value="47"
                change="+3 from yesterday"
                changeType="positive"
                icon={Calendar}
                color="purple"
              />
              <MetricCard
                title="Total Bookings"
                value="892"
                change="+15% from last week"
                changeType="positive"
                icon={BookOpen}
                color="orange"
              />
            </div>

            {/* Secondary Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Avg. Session Duration"
                value="42 min"
                change="+5 min from last week"
                changeType="positive"
                icon={Clock}
                color="blue"
              />
              <MetricCard
                title="Platform Rating"
                value="4.8"
                change="+0.2 from last month"
                changeType="positive"
                icon={Star}
                color="green"
              />
              <MetricCard
                title="Revenue Today"
                value="$12,450"
                change="+18% from yesterday"
                changeType="positive"
                icon={DollarSign}
                color="purple"
              />
              <MetricCard
                title="Growth Rate"
                value="23.5%"
                change="+2.1% from last quarter"
                changeType="positive"
                icon={TrendingUp}
                color="orange"
              />
            </div>

            {/* Charts Section */}
            <div className="mb-8">
              <DashboardChart />
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RecentActivity />
              </div>
              
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Active Sessions</span>
                      <span className="font-semibold text-green-600">23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pending Reviews</span>
                      <span className="font-semibold text-orange-600">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">New Messages</span>
                      <span className="font-semibold text-blue-600">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">System Health</span>
                      <span className="font-semibold text-green-600">99.9%</span>
                    </div>
                  </div>
                </div>

                {/* Top Experts */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Experts</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Dr. Sarah Wilson", rating: 4.9, sessions: 127 },
                      { name: "Prof. Michael Chen", rating: 4.8, sessions: 98 },
                      { name: "Dr. Emily Brown", rating: 4.9, sessions: 89 }
                    ].map((expert, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                        <div>
                          <p className="font-medium text-gray-900">{expert.name}</p>
                          <p className="text-xs text-gray-500">{expert.sessions} sessions</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{expert.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
