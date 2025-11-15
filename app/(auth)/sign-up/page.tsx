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
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Sign Up & Personalize
            </h1>
            <p className="mt-3 text-gray-400 text-lg">Join thousands of smart investors building their future</p>
          </div>

          <form className="space-y-5">
            {/* Name */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-yellow-500">
                Full Name
              </label>
              <input 
                type="text" 
                id="name"
                placeholder="Enter your name"
                className="w-full px-5 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 group-hover:border-yellow-600"
              />
            </div>

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

            {/* Country */}
  <div className="group">
    <label htmlFor="country" className="block text-sm font-medium mb-2 text-yellow-500">
      Country
    </label>
    <select 
      id="country"
      className="w-full px-5 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer group-hover:border-yellow-600"
      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '12px' }}
    >
      <option value="" className="bg-gray-900">Select your country</option>
      <option value="Australia">Australia</option>
      <option value="India">India</option>
      <option value="SA">South Africa</option>
      <option value="China">China</option>
      <option value="America">United States</option>
    </select>
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

            {/* Investment Goals */}
            <div className="group">
              <label htmlFor="goals" className="block text-sm font-medium mb-2 text-yellow-500">
                Investment Goal
              </label>
              <select 
                id="goals"
                className="w-full px-5 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer group-hover:border-yellow-600"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '12px' }}
              >
                <option value="" className="bg-gray-900">What drives your investments?</option>
                <option value="Growth">Growth (High returns, higher risk)</option>
                <option value="Income">Income (Steady dividends)</option>
                <option value="Preservation">Preservation of Capital</option>
                <option value="Balanced">Balanced Approach</option>
                <option value="Speculative">Speculative (High reward)</option>
              </select>
            </div>

            {/* Risk Tolerance */}
            <div className="group">
              <label htmlFor="risk" className="block text-sm font-medium mb-2 text-yellow-500">
                Risk Tolerance
              </label>
              <select 
                id="risk"
                className="w-full px-5 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer group-hover:border-yellow-600"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '12px' }}
              >
                <option value="" className="bg-gray-900">How bold are you?</option>
                <option value="Very High">Very High (Aggressive)</option>
                <option value="High">High (Volatility OK)</option>
                <option value="Medium">Medium (Balanced)</option>
                <option value="Low">Low (Stability First)</option>
                <option value="Very Low">Very Low (Conservative)</option>
              </select>
            </div>

            {/* Preferred Industry */}
            <div className="group">
              <label htmlFor="industry" className="block text-sm font-medium mb-2 text-yellow-500">
                Preferred Industry
              </label>
              <select 
                id="industry"
                className="w-full px-5 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer group-hover:border-yellow-600"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '12px' }}
              >
                <option value="" className="bg-gray-900">Choose your sector</option>
                <option value="Technology">Technology (AI, Cloud)</option>
                <option value="Healthcare">Healthcare (Biotech)</option>
                <option value="Finance">Finance (Fintech, Crypto)</option>
                <option value="Energy">Energy (Renewables)</option>
                <option value="Consumer Goods">Consumer Goods</option>
                <option value="Industrials">Industrials</option>
                <option value="Utilities">Utilities</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Materials">Materials</option>
              </select>
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
            Already have an account?{' '}
            <Link href="/login" className="text-yellow-500 font-semibold hover:underline hover:text-yellow-400 transition-colors">
              Log in
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