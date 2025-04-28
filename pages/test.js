import Head from 'next/head';

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Tailwind Test Page</title>
      </Head>
      
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Tailwind Test Page</h1>
            <p className="text-xl text-gray-600 mb-12">This page tests if Tailwind CSS is working properly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Test Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-full mb-4"></div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Card One</h2>
              <p className="text-gray-600">This card uses basic Tailwind classes for styling.</p>
            </div>
            
            {/* Test Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-full mb-4"></div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Card Two</h2>
              <p className="text-gray-600">This card uses basic Tailwind classes for styling.</p>
            </div>
            
            {/* Test Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-full mb-4"></div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Card Three</h2>
              <p className="text-gray-600">This card uses basic Tailwind classes for styling.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 