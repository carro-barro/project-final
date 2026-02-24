import mongoose, { Schema } from "mongoose"

const garmentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  publicId: {
    type: String,
    required: true
  },
  garmentType: {
    type: String,
    enum: ["top", "bottom", "pants", "shoes", "full-body"],
    required: true
  } ,
  uploadDate: {
    type: Date,
    default: Date.now
  } 
})

export const Garment = mongoose.model("Garment", garmentSchema)