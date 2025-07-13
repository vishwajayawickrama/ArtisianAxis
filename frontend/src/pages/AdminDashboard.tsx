import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Users, ShoppingCart, DollarSign, TrendingUp, TrendingDown, Eye } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Products",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Package,
      color: "text-red-600",
    },
    {
      title: "Active Artists",
      value: "89",
      change: "+5%",
      trend: "up",
      icon: Users,
      color: "text-teal-600",
    },
    {
      title: "Total Orders",
      value: "3,456",
      change: "+18%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-amber-600",
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "-2%",
      trend: "down",
      icon: DollarSign,
      color: "text-green-600",
    },
  ]

  const recentProducts = [
    { name: "Handwoven Kilim Rug", artist: "Fatima Al-Zahra", status: "Active", price: "$299" },
    { name: "Ceramic Vase - Ming Style", artist: "Li Wei", status: "Pending", price: "$189" },
    { name: "Traditional Brass Lamp", artist: "Ahmed Hassan", status: "Active", price: "$149" },
    { name: "Embroidered Silk Scarf", artist: "Maria Santos", status: "Active", price: "$89" },
  ]

  const recentOrders = [
    { id: "#ORD-001", customer: "John Smith", amount: "$299", status: "Completed" },
    { id: "#ORD-002", customer: "Sarah Johnson", amount: "$189", status: "Processing" },
    { id: "#ORD-003", customer: "Mike Brown", amount: "$149", status: "Shipped" },
    { id: "#ORD-004", customer: "Emma Davis", amount: "$89", status: "Pending" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your ArtisanAxis admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center text-xs text-gray-600">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Products */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Products</CardTitle>
            <CardDescription>Latest products added to the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">by {product.artist}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={product.status === "Active" ? "default" : "secondary"}>{product.status}</Badge>
                    <span className="font-medium text-gray-900">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        order.status === "Completed"
                          ? "default"
                          : order.status === "Processing"
                            ? "secondary"
                            : order.status === "Shipped"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {order.status}
                    </Badge>
                    <span className="font-medium text-gray-900">{order.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <Package className="h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-medium text-gray-900">Add New Product</h3>
              <p className="text-sm text-gray-600">Create a new product listing</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <Users className="h-8 w-8 text-teal-600 mb-2" />
              <h3 className="font-medium text-gray-900">Add New Artist</h3>
              <p className="text-sm text-gray-600">Register a new artisan</p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <Eye className="h-8 w-8 text-amber-600 mb-2" />
              <h3 className="font-medium text-gray-900">View Analytics</h3>
              <p className="text-sm text-gray-600">Check platform performance</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}