import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Upload } from "lucide-react"
import { useCreateCollection } from "@/hooks/api/admin/useCreateCollection"

export default function NewCollectionDialog() {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [collectionImage, setCollectionImage] = useState<string>("")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const createCollection = useCreateCollection()

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setCollectionImage(imageUrl)
            setSelectedFile(file)
        }
    }

    const resetForm = () => {
        setCollectionImage("")
        setSelectedFile(null)
        const form = document.getElementById('collection-form') as HTMLFormElement
        if (form) {
            form.reset()
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        
        const apiFormData = new FormData()
        apiFormData.append('name', formData.get('collectionName') as string)
        apiFormData.append('description', formData.get('description') as string || '')
        apiFormData.append('products', formData.get('products') as string || '0')
        
        if (selectedFile) {
            apiFormData.append('image', selectedFile)
        }

        try {
            const result = await createCollection.mutateAsync(apiFormData)
            console.log('Collection created successfully:', result)
            setIsAddDialogOpen(false)
            resetForm()
        } catch (error: any) {
            console.error('Failed to create collection:', error)
        }
    }

    const handleDialogClose = (open: boolean) => {
        setIsAddDialogOpen(open)
        if (!open) {
            resetForm()
        }
    }

    return (
        <Dialog open={isAddDialogOpen} onOpenChange={handleDialogClose}>
            <DialogTrigger asChild>
                <Button className="bg-orange-700 hover:bg-orange-600">
                    <Plus className="h-4 w-4 mr-2" /> Add Collection
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg max-h-[90vh] flex flex-col">
                <DialogHeader className="flex-shrink-0">
                    <DialogTitle>Create New Collection</DialogTitle>
                    <DialogDescription>Create a new collection to group related products</DialogDescription>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto px-1">
                    <form id="collection-form" className="space-y-3" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="collectionName">Collection Name</Label>
                            <Input 
                                id="collectionName" 
                                name="collectionName"
                                placeholder="Enter collection name" 
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea 
                                id="description" 
                                name="description"
                                placeholder="Describe this collection and its theme" 
                                rows={3} 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Collection Image</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                {collectionImage ? (
                                    <div className="text-center">
                                        <img
                                            src={collectionImage}
                                            alt="Collection preview"
                                            className="mx-auto rounded-lg mb-4 object-cover max-w-full h-32"
                                        />
                                        <Button 
                                            type="button" 
                                            variant="outline" 
                                            onClick={() => {
                                                setCollectionImage("")
                                                setSelectedFile(null)
                                            }}
                                        >
                                            Change Image
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <Upload className="mx-auto h-10 w-12 text-gray-400" />
                                        <div className="mt-4">
                                            <label htmlFor="collection-image" className="cursor-pointer">
                                                <span className="mt-2 block text-sm font-medium text-gray-900">
                                                    Upload collection image
                                                </span>
                                            </label>
                                            <input
                                                id="collection-image"
                                                name="image"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={handleImageUpload}
                                            />
                                            <p className="mt-1 text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="products">Number of Products</Label>
                            <Input 
                                id="products" 
                                name="products"
                                type="number"
                                placeholder="Enter number of products" 
                                min="0"
                            />
                        </div>
                    </form>
                </div>

                <div className="flex justify-end space-x-2 pt-4 border-t flex-shrink-0">
                    <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setIsAddDialogOpen(false)}
                        disabled={createCollection.isPending}
                    >
                        Cancel
                    </Button>
                    <Button 
                        type="submit" 
                        form="collection-form"
                        className="bg-orange-700 hover:bg-artisan-rust-light"
                        disabled={createCollection.isPending}
                    >
                        {createCollection.isPending ? 'Creating...' : 'Create Collection'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}