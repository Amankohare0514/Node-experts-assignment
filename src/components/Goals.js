
export default function Goals() {
    return (
      <div className="mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl mb-6">We Completed 1200+ Certification Program <br/> Successfully & Counting</h2>
            <p className="mt-4 text-base sm:text-lg">
              At Learning Exp. We Are Committed To Providing You With A Superior Learning <br/> Experience That Empowers You To
              Achieve Your Goals. Join Us Today And <br/>Embark On A Journey Of Discovery, Growth, And Success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="text-[#38BDF8] text-6xl mb-3" />
              <p className="text-3xl font-bold">100+</p>
              <p className="text-base">Batch Complete</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="text-[#38BDF8] text-6xl mb-3" />
              <p className="text-3xl font-bold">50+</p>
              <p className="text-base">Active Batches</p>
            </div>
            <div className="flex flex-col items-center">
              <GroupIcon className="text-[#34D399] text-6xl mb-3" />
              <p className="text-3xl font-bold">10,000+</p>
              <p className="text-base">Student Satisfied</p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpenIcon className="text-[#FBBF24] text-6xl mb-3" />
              <p className="text-3xl font-bold">10+</p>
              <p className="text-base">Course Modules</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function BookOpenIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  }
  
  
  function CheckCircleIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
  
  
  function GroupIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7V5c0-1.1.9-2 2-2h2" />
        <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
        <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
        <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
        <rect width="7" height="5" x="7" y="7" rx="1" />
        <rect width="7" height="5" x="10" y="12" rx="1" />
      </svg>
    )
  }
  