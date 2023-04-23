import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Home section 1 */}
      <section className="text-gray-600 body-font">
        {/*<h1 class="sm:text-3xl text-2xl font-bold title-font text-center text-gray-900 mb-20">*/}
        <h1
          className="text-center text-gray-900 mb-10"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: "Helvetica Neue, sans-serif",
          }}
        >
          Recent Articles
        </h1>
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Jul
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    18
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    ARTICLE
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    RFID Sensors
                  </h1>
                  <p className="leading-relaxed mb-5">
                    RFID sensors are electronic devices that use radio waves to
                    wirelessly identify the objects that you want to move.
                  </p>
                  {/* <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/> */}
                  <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        John Webster
                      </span>
                    </span>
                </div>
              </div>
            </div>
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Sept
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    23
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    ARTICLE
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    ROI Calculation
                  </h1>
                  <p className="leading-relaxed mb-5">
                    A business ROI calculation details the general indicators of
                    success associated with future ventures.
                  </p>
                  <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Dom Fernando
                      </span>
                    </span>
                </div>
              </div>
            </div>
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    Dec
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    22
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    ARTICLE
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Beer Warehouse Employment
                  </h1>
                  <p className="leading-relaxed mb-5">
                    Beer warehouse employment becomes less necessary as new
                    automated sensors and forklifts allow for more efficient
                    processes.
                  </p>
                  <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        Nick Hulston
                      </span>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Section 2*/}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1
            className="text-center text-gray-900 mb-10"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "Helvetica Neue, sans-serif",
            }}
          >
            Explore the Portal
            <br className="hidden sm:block" />
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100S text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  ROI Calculator
                </h2>
                <p className="leading-relaxed text-base">
                  Calculate the ROI that Bar IQ technologies can bring to your
                  warehouse. Input the main indicators of ROI and the calculator
                  will output your possible ROI with the implementation of RFID
                  sensors and Bar IQ technologies.
                </p>
                <Link
                  class="mt-3 text-indigo-500 inline-flex items-center"
                  href="/roi"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  RFID Search Engine
                </h2>
                <p className="leading-relaxed text-base">
                  Search for any possible articles, files, or examples regarding
                  the technologies that Bar IQ offers. The Search Engine gives
                  access to all different forms of helpful resources.
                </p>
                <Link
                  class="mt-3 text-indigo-500 inline-flex items-center"
                  href="/help"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Video Modules
                </h2>
                <p className="leading-relaxed text-base">
                  Watch any example videos about Bar IQ technologies.
                  Informational statements and helpful examples or different
                  usage strategies for beer warehousing.
                </p>
                <Link class="mt-3 text-indigo-500 inline-flex items-center" href="/modules">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
