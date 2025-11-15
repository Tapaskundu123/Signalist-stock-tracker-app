'use client'
import Link from 'next/link';
import Image from 'next/image';
import dashboard_preview from '../../../public/assets/images/dashboard.png';

const page = () => {
  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row overflow-hidden">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        {/* Subtle animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-transparent animate-pulse" />
        
        <div className="relative z-10 max-w-lg mx-auto w-full">
          

          <form className="space-y-5">
        

            {/* Email */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-yellow-500">
                Email Address
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="you@example.com"
                className="w-full px-5 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 group-hover:border-yellow-600"
              />
            </div>



            {/* Password */}
            <div className="group">
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-yellow-500">
                Password
              </label>
              <input 
                type="password" 
                id="password"
                placeholder="Create a strong password"
                className="w-full px-5 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 group-hover:border-yellow-600"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg py-5 rounded-xl hover:from-yellow-400 hover:to-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 transform transition-all duration-300 hover:scale-[1.02] active:scale-100 shadow-xl"
            >
              <span className="relative z-10">Start Your Investment Journey</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full animate-shine" />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Don't have an account?{' '}
            <Link href="/login" className="text-yellow-500 font-semibold hover:underline hover:text-yellow-400 transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Testimonial + Image Section - Desktop Only */}
      <div className="hidden md:flex md:w-1/2 h-screen flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Testimonial Card */}
        <div className="relative z-10 p-8 md:p-12 flex flex-col h-full justify-between">
          <div className="max-w-md">
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                “Signalist turned my watchlist into a{' '}
                <span className="text-yellow-500 font-bold">winning list</span>. The alerts are spot-on, and I feel more confident making moves in the market.”
              </blockquote>
              
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-yellow-500">Ethan R.</p>
                  <p className="text-sm text-gray-400">Retail Investor</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative h-96 md:h-[500px] mt-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700">
              <Image
                src={dashboard_preview}
                alt="Signalist Dashboard Preview"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;