import { memo } from "react"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Build Modern Responsive UI with Tailwind
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl">
            Create beautiful, fast, and fully responsive layouts
            using utility-first CSS in React applications.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Hero"
            className="rounded-xl shadow-lg w-full"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default memo(Hero)