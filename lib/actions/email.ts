"use server";
import { sendBlueprintEmail } from "@/lib/mail";

export async function handleLeadGeneration(formData: {
  email: string;
  name: string;
  phone: string;
}) {
  if (!formData.email || !formData.name || !formData.phone) {
    return { error: "Missing required fields" };
  }

  return await sendBlueprintEmail(
    formData.email,
    formData.name,
    formData.phone,
  );
}
