import { type FormEvent, useState } from 'react'
import Button from './Button'

interface FormData {
  name: string
  phone: string
  email: string
  county: string
  description: string
}

const initialFormData: FormData = {
  name: '',
  phone: '',
  email: '',
  county: '',
  description: '',
}

const counties = [
  'Grey County',
  'Bruce County',
  'Simcoe County',
  'Wellington County',
  'Huron County',
  'Perth County',
  'Other',
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Form submission will be wired up to a backend later
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-blue-primary/5 border border-blue-primary/20 p-8 text-center">
        <h3 className="text-2xl font-bold text-blue-primary mb-2">Thank You!</h3>
        <p className="text-gray-dark">
          We've received your request and will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-1">
            Name <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-light px-4 py-3 text-gray-dark focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/20 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-dark mb-1">
            Phone <span className="text-orange">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-light px-4 py-3 text-gray-dark focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/20 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-1">
            Email <span className="text-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-light px-4 py-3 text-gray-dark focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/20 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="county" className="block text-sm font-medium text-gray-dark mb-1">
            County / Location <span className="text-orange">*</span>
          </label>
          <select
            id="county"
            name="county"
            required
            value={formData.county}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-light px-4 py-3 text-gray-dark focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/20 focus:outline-none"
          >
            <option value="">Select your county</option>
            {counties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-dark mb-1">
          Project Description <span className="text-orange">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell us about your project — acreage, type of work needed, timeline, etc."
          className="w-full rounded-lg border border-gray-light px-4 py-3 text-gray-dark focus:border-blue-primary focus:ring-2 focus:ring-blue-primary/20 focus:outline-none resize-y"
        />
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto">
        Request a Free Quote
      </Button>
    </form>
  )
}
