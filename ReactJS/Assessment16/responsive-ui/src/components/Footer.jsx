import { memo } from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Grid Layout */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-4 
          gap-8
        ">

          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              ResponsiveUI
            </h3>
            <p className="text-sm">
              Building modern responsive layouts using Tailwind CSS and React.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">About</li>
              <li className="hover:text-blue-400 cursor-pointer">Careers</li>
              <li className="hover:text-blue-400 cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">Help Center</li>
              <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-blue-400 cursor-pointer">Terms</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <p className="text-sm">email@example.com</p>
            <p className="text-sm mt-2">+91 98765 43210</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} ResponsiveUI. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default memo(Footer)