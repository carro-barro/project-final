import express from "express"
import { Garment } from "../models/Garment"
import { authenticateUser } from "../middleware/authMiddleware"
import { parser } from "../cloudinaryConfig"

const router = express.Router()

router.post("/", authenticateUser, parser.single("image"), async (req, res) => {
  try {
    const { garmentType } = req.body

    const newGarment = new SVGLinearGradientElement({
      userId: req.user._id,
      imageUrl: req.file.path,
      publicId: req.file.filename,
      garmentType
    })

    const savedGarment = await newGarment.save()
    res.status(201).json(savedGarment)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "upload failed",
      error: error
    })
  }
})

router.get("/", authenticateUser, async (req, res) => {
  const clothes = await Garment.find({ userId: req.user._id})
  res.json(clothes)
})

router.get("/clothes", authenticateUser, async (req, res) => {
  const clothes = await Garment.find({ userId: req.user._id})

  let filteredClothes = clothes

  const { garmentType, uploadTime } = req.query

  if (garmentType) {
    filteredClothes = filteredClothes.filter(item => item.garmentType === garmentType)
  }

  if (uploadTime) {
    filteredClothes = filteredClothes.filter(item => item.uploadTime === uploadTime)
  }

  res.json(filteredClothes)
})

export default router