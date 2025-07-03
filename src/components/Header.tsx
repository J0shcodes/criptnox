"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { TrendingUp, Sun, Moon } from "lucide-react"

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex justify-between px-4 py-6">
      <section className="flex h-fit items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]">
          <TrendingUp className="text-white" />
        </div>
        <span className="text-xl font-bold">Criptnox</span>
      </section>
      <section className="flex h-fit items-center space-x-6">
        <button
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="block dark:hidden" />
          <Moon className="hidden dark:block" />
        </button>

        <nav>
          <Link href="/signin" className="font-medium text-[#3B82F6]">
            Sign In
          </Link>
        </nav>
      </section>
    </header>
  )
}

export default Header
