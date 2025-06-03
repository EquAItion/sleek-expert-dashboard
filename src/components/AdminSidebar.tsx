
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  BookOpen,
  Settings,
  BarChart3,
  MessageSquare,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Experts", url: "/experts", icon: Users },
  { title: "Solution Seekers", url: "/seekers", icon: BookOpen },
  { title: "Schedules", url: "/schedules", icon: Calendar },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Messages", url: "/messages", icon: MessageSquare },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AdminSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={`border-r border-gray-200 bg-gradient-to-b from-slate-50 to-slate-100 ${collapsed ? "w-16" : "w-64"}`}>
      <SidebarContent className="p-4">
        <div className={`mb-8 ${collapsed ? "text-center" : ""}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">AdminPro</h1>
                <p className="text-xs text-gray-500">Expert Platform</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={`text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 ${collapsed ? "text-center" : ""}`}>
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                          isActive 
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105" 
                            : "text-gray-700 hover:bg-white hover:shadow-md hover:text-blue-600"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto pt-8">
          <SidebarMenuButton asChild>
            <button className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200 w-full ${collapsed ? "justify-center" : ""}`}>
              <LogOut className="w-5 h-5" />
              {!collapsed && <span className="font-medium">Logout</span>}
            </button>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
