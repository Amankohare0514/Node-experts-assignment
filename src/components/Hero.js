

export default function Hero() {
  const heroStyles = {
    backgroundImage: "url('/bimage.jpg')",
    height: "800px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="relative text-white" style={heroStyles}>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">Learning Exp.</div>
        <div className="flex items-center space-x-6">
          <a className="hover:text-gray-200" href="#">
            Home
          </a>
          <a className="hover:text-gray-200" href="#">
            Services
          </a>
          <a className="hover:text-gray-200" href="#">
            Why Us
          </a>
          <a className="hover:text-gray-200" href="#">
            Our Goals
          </a>
          <button class="bg-yellow-300 h-[40px] w-[140px] rounded-3xl text-black hover:bg-yellow-500 hidden md:inline-block">Contact Us</button>
        </div>
      </nav>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">We Create Learning Experience With Excellent Technology.</h1>
          <p className="max-w-md">
            Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs—All
            Included In Your Subscription
          </p>
          <div className="flex space-x-9 ">
            <button className="bg-yellow-300  h-[45px] w-[160px] rounded-3xl text-black hover:bg-yellow-500">Book Demo Class</button>
            <button className="text-white hover:text-yellow-500">Explore More →</button>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 shadow-cyan-600 shadow-2xl">
          <video
            autoPlay='true'
            alt="Learning Experience"
            className="rounded-xl"
            height="400"
            src="./bgvideo.mp4"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </div>
      <div class="hidden md:block">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 230">
    <path fill="#ffd700" fill-opacity="1" d="M0,96L120,117.3C240,139,480,181,720,186.7C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
  </svg>
</div>

<div class="hidden md:block">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 0 1300 200">
    <path fill="#ffd700" fill-opacity="1" d="M0,224L80,192C160,160,320,96,480,74.7C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
  </svg>
</div>

    </div>
  )
}
