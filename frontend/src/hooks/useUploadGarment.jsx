import { useState } from "react"
import { useUserStore } from "../stores/useUserStore"
import { UseClosetStore } from "../stores/useClosetStore"
import { API_BASE_URL } from "../constants"

export const useUploadGarment = () => {
  const [loading, setLoading] = useState(false)
  const token = useUserStore((state) => state.accessToken)
  const addGarmentToStore = UseClosetStore((state) => state.setClothes)
  const currentClothes = UseClosetStore((state) => state.allClothes)

  const upload = async (file, garmentType) => {
    setLoading(true)
    const formData = new FormData()
    formData.append("image", file)
    formData.append("garmentType", garmentType)

    try {
      const response = await fetch(`${API_BASE_URL}/clothes`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })

      if (response.ok) {
        const newGarment = await response.json()
        addGarmentToStore([...currentClothes, newGarment])
        return {success: true}
      }

    } catch {
      console.error("upload failed", err)
      return {success: false, error: err}
    } finally {
      setLoading(false)
    }

  }
  return {upload, loading}
}