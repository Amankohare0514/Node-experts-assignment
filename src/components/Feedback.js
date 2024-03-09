
export default function Feedback() {
    return (
        <>
        <div className="text-center mt-24 shadow-black ">
        <h2 className="text-3xl sm:text-5xl ">Our Student Feedback</h2>
        <p className="mt-4 text-base sm:text-lg">
          At Learning Exp. We Are Committed To Providing You With A Superior Learning <br/> Experience That Empowers You To
          Achieve Your Goals. Join Us Today And <br/>Embark On A Journey Of Discovery, Growth, And Success.
        </p>
      </div>
      <div className="max-w-5xl p-11 mx-auto mt-16 bg-slate-200 shadow-black">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <img
            alt="Profile"
            className="w-[300px] h-[300px]"
            height="200"
            src="/man.jpeg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-1 mt-20">
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
            </div>
            <p className="text-lg font-semibold text-gray-700">
              "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem
              Aperiam, Eaque Ipsa Quae Ab Illo"
            </p>
            <p className="font-bold text-gray-800">Riad Islam</p>
            <p className="text-sm text-gray-500">
              Product Manager,{" "}
              <a className="text-blue-600" href="#">
                @LearningCom
              </a>
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  function StarIcon(props) {
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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }
  