import { TrendingUp } from "lucide-react"
import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6"

const quickLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Sign Up", href: "/.signup" },
  { name: "Log In", href: "/signin" },
]

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Criptnox
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Never miss a crypto price movement again. Get instant alerts when
              your favorite cryptocurrencies hit your target prices.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="isDarkTheme font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="isDarkTheme font-semibold text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/joshua-moses-4117a7209/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-100 p-2 text-blue-600 transition-colors hover:bg-gray-200 hover:text-blue-700 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600 dark:hover:text-blue-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/JPhleg"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-100 p-2 text-sky-500 transition-colors hover:bg-gray-200 hover:text-sky-600 dark:bg-gray-700 dark:text-sky-400 dark:hover:bg-gray-600 dark:hover:text-sky-300"
                aria-label="Twitter Profile"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/J0shcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built with ❤️ for crypto enthusiasts
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
