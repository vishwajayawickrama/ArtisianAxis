import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Edit, Trash2, Eye, Upload, Package } from "lucide-react"

export default function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [collectionImage, setCollectionImage] = useState<string>("")

  const collections = [
    {
      id: 1,
      name: "Traditional Textiles",
      description: "Handwoven fabrics and textiles from around the world",
      products: 245,
      status: "Active",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Ancient Pottery",
      description: "Traditional ceramic works and pottery pieces",
      products: 156,
      status: "Active",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Metalwork Masterpieces",
      description: "Handcrafted metal artifacts and decorative pieces",
      products: 89,
      status: "Active",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Cultural Jewelry",
      description: "Traditional jewelry from various cultures",
      products: 134,
      status: "Draft",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setCollectionImage(imageUrl)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Collections</h1>
          <p className="text-gray-600">Organize products into curated collections</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange-700 hover:bg-orange-600">
              <Plus className="h-4 w-4 mr-2" />
              Add Collection
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Collection</DialogTitle>
              <DialogDescription>Create a new collection to group related products</DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="collection-name">Collection Name</Label>
                <Input id="collection-name" placeholder="Enter collection name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="collection-description">Description</Label>
                <Textarea id="collection-description" placeholder="Describe this collection and its theme" rows={3} />
              </div>

              <div className="space-y-2">
                <Label>Collection Image</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  {collectionImage ? (
                    <div className="text-center">
                      <img
                        src={collectionImage || "/placeholder.svg"}
                        alt="Collection"
                        width={200}
                        height={150}
                        className="mx-auto rounded-lg mb-4"
                      />
                      <Button type="button" variant="outline" onClick={() => setCollectionImage("")}>
                        Change Image
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4">
                        <label htmlFor="collection-image" className="cursor-pointer">
                          <span className="mt-2 block text-sm font-medium text-gray-900">Upload collection image</span>
                          <input
                            id="collection-image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <p className="mt-1 text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="collection-tags">Tags</Label>
                <Input id="collection-tags" placeholder="Enter tags separated by commas" />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-artisan-rust hover:bg-artisan-rust-light">
                  Create Collection
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>Collection Management</CardTitle>
          <CardDescription>View and manage all product collections</CardDescription>
        </CardHeader>
        <CardContent>

        {/* Search Bar */}
          <div className="flex items-center space-x-4 mb-6">
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
        
        {/* Collection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Mapping Individual Cards */}
            {collections.map((collection) => (
              <Card key={collection.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">

                {/* Main Image */}
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Other Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">{collection.name}</h3>
                      <Badge variant={collection.status === "Active" ? "default" : "secondary"}>
                        {collection.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Package className="h-4 w-4 mr-1" />
                        {collection.products} products
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
