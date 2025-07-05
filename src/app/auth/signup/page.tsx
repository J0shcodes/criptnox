"use client"

import { useState } from "react"
import Link from "next/link"
import { TrendingUp } from "lucide-react"

const Signup = () => {
  const [isSigningUp, setIsSigningUp] = useState(false)

  const handleSignUp = () => {}
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 dark:bg-transparent">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Criptnox</span>
          </div>
          <h2 className="mb-2 text-2xl font-bold">Create Account</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Start monitoring crypto prices for free
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
            />
          </div>

          <button
            onClick={() => handleSignUp()}
            disabled={isSigningUp}
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {isSigningUp ? "Creating Account..." : "Create Account"}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          By creating an account, you agree to our Terms of Service and Privacy
          Policy
        </div>
      </div>
    </div>
  )
}

export default Signup
