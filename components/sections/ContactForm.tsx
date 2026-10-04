"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import {
  contactSchema,
  budgetOptions,
  serviceOptions,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { submitContact } from "@/app/contact/actions";

const inputClass =
  "w-full bg-surface-card border border-teal-700/20 rounded px-4 py-3 font-body text-teal-950 placeholder:text-teal-100 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/15 transition-all duration-200 text-sm";

const errorInputClass =
  "w-full bg-surface-card border border-teal-700 rounded px-4 py-3 font-body text-teal-950 placeholder:text-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-700/15 transition-all duration-200 text-sm";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormValues) {
    setSubmitError(null);
    setIsSuccess(false);
    const result = await submitContact(data).catch(() => null);
    if (result?.ok) {
      setIsSuccess(true);
      reset();
    } else {
      setSubmitError(
        result?.error ??
          "Something went wrong sending your message. Please try again or email support@bitnetinc.com.",
      );
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        noValidate
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          {...register("website")}
          className="hidden"
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-body font-medium text-sm text-teal-700 block mb-1">
              First name
            </label>
            <input
              placeholder="Kieran"
              {...register("firstName")}
              className={errors.firstName ? errorInputClass : inputClass}
            />
            {errors.firstName && (
              <p className="font-mono text-xs text-teal-700 mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="font-body font-medium text-sm text-teal-700 block mb-1">
              Last name
            </label>
            <input
              placeholder="Doe"
              {...register("lastName")}
              className={errors.lastName ? errorInputClass : inputClass}
            />
            {errors.lastName && (
              <p className="font-mono text-xs text-teal-700 mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-body font-medium text-sm text-teal-700 block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="client@company.com"
              {...register("email")}
              className={errors.email ? errorInputClass : inputClass}
            />
            {errors.email && (
              <p className="font-mono text-xs text-teal-700 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="font-body font-medium text-sm text-teal-700 block mb-1">
              Phone number
            </label>
            <input
              type="tel"
              autoComplete="tel"
              placeholder="+1 (555) 123-4567"
              {...register("phone")}
              className={errors.phone ? errorInputClass : inputClass}
            />
            {errors.phone && (
              <p className="font-mono text-xs text-teal-700 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="font-body font-medium text-sm text-teal-700 block mb-1">
            Company <span className="text-teal-100">(optional)</span>
          </label>
          <input
            placeholder="Company name"
            {...register("company")}
            className={inputClass}
          />
        </div>

        <div>
          <label className="font-body font-medium text-sm text-teal-700 block mb-1">
            Service
          </label>
          <select
            {...register("service")}
            className={errors.service ? errorInputClass : inputClass}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="font-mono text-xs text-teal-700 mt-1">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-body font-medium text-sm text-teal-700 block mb-1">
            Budget range
          </label>
          <select
            {...register("budget")}
            className={errors.budget ? errorInputClass : inputClass}
          >
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="font-mono text-xs text-teal-700 mt-1">
              {errors.budget.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-body font-medium text-sm text-teal-700 block mb-1">
            Tell us about your project
          </label>
          <textarea
            rows={5}
            placeholder="What are you building?"
            {...register("message")}
            className={`${errors.message ? errorInputClass : inputClass} resize-none`}
          />
          {errors.message && (
            <p className="font-mono text-xs text-teal-700 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("smsConsent")}
            className="mt-0.5 w-4 h-4 shrink-0 accent-teal-400 cursor-pointer"
          />
          <span className="font-body text-xs text-teal-700 leading-relaxed">
            Yes, I agree to receive text messages (SMS) from BNinc about my
            inquiry and our services at the phone number provided. Message
            frequency varies. Message and data rates may apply. Reply STOP to
            opt out or HELP for help. Consent is not a condition of purchase.
          </span>
        </label>

        <p className="font-body text-xs text-teal-700/80 leading-relaxed">
          By submitting this form, you agree that BNinc may contact you by
          phone call or email about your inquiry. See our{" "}
          <Link href="/privacy" className="text-teal-400 underline hover:text-teal-950">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-teal-400 underline hover:text-teal-950">
            Terms &amp; Conditions
          </Link>
          .
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-400 hover:bg-teal-700 disabled:opacity-60 text-white font-display font-bold py-4 rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            "Send message →"
          )}
        </button>
      </form>

      {submitError && (
        <p role="alert" className="font-body text-sm text-red-700 mt-4">
          {submitError}
        </p>
      )}

      <AnimatePresenceWrapper show={isSuccess}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-teal-400/[0.08] border border-teal-400 rounded-lg p-5 mt-4"
        >
          <p className="font-display font-bold text-teal-950">Message sent.</p>
          <p className="font-body text-sm text-teal-700 mt-1">
            We'll be in touch within one business day.
          </p>
        </motion.div>
      </AnimatePresenceWrapper>
    </div>
  );
}

function AnimatePresenceWrapper({
  show,
  children,
}: {
  show: boolean;
  children: React.ReactNode;
}) {
  if (!show) return null;
  return <>{children}</>;
}
