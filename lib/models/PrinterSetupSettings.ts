import mongoose, { Schema, type Model } from "mongoose";

export interface PrinterSetupSettingsDocument {
  _id: string;
  allowStartNow: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const PrinterSetupSettingsSchema = new Schema<PrinterSetupSettingsDocument>(
  {
    _id: { type: String, required: true, default: "global" },
    allowStartNow: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const PrinterSetupSettings =
  (mongoose.models.PrinterSetupSettings as Model<PrinterSetupSettingsDocument>) ||
  mongoose.model<PrinterSetupSettingsDocument>("PrinterSetupSettings", PrinterSetupSettingsSchema);

export default PrinterSetupSettings;
