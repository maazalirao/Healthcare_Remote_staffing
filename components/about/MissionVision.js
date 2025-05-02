// MissionVision component displaying company mission and vision
export default function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission & Vision
          </h2>
        </div>
        
        <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">One Clear Goal</h3>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-6">
            Clearview Staffing Group was created with one clear goal:
            <br className="hidden md:block"/>
            To help healthcare providers run more efficiently by delivering specialized remote staffing solutions — saving them time, money, and frustration.
          </p>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-center">
            With healthcare demands rising and in-house hiring costs soaring, remote staffing is the future. We're here to make it seamless, secure, and reliable.
          </p>
        </div>
      </div>
    </section>
  );
} 