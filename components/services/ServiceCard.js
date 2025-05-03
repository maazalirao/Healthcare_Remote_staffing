// ServiceCard component for displaying individual service information
export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg border border-gray-100">
      <div className="px-5 py-6 sm:px-6 sm:py-8">
        <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-100 text-blue-600 mx-auto transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          {Icon && <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />}
        </div>
        <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-gray-900 text-center">{title}</h3>
        <div className="w-12 sm:w-16 h-1 bg-blue-500 mx-auto my-2 sm:my-3 rounded-full"></div>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
} 