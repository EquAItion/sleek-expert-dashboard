
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const weeklyData = [
  { name: "Mon", bookings: 24, experts: 12 },
  { name: "Tue", bookings: 32, experts: 19 },
  { name: "Wed", bookings: 28, experts: 15 },
  { name: "Thu", bookings: 45, experts: 23 },
  { name: "Fri", bookings: 38, experts: 20 },
  { name: "Sat", bookings: 52, experts: 28 },
  { name: "Sun", bookings: 29, experts: 16 },
];

const monthlyGrowth = [
  { month: "Jan", users: 1200 },
  { month: "Feb", users: 1890 },
  { month: "Mar", users: 2380 },
  { month: "Apr", users: 3490 },
  { month: "May", users: 4200 },
  { month: "Jun", users: 5100 },
];

export function DashboardChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
            <YAxis tick={{ fill: '#6b7280' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }} 
            />
            <Bar dataKey="bookings" fill="url(#blueGradient)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="experts" fill="url(#purpleGradient)" radius={[4, 4, 0, 0]} />
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyGrowth}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
            <YAxis tick={{ fill: '#6b7280' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: '#059669' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
