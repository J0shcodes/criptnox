import Link from "next/link"
import { Bell, ArrowRight } from "lucide-react"

import Header from "../Header"

const Hero = () => {
  return (
    <section className="bg-[#ebf2ff] dark:bg-transparent">
      <Header />
      <div className="px-4 py-12 text-center">
        <div className="mx-auto">
          <h1 className="text-dark-1 mb-6 text-4xl font-bold md:text-6xl dark:text-white">
            Never Miss a <span className="text-[#3B82F6]">Crypto Move</span>{" "}
            Again
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Get instant alerts when your favorite cryptocurrencies hit your
            target prices. Real-time monitoring, zero delays, maximum profits.
          </p>
        </div>
        <div className="mx-auto mb-8 max-w-md rounded-2xl bg-white p-6 shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                  ₿
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  Bitcoin
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  BTC
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                $109,783
              </div>
              <div className="text-sm font-medium text-green-600 dark:text-green-400">
                +2.4%
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-700 dark:bg-green-900">
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-sm text-green-800 dark:text-green-300">
                Alert: BTC above $109,000 triggered!
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/auth/signup"
            className="flex min-w-[200px] items-center justify-center space-x-2 rounded-xl bg-[#3B82F6] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <span>Get Started Free</span> <ArrowRight className="h-5 w-5" />
          </Link>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            No credit card required • 2-minute setup
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
