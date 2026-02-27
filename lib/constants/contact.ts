/**
 * CONTACT CONSTANTS
 * Centralized contact information for SleekSites
 */

// 1. WhatsApp Configuration
// Note: Use international format without the '+' or spaces (e.g., 2547XXXXXXXX)
export const PHONE_NUMBER = "254746577838"; // Replace with your actual number

export const WHATSAPP_MESSAGE_TEMPLATE =
  "Hello SleekSites! I'm interested in starting a project. I'd like to discuss building a high-performance digital system for my business.";

// 2. Email Configuration
export const CONTACT_EMAIL = "andrew@sleeksites.co.ke";
export const SYSTEM_SENDER_EMAIL = "system@contact.sleeksites.co.ke";

// 3. Social & Professional Links
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/sleeksites",
  twitter: "https://twitter.com/sleeksites",
  github: "https://github.com/sleeksites",
};

// 4. Availability Status
export const AVAILABILITY_STATUS = "Available for new projects Q2 2026";

/**
 * Helper to generate the WhatsApp URL
 * Can be used in any component
 */
export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message || WHATSAPP_MESSAGE_TEMPLATE);
  return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
};
