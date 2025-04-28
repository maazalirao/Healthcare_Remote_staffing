// MissionVision component displaying company mission and vision
export default function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission & Vision
          </h2>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To connect healthcare organizations with qualified remote professionals, 
                ensuring high-quality patient care while reducing administrative burden.
                We strive to be the bridge that helps healthcare organizations meet their 
                staffing needs efficiently and effectively in an increasingly remote work environment.
              </p>
            </div>
          </div>
          
          {/* Vision */}
          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To revolutionize healthcare staffing by making remote work the new standard 
                for appropriate roles. We envision a future where healthcare organizations can 
                seamlessly access top talent regardless of geographic limitations, resulting in 
                better patient outcomes and more efficient healthcare delivery systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 