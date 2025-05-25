"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  BarChart3,
  FileText,
  FolderOpen,
  Users,
  Settings,
  LogOut,
  Eye,
  Plus,
  TrendingUp,
  Calendar,
  MessageSquare,
} from "lucide-react"

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const stats = [
    { name: "Total Articles", value: "8", change: "+2", icon: FileText, color: "blue" },
    { name: "Total Projects", value: "8", change: "+1", icon: FolderOpen, color: "green" },
    { name: "Page Views", value: "1,234", change: "+12%", icon: Eye, color: "purple" },
    { name: "Contact Messages", value: "23", change: "+5", icon: MessageSquare, color: "orange" },
  ]

  const recentActivities = [
    { action: "New article published", item: "Building Scalable Web Applications", time: "2 hours ago" },
    { action: "Project updated", item: "Kira Untung - Smart Assistant", time: "1 day ago" },
    { action: "Contact message received", item: "From: john@example.com", time: "2 days ago" },
    { action: "Profile information updated", item: "Experience section", time: "3 days ago" },
  ]

  const quickActions = [
    { name: "New Article", href: "/admin/articles/new", icon: Plus, color: "blue" },
    { name: "New Project", href: "/admin/projects/new", icon: Plus, color: "green" },
    { name: "View Site", href: "/", icon: Eye, color: "purple" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" target="_blank" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Eye className="w-5 h-5" />
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <LogOut className="w-5 h-5 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Yordan!</h2>
          <p className="text-gray-600">Here&apos;s what&apos;s happening with your portfolio today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm text-${stat.color}-600 flex items-center mt-1`}>
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div
                      className={`p-2 bg-${action.color}-100 rounded-lg mr-3 group-hover:bg-${action.color}-200 transition-colors`}
                    >
                      <action.icon className={`w-4 h-4 text-${action.color}-600`} />
                    </div>
                    <span className="font-medium text-gray-900">{action.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Management Links */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Management</h3>
              <div className="space-y-3">
                <Link
                  href="/admin/articles"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="font-medium text-gray-900">Articles</span>
                  </div>
                  <span className="text-sm text-gray-500">8 items</span>
                </Link>
                <Link
                  href="/admin/projects"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <FolderOpen className="w-5 h-5 text-green-600 mr-3" />
                    <span className="font-medium text-gray-900">Projects</span>
                  </div>
                  <span className="text-sm text-gray-500">8 items</span>
                </Link>
                <Link
                  href="/admin/experience"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="font-medium text-gray-900">Experience</span>
                  </div>
                  <span className="text-sm text-gray-500">3 items</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <Link href="/admin/activity" className="text-sm text-blue-600 hover:text-blue-700">
                  View all
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.item}</p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
