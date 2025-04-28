// ServiceCard component for displaying individual service information
export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="px-6 py-8">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
          {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
} 