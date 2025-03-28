import { Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-200 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">BuildCo</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Building dreams into reality since 1998. Quality construction services for residential
              and commercial projects.
            </p>
          </div>

          <ContactInfo />

          <BusinessHours />
        </div>

        <Copyright />
      </div>
    </footer>
  )
}

function ContactInfo() {
  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">Contact Us</h4>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p>123 Construction Avenue</p>
        <p>Building City, BC 12345</p>
        <a
          href="tel:+15551234567"
          className="flex items-center gap-2 font-medium text-primary hover:underline"
        >
          <Phone size={16} />
          (555) 123-4567
        </a>
        <p>info@buildco.example</p>
      </div>
    </div>
  )
}

function BusinessHours() {
  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">Hours</h4>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p>Monday - Friday: 8am - 6pm</p>
        <p>Saturday: 9am - 4pm</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  )
}

function Copyright() {
  return (
    <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-gray-700 dark:text-gray-300">
      <p>© {new Date().getFullYear()} BuildCo Construction. All rights reserved.</p>
    </div>
  )
}
