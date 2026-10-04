import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(100),
  lastName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Valid email required").max(254),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^\+?[0-9\s\-().]+$/, "Valid phone number required")
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Valid phone number required"),
  company: z.string().trim().max(200).optional(),
  service: z.string().min(1, "Please select a service").max(50),
  budget: z.string().min(1, "Please select a budget").max(50),
  message: z.string().trim().min(10, "Please tell us a bit more").max(5000),
  smsConsent: z.boolean().optional(),
  // Honeypot: hidden from people, filled in by bots.
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "cross-platform", label: "Cross-Platform Development" },
  { value: "web", label: "Web Application Development" },
  { value: "ai", label: "AI Integration & Agents" },
  { value: "multiple", label: "Multiple services" },
];

export const budgetOptions = [
  { value: "", label: "Select a budget range" },
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 – $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "over-100k", label: "Over $100,000" },
];
