import React from "react";
function HomeScreen({screenSwitch,CompanyName}) {
  return (
    <>
      {/* <!-- Mobile Card Container --> */}
      <div className="mobile-card rounded-[3rem] mx-auto">
        {/* <!-- Header with Wave --> */}
        <div className="header-wave flex flex-col items-center pt-8">
          {/* <!-- Logo (simple V-shape) --> */}
          <svg
            className="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 1L2 12h5l5-5 5 5h5zM12 23l-5-5h5l-5-5h5l5 5h-5z"
              fill="white"
            />
          </svg>
          <h1 className="text-white text-xl font-bold mt-2 tracking-wider">
            {CompanyName}
          </h1>

          {/* <!-- SVG Wave Separator --> */}
          <svg
            className="wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,197.3C672,192,768,160,864,154.7C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* <!-- Main Content Area --> */}
        <div className="p-8 pb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 mt-8">
            Welcome !
          </h2>

          {/* <!-- Buttons --> */}
          <div className="space-y-4">
            <button  onClick={()=>{screenSwitch("SignupScreen")}}
              className="w-full py-4 text-white font-semibold rounded-2xl shadow-lg transition duration-300 hover:shadow-xl
                                bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              Create Account
            </button>

            <button onClick={()=>screenSwitch('LoginScreen')} className="w-full py-4 text-indigo-600 font-semibold rounded-2xl border-2 border-indigo-600 transition duration-300 hover:bg-indigo-50">
              Login
            </button>
          </div>

          {/* <!-- Social Icons --> */}
          <div className="mt-16 mb-4 flex justify-center space-x-4">
            {/* <!-- Twitter --> */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-md hover:scale-105 transition"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.256L21.6 18.25h-4.309l-5.607-6.425L7.1 18.25H3.792l7.328-8.411L2.4 2.25h4.663l4.576 5.25z" />
              </svg>
            </a>
            {/* <!-- LinkedIn --> */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white shadow-md hover:scale-105 transition"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 11h4v10H4zM6 4a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </a>
            {/* <!-- Facebook --> */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:scale-105 transition"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* <!-- Google --> */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white shadow-md hover:scale-105 transition"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 2.25c-5.42 0-9.84 4.09-9.84 9.12s4.42 9.13 9.84 9.13c4.78 0 8.52-3.32 9.61-7.73h-4.14c-.93 2.1-3.03 3.6-5.47 3.6-3.23 0-5.87-2.73-5.87-6.02 0-3.29 2.64-6.02 5.87-6.02 2.76 0 4.37 1.18 5.2 2.05l2.91-2.82c-1.35-1.28-3.08-2.05-5.2-2.05z" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Sign in with another account
          </p>
        </div>
      </div>
    </>
  );
}

export { HomeScreen };
