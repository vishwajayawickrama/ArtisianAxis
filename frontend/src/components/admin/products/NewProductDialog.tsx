import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Plus, Upload, X, Loader2, AlertCircle } from "lucide-react"
import { useCreateProduct } from "@/hooks/api/admin/useCreateProducts"
import { useCollections } from "@/hooks/api/admin/useCollections"



interface Collection {
  id: string,
  name: string,
  description: string,
  products: number,
  image: string
}

const artists = [
  "Fatima Al-Zahra",
  "Li Wei",
  "Ahmed Hassan",
  "Maria Santos",
  "Rajesh Kumar",
  "Carmen Rodriguez",
  "Hiroshi Tanaka",
  "Almaz Bekele",
]

export default function NewProductDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [productImage, setProductImage] = useState<string>("")
  const [selectedImages, setSelectedImages] = useState<File | null>(null)
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    artist: "",
    price: "",
    originalPrice: "",
    rating: 0,
    reviews: 0,
    image: "",
    badge: "",
    origin: "",
    materials: "",
    in_stock: true,
    collection: "",
  })
  const createProduct = useCreateProduct()
  const { data: collections, isLoading: collectionsLoading, isError: collectionsError } = useCollections()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProductImage(imageUrl)
      setSelectedImages(file)
      setPreviewImages([imageUrl])
    }
  }

//   const removeImage = (index: number) => {
//     setSelectedImages((prev) => prev.filter((_, i) => i !== index))
//     setPreviewImages((prev) => prev.filter((_, i) => i !== index))
//   }

  const handleInputChange = (field: string, value: string | boolean | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    
    const apiFormData = new FormData()
    apiFormData.append('name', formData.get('name') as string)
    apiFormData.append('artist', formData.get('artist') as string)
    apiFormData.append('price', formData.get('price') as string)
    
    // Handle original_price - make it required with default value if empty
    const originalPrice = formData.get('originalPrice') as string
    apiFormData.append('original_price', originalPrice || formData.get('price') as string)
    
    apiFormData.append('rating', formData.get('rating') as string || '0')
    apiFormData.append('reviews', formData.get('reviews') as string || '0')
    apiFormData.append('badge', formData.get('badge') as string || '')
    apiFormData.append('origin', formData.get('origin') as string || '')
    apiFormData.append('materials', formData.get('materials') as string || '')
    apiFormData.append('in_stock', formData.get('in_stock') === 'on' ? 'true' : 'false')
    
    // Handle collection field - only send if a valid collection is selected
    const collectionValue = formData.get('collection') as string
    console.log("Selected collection value:", collectionValue)
    const selectedCollection = collections.find((collection: Collection) => collection.name === collectionValue)
    if (selectedCollection) {
      apiFormData.append('collection', selectedCollection.id)
    }

    if (selectedImages) {
      apiFormData.append('image', selectedImages)
    }
    
    try {
      const result = await createProduct.mutateAsync(apiFormData)
      console.log('Product created successfully:', result)
      setIsDialogOpen(false)
      resetForm()
    } catch (error: any) {
      console.error('Failed to create product:', error)
      setSubmitError("Failed to create product. Please try again.")
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      artist: "",
      price: "",
      originalPrice: "",
      rating: 0,
      reviews: 0,
      image: "",
      badge: "",
      origin: "",
      materials: "",
      in_stock: true,
      collection: "none",
    })
    setSelectedImages(null)
    setProductImage("")
    setPreviewImages([])
    setSubmitError(null)
    const fileInput = document.getElementById('product-images') as HTMLInputElement
    if (fileInput) {
        fileInput.value = ''
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-600 hover:bg-artisan-rust-light">
          <Plus className="h-4 w-4 mr-2" /> Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new product.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-3 overflow-y-auto px-1" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Product Name *</Label>
            <Input 
              id="name" 
              name="name" 
              required 
              value={formData.name} 
              onChange={e => handleInputChange("name", e.target.value)}
              disabled={createProduct.isPending}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="artist">Artist/Artisan *</Label>
            <Select value={formData.artist} onValueChange={value => handleInputChange("artist", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select artist" />
              </SelectTrigger>
              <SelectContent>
                {artists.map(artist => (
                  <SelectItem key={artist} value={artist}>{artist}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

        {/* Collection Select */}
          <div className="space-y-2">
            <Label htmlFor="collection">Collection</Label>
            <Select name="collection" value={formData.collection} onValueChange={value => handleInputChange("collection", value)}>
              <SelectTrigger>
                <SelectValue placeholder={collectionsLoading ? "Loading collections..." : "Select collection"} />
              </SelectTrigger>
              <SelectContent>
                {collectionsError ? (
                  <SelectItem value="error" disabled>Error loading collections</SelectItem>
                ) : collectionsLoading ? (
                  <SelectItem value="loading" disabled>Loading...</SelectItem>
                ) : collections && collections.length > 0 ? (
                  <>
                    <SelectItem value="none">No Collection</SelectItem>
                    {collections.map((collection: Collection) => (
                      <SelectItem key={collection.id} value={collection.name}>
                        {collection.name}
                      </SelectItem>
                    ))}
                  </>
                ) : (
                  <SelectItem value="empty" disabled>No collections available</SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($) *</Label>
              <Input id="price" name="price" type="number" step="0.01" value={formData.price} onChange={e => handleInputChange("price", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="originalPrice">Original Price ($) *</Label>
              <Input 
                id="originalPrice" 
                name="originalPrice" 
                type="number" 
                step="0.01" 
                required
                value={formData.originalPrice} 
                onChange={e => handleInputChange("originalPrice", e.target.value)} 
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rating">Rating</Label>
              <Input id="rating" name="rating" type="number" step="0.1" min="0" max="5" value={formData.rating} onChange={e => handleInputChange("rating", parseFloat(e.target.value) || 0)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reviews">Number of Reviews</Label>
              <Input id="reviews" name="reviews" type="number" min="0" value={formData.reviews} onChange={e => handleInputChange("reviews", parseInt(e.target.value) || 0)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="badge">Badge (Optional)</Label>
            <Input id="badge" name="badge" placeholder="e.g., Bestseller, New, Limited" value={formData.badge} onChange={e => handleInputChange("badge", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="origin">Country/Region of Origin *</Label>
            <Input id="origin" name="origin" required value={formData.origin} onChange={e => handleInputChange("origin", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="materials">Materials</Label>
            <Input id="materials" name="materials" placeholder="e.g., Cotton, Silk, Wood" value={formData.materials} onChange={e => handleInputChange("materials", e.target.value)} />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="in_stock" 
              name="in_stock"
              checked={formData.in_stock} 
              onCheckedChange={checked => handleInputChange("in_stock", checked as boolean)} 
            />
            <Label htmlFor="in_stock">In Stock</Label>
          </div>

          {/* Product Images */}
          <div className="space-y-2">
            <Label>Product Image</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              {previewImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {previewImages.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img src={img} alt={`Product ${idx + 1}`} width={150} height={150} className="w-full h-32 object-cover rounded-lg" />
                      <Button type="button" variant="destructive" size="icon" className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => {setProductImage("")
                                                setSelectedImages(null)}}>
                        <X className="h-3 w-3" />
                      </Button>
                      {idx === 0 && (
                        <Badge className="absolute bottom-2 left-2 bg-artisan-rust text-white text-xs">Main</Badge>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="mx-auto h-10 w-12 text-gray-400" />
                  <div className="mt-4">
                    <label htmlFor="product-images" className="cursor-pointer">
                      <span className="mt-2 block text-sm font-medium text-gray-900">Upload product image</span>
                    </label>
                    <input id="product-images" name="images" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    <p className="mt-1 text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {submitError && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-800">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{submitError}</span>
            </div>
          )}

          <div className="flex justify-end space-x-2 pt-4 border-t flex-shrink-0">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
              disabled={createProduct.isPending}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-orange-600 hover:bg-orange-500"
              disabled={createProduct.isPending}
            >
              {createProduct.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Adding Product...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
