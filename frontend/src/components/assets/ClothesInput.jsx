import styled from "styled-components"
import { useUploadGarment } from "../../hooks/useUploadGarment"

const StyledLabel = styled.label`
  border: none;
  max-width: fit-content;
  font-family: "Montserrat";
  font-size: ${({theme}) => theme.fontSizes.sm};
  background: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.text};
  border-radius: 20px;
  padding: 10px 20px;
`

  // ${({theme, $variant}) => $variant === "clothes" &&
  // `
  //   background: ${theme => theme.colors.secondary};
  // `}


export const ClothesInput = () => {
  const {upload, loading} = useUploadGarment()

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    
    if (file) {
      await upload(file, "top")
    }
  }

  return (
    <StyledLabel>
      {loading ? "uploading ...": "upload new garment"}
      <input 
        type="file"
        hidden
        accept="image/*"
        onChange={handleFileUpload}
        disabled={loading}
      />
    </StyledLabel>
  )
}