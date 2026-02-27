import { memo } from "react"

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          {description}
        </p>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  )
}

export default memo(Card)