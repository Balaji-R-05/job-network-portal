import React from 'react'

const Jobtitles = ({name, img, location, level, description, apply, learn}) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden p-4 hover:shadow-xl transition">
      <img 
        src={img} 
        alt={name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="mt-4 space-y-2">
        <p className="text-gray-600 font-medium">{location}</p>
        <p className="text-sm text-gray-500">{level}</p>
        <p className="text-gray-700 text-sm break-words">
          {description}
        </p>
      </div>

      <div className="mt-4 flex gap-3">
        <a href={apply}><button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button></a>
        
        <a href={learn}><button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          Learn More
        </button></a>
        
      </div>
    </div>
  )
}

export default Jobtitles

