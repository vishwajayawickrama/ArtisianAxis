import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"
import CollectionCards from "@/components/admin/collections/Collections"
import NewCollectionDialog from "@/components/admin/collections/NewCollectionDialog"

export default function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("")


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="mt-4 mx-3">
          <h1 className="text-3xl  font-bold text-gray-900">Collections</h1>
          <p className="text-gray-600">Organize products into curated collections</p>
        </div>
        {/* Dialog Box for add new collection  */}
        <NewCollectionDialog />
      </div>

      {/* Main Content */}
      <Card>
        <div className="flex justify-between">
          {/* Header */}
          <CardHeader>
            <CardTitle>Collection Management</CardTitle>
            <CardDescription>View and manage all product collections</CardDescription>
          </CardHeader>

          {/* Search Bar */}
          <div className="flex items-center space-x-4 w-[30vw] mr-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search collections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
            </div>
          </div>
        </div>
        <CardContent>
          {/* Collection Cards */}
          <CollectionCards searchTerm={searchTerm}/>
        </CardContent>
      </Card>
    </div>
  )
}
