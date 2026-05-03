'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Loader } from 'lucide-react'

const schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Valid email required'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget'),
  message: z.string().min(10, 'Please tell us a bit more'),
})

type FormValues = z.infer<typeof schema>

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'mobile', label: 'Mobile App Development' },
  { value: 'cross-platform', label: 'Cross-Platform Development' },
  { value: 'web', label: 'Web Application Development' },
  { value: 'ai', label: 'AI Integration & Agents' },
  { value: 'multiple', label: 'Multiple services' },
]

const budgetOptions = [
  { value: '', label: 'Select a budget range' },
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 – $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
]

const inputClass =
  'w-full bg-surface-card border border-teal-700/20 rounded px-4 py-3 font-body text-teal-950 placeholder:text-teal-100 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/15 transition-all duration-200 text-sm'

const errorInputClass =
  'w-full bg-surface-card border border-teal-700 rounded px-4 py-3 font-body text-teal-950 placeholder:text-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-700/15 transition-all duration-200 text-sm'

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(_data: FormValues) {
    await new Promise((r) => setTimeout(r, 1000))
    setIsSuccess(true)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-body font-medium text-sm text-teal-700 block mb-1">
              First name
            </label>
            <input
              placeholder="Aren"
              {...register('firstName')}
              className={errors.firstName ? errorInputClass : inputClass}
            />
            {errors.firstName && (
              <p className="font-mono text-xs text-teal-700 mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="font-body font-medium text-sm text-teal-700 block mb-1">
              Last name
            </label>
            <input
              placeholder="Costanza"
              {...register('lastName')}
              className={errors.lastName ? errorInputClass : inputClass}
            />
            {errors.lastName && (
              <p className="font-mono text-xs text-teal-700 mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="font-body font-medium text-sm text-teal-700 block mb-1">Email</label>
          <input
            type="email"
            placeholder="aren@company.com"
            {...register('email')}
            className={errors.email ? errorInputClass : inputClass}
          />
          {errors.email && (
            <p className="font-mono text-xs text-teal-700 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="font-body font-medium text-sm text-teal-700 block mb-1">
            Company <span className="text-teal-100">(optional)</span>
          </label>
          <input
            placeholder="Company name"
            {...register('company')}
            className={inputClass}
          />
        </div>

        <div>
          <label className="font-body font-medium text-sm text-teal-700 block mb-1">Service</label>
          <select
            {...register('service')}
            className={errors.service ? errorInputClass : inputClass}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="font-mono text-xs text-teal-700 mt-1">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label className="font-body font-medium text-sm text-teal-700 block mb-1">
            Budget range
          </label>
          <select
            {...register('budget')}
            className={errors.budget ? errorInputClass : inputClass}
          >
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="font-mono text-xs text-teal-700 mt-1">{errors.budget.message}</p>
          )}
        </div>

        <div>
          <label className="font-body font-medium text-sm text-teal-700 block mb-1">
            Tell us about your project
          </label>
          <textarea
            rows={5}
            placeholder="What are you building?"
            {...register('message')}
            className={`${errors.message ? errorInputClass : inputClass} resize-none`}
          />
          {errors.message && (
            <p className="font-mono text-xs text-teal-700 mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-400 hover:bg-teal-700 disabled:opacity-60 text-white font-display font-bold py-4 rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            'Send message →'
          )}
        </button>
      </form>

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
  )
}

function AnimatePresenceWrapper({
  show,
  children,
}: {
  show: boolean
  children: React.ReactNode
}) {
  if (!show) return null
  return <>{children}</>
}
