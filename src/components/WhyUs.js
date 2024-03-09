
export default function WhyUs() {
    return (
        <div className="p-8 mt-6">
            <h1 className="text-center text-4xl font-bold">Why Us</h1>
            <h3 className="text-center mt-6 mb-12 text-gray-500"> At Learning Exp. We are Committed To Providing You With A Superior Learning <br/>Experience That Empowers You
                To Achieve Your Goals. Join Us Today And <br/> Embark On A Journey Of Discovery, Growth, And Success.</h3>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center">
                    <div className="relative shadow-2xl shadow-fuchsia-500">
                        <img
                            alt="Career Image"
                            className="rounded-xl"
                            height="300"
                            src="/laptop.jpg"
                            style={{
                                aspectRatio: "500/300",
                                objectFit: "cover",
                            }}
                            width="500"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg">
                            <PlayIcon className="text-black w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-7/12 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-4">Crafting Your Dream Career: <br/>Building a Path You Love with us</h1>
                    <p className="mb-4">
                        At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To
                        Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
                    </p>
                    <p className="mb-6">
                        Our Platform Is Designed To Empower Learners Like You To Excel In Today’s <br/> Dynamic World.
                    </p>
                    <button class="bg-yellow-300 h-[40px] w-[140px] rounded-3xl text-black hover:bg-yellow-500 ">Get More</button>
                </div>
            </div>
        </div>
    )
}

function PlayIcon(props) {
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
            <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
    )
}
