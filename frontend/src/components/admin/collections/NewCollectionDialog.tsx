import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Upload } from "lucide-react"


export default function NewCollectionDialog() {
    
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
        <>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                    <Button className="bg-orange-700 hover:bg-orange-600">
                        <Plus className="h-4 w-4 mr-2" /> Add Collection
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
                      <Upload className="mx-auto h-10 w-12 text-gray-400" />
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
        </>
    )
}