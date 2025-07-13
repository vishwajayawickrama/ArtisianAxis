import { Upload } from "lucide-react"
export default function Test() {
    return (
        <>
            <h2 className="bg-red-50">Testing</h2>
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <input
                            id="collection-image"
                            type="file"
                            accept="image/*"
                            className=""
                          />
        </>
    )
}