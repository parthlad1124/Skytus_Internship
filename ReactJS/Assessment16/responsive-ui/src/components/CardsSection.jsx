import { memo } from "react"
import { motion } from "framer-motion"
import Card from "./Card"

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

const CardsSection = () => {

  const cardData = [
    {
      id: 1,
      title: "Fast Performance",
      description: "Optimized components with React.memo to avoid unnecessary re-renders.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
    },
    {
      id: 2,
      title: "Responsive Design",
      description: "Fully responsive layouts using Tailwind breakpoints.",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    },
    {
      id: 3,
      title: "Reusable Components",
      description: "Clean and reusable UI sections built with modern practices.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 4,
      title: "Utility First",
      description: "Build custom designs without writing traditional CSS.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29"
    }
  ]

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Features
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {cardData.map((card) => (
            <motion.div key={card.id} variants={cardVariants}>
              <Card {...card} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default memo(CardsSection)