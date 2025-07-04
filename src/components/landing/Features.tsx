import { Zap, Smartphone, Shield } from "lucide-react"

const Features = () => {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-dark-1 mb-12 text-center text-3xl font-bold dark:text-white">
          Why Choose CryptoAlerts?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900">
              <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Real-time price monitoring with notifications delivered in under
              100ms
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900">
              <Smartphone className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Mobile First
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Works perfectly on any device - install like a native app
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900">
              <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Secure & Private
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your data is encrypted and never shared with third parties
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
