import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Upload } from "lucide-react"
import CollectionCards from "@/components/admin/collections/Collections"

export default function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [collectionImage, setCollectionImage] = useState<string>("")

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
        <CollectionCards />
          
        </CardContent>
      </Card>
    </div>
  )
}
