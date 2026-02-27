import { useState, memo } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">ResponsiveUI</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-9">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-6 pb-4 space-y-3">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  )
}

export default memo(Navbar)