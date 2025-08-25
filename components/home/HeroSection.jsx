import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-blue-50 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-cyan-50 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-green-50 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight capitalize">
                Start learning from the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  world's best
                </span>{" "}
                <span className="text-gray-900">institutions.</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Flexible easy to access learning opportunities can bring a significant change in how individuals prefer
                to learn! The eDash can offer you to enjoy the beauty of eLearning!
              </p>
            </div>

            {/* Modern Search Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="What do you want to learn today?"
                    className="w-full h-14 pl-6 pr-4 text-base border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 bg-white shadow-sm"
                  />
                </div>
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 h-14 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Enhanced Support Section */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-white shadow-md flex items-center justify-center">
                  <img className="w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-3 border-white shadow-md flex items-center justify-center">
                 <img className="w-12 h-12 rounded-full" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-3 border-white shadow-md flex items-center justify-center">
                 <img className="w-12 h-12 rounded-full" src="https://img.freepik.com/premium-photo/portrait-cheerful-caucasian-man_53876-33033.jpg" alt="" />
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">
                  Need help?{" "}
                  <Link href="/support" className="text-cyan-600 hover:text-cyan-700 underline decoration-2 underline-offset-2">
                    Contact our eDash support
                  </Link>
                </p>
                <p className="text-gray-500">Tell us about your query</p>
              </div>
            </div>

            {/* Enhanced Discover Link */}
            <div className="pt-6">
              <Link
                href="/courses"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold text-lg group transition-colors duration-200"
              >
                <span className="mr-3 text-2xl">🚀</span>
                Discover all courses
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Modern Image Layout */}
          <div className="relative lg:block hidden">
            <div className="relative h-[650px] w-full">
              {/* Main large image - positioned left */}
              <div className="absolute left-0 top-0 w-full h-full rounded-xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="/hero/cscategory.png" alt="" />
              </div>

              {/* Top right image */}
              {/* <div className="absolute right-0 top-8 w-[240px] h-[200px] rounded-3xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="/hero/msstack.png" alt="" />
              </div> */}

              {/* Bottom right image */}
              {/* <div className="absolute right-4 bottom-16 w-[220px] h-[280px] rounded-3xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
<img src="/hero/dev.jpg" alt="" />
              </div> */}

  
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}