"use server";
import { sendBlueprintEmail } from "@/lib/mail"; // Adjust path as needed

export async function handleLeadGeneration(formData: {
  email: string;
  name: string;
}) {
  if (!formData.email || !formData.name) {
    return { error: "Missing required fields" };
  }

  return await sendBlueprintEmail(formData.email, formData.name);
}
