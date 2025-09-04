import React, { useState } from "react"
import { Plus, Search, Edit, Trash2, Eye, Upload, MapPin, Award } from "lucide-react"

export default function ArtistsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [artistImage, setArtistImage] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")

  const artists = [
    { 
      id: 1,
      name: "Fatima Al-Zahra",
      email: "fatima@example.com",
      specialty: "Textile Weaving",
      location: "Morocco",
      products: 23,
      rating: 4.9,
      status: "Active",
      joinDate: "2023-01-15",
      image: "https://via.placeholder.com/60x60?text=FA",
    },
    {
      id: 2,
      name: "Li Wei",
      email: "li.wei@example.com",
      specialty: "Ceramic Arts",
      location: "China",
      products: 18,
      rating: 4.8,
      status: "Active",
      joinDate: "2023-02-20",
      image: "https://via.placeholder.com/60x60?text=LW",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      specialty: "Metalwork",
      location: "Egypt",
      products: 15,
      rating: 4.7,
      status: "Pending",
      joinDate: "2023-03-10",
      image: "https://via.placeholder.com/60x60?text=AH",
    },
    {
      id: 4,
      name: "Maria Santos",
      email: "maria@example.com",
      specialty: "Embroidery",
      location: "Mexico",
      products: 31,
      rating: 4.9,
      status: "Active",
      joinDate: "2022-11-05",
      image: "https://via.placeholder.com/60x60?text=MS",
    },
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setArtistImage(imageUrl)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
    setIsAddDialogOpen(false)
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Artists</h1>
          <p className="text-gray-600">Manage artisan profiles and partnerships</p>
        </div>
        <button 
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Artist
        </button>
      </div>

      {/* Add Artist Modal */}
      {isAddDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Add New Artist</h2>
              <p className="text-gray-600">Register a new artisan to the ArtisanAxis platform</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="artist-name" className="text-sm font-medium">Full Name</label>
                    <input 
                      id="artist-name" 
                      type="text"
                      placeholder="Enter artist's full name" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="artist-email" className="text-sm font-medium">Email</label>
                    <input 
                      id="artist-email" 
                      type="email" 
                      placeholder="artist@example.com" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Profile Photo</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    {artistImage ? (
                      <div className="text-center">
                        <img
                          src={artistImage}
                          alt="Artist"
                          className="mx-auto rounded-full mb-4 w-30 h-30 object-cover"
                        />
                        <button 
                          type="button" 
                          onClick={() => setArtistImage("")}
                          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                          Change Photo
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4">
                          <label htmlFor="artist-image" className="cursor-pointer">
                            <span className="mt-2 block text-sm font-medium text-gray-900">Upload profile photo</span>
                            <input
                              id="artist-image"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageUpload}
                            />
                          </label>
                          <p className="mt-1 text-sm text-gray-500">PNG, JPG up to 5MB</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="artist-bio" className="text-sm font-medium">Biography</label>
                  <textarea 
                    id="artist-bio" 
                    placeholder="Tell the artist's story, background, and journey" 
                    rows={4} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="specialty" className="text-sm font-medium">Specialty/Craft</label>
                    <select 
                      id="specialty"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select specialty</option>
                      <option value="textiles">Textile Weaving</option>
                      <option value="pottery">Ceramic Arts</option>
                      <option value="metalwork">Metalwork</option>
                      <option value="jewelry">Jewelry Making</option>
                      <option value="woodwork">Woodwork</option>
                      <option value="embroidery">Embroidery</option>
                      <option value="painting">Traditional Painting</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium">Years of Experience</label>
                    <input 
                      id="experience" 
                      type="number" 
                      placeholder="0" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="country" className="text-sm font-medium">Country</label>
                    <input 
                      id="country" 
                      type="text"
                      placeholder="e.g., Morocco, India, Peru" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium">City/Region</label>
                    <input 
                      id="city" 
                      type="text"
                      placeholder="e.g., Fez, Mumbai, Cusco" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="techniques" className="text-sm font-medium">Traditional Techniques</label>
                  <textarea 
                    id="techniques" 
                    placeholder="Describe the traditional techniques and methods used" 
                    rows={3} 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <input 
                      id="phone" 
                      type="tel"
                      placeholder="+1 (555) 123-4567" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">Website/Portfolio</label>
                    <input 
                      id="website" 
                      type="url"
                      placeholder="https://artist-portfolio.com" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="cultural-background" className="text-sm font-medium">Cultural Background</label>
                  <textarea
                    id="cultural-background"
                    placeholder="Share the cultural heritage and traditions that influence their work"
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setIsAddDialogOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    onClick={handleSubmit}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                  >
                    Add Artist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Artist Management</h2>
          <p className="text-gray-600">View and manage all registered artists</p>
        </div>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select 
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-48 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="all">All Specialties</option>
            <option value="textiles">Textile Weaving</option>
            <option value="pottery">Ceramic Arts</option>
            <option value="metalwork">Metalwork</option>
            <option value="jewelry">Jewelry Making</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-3 font-medium text-gray-900">Artist</th>
                <th className="text-left p-3 font-medium text-gray-900">Specialty</th>
                <th className="text-left p-3 font-medium text-gray-900">Location</th>
                <th className="text-left p-3 font-medium text-gray-900">Products</th>
                <th className="text-left p-3 font-medium text-gray-900">Rating</th>
                <th className="text-left p-3 font-medium text-gray-900">Status</th>
                <th className="text-left p-3 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <tr key={artist.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="rounded-full w-10 h-10 object-cover"
                      />
                      <div>
                        <div className="font-medium">{artist.name}</div>
                        <div className="text-sm text-gray-500">{artist.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{artist.specialty}</td>
                  <td className="p-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {artist.location}
                    </div>
                  </td>
                  <td className="p-3">{artist.products}</td>
                  <td className="p-3">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1 text-amber-400" />
                      {artist.rating}
                    </div>
                  </td>
                  <td className="p-3">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        artist.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : artist.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {artist.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}