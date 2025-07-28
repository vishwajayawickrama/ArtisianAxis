import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Package,
  Users,
  Palette,
  ShoppingCart,
  Settings,
  BarChart3,
  LogOut,
  Menu,
  X,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Collections", href: "/admin/collections", icon: Palette },
  { name: "Artists", href: "/admin/artists", icon: Users },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (!auth && location.pathname !== "/admin/login") {
      navigate("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [location.pathname, navigate])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    navigate("/admin/login")
  }

  const handleNavigation = (href: string) => {
    navigate(href)
    setSidebarOpen(false)
  }

  if (location.pathname === "/admin/login") {
    return <>{children}</>
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="ArtisanAxis Logo" width={32} height={32} />
            <span className="text-lg font-bold text-gray-900">ArtisanAxis</span>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="mt-6">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`flex items-center w-full px-6 py-3 text-sm font-medium transition-colors text-left ${
                  isActive
                    ? "bg-red-50 text-red-600 border-r-2 border-red-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </button>
            )
          })}
        </nav>
        <div className="absolute bottom-0 w-full p-6">
          <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleLogout}>
            <LogOut className="mr-3 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}