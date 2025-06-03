
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const recentActivities = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "booked a session",
    expert: "Dr. Smith",
    time: "2 minutes ago",
    type: "booking",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    user: "Mike Chen",
    action: "completed consultation",
    expert: "Prof. Davis",
    time: "15 minutes ago",
    type: "completed",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    user: "Emily Brown",
    action: "left a review",
    expert: "Dr. Wilson",
    time: "1 hour ago",
    type: "review",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    user: "Alex Rodriguez",
    action: "joined the platform",
    expert: null,
    time: "2 hours ago",
    type: "signup",
    avatar: "/placeholder.svg"
  },
  {
    id: 5,
    user: "Lisa Wang",
    action: "updated profile",
    expert: null,
    time: "3 hours ago",
    type: "update",
    avatar: "/placeholder.svg"
  }
];

export function RecentActivity() {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "booking": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      case "review": return "bg-purple-100 text-purple-800";
      case "signup": return "bg-orange-100 text-orange-800";
      case "update": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Avatar className="h-10 w-10">
              <AvatarImage src={activity.avatar} alt={activity.user} />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                {activity.user.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {activity.user} {activity.action}
                {activity.expert && (
                  <span className="text-blue-600"> with {activity.expert}</span>
                )}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <Badge className={`${getBadgeColor(activity.type)} border-0`}>
              {activity.type}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
