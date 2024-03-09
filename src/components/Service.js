
export default function Service() {
    return (
      <div className="py-12 mt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              We provide various kind of <br/> learning modules for you
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum.
            </p>
          </div>
          <div className="mt-10 cursor-pointer flex flex-wrap justify-center gap-8">
            <div className="w-full max-w-sm overflow-hidden rounded-lg hover:bg-slate-100 bg-white p-6 shadow-lg sm:w-1/2 md:w-1/3">
              <img
                alt="Learn Anything"
                className="mx-auto h-40 w-40"
                height="160"
                src="/mobile.jpg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <h3 className="mt-5 text-lg font-medium leading-6 text-gray-900">Learn Anything</h3>
              <p className="mt-2 text-base text-gray-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
            <div className="w-full max-w-sm overflow-hidden rounded-lg  hover:bg-slate-100 bg-white p-6 shadow-lg sm:w-1/2 md:w-1/3">
              <img
                alt="Flexible Learning"
                className="mx-auto h-40 w-40"
                height="160"
                src="/mobile.jpg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <h3 className="mt-5 text-lg font-medium leading-6 text-gray-900">Flexible Learning</h3>
              <p className="mt-2 text-base text-gray-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
            <div className="w-full max-w-sm overflow-hidden rounded-lg  hover:bg-slate-100 bg-white p-6 shadow-lg sm:w-1/2 md:w-1/3">
              <img
                alt="Expert Connect"
                className="mx-auto h-40 w-40"
                height="160"
                src="/mobile.jpg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <h3 className="mt-5 text-lg font-medium leading-6 text-gray-900">Expert Connect</h3>
              <p className="mt-2 text-base text-gray-500">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  