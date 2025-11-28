function LoginScreen({screenSwitch,CompanyName}) {
  return (
    <>
      {/* <!-- Mobile Card Container --> */}
      <div className="mobile-card rounded-[3rem]">
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
              fill-opacity="1"
              d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,197.3C672,192,768,160,864,154.7C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* <!-- Main Content Area --> */}
        <div className="p-8 pb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 mt-8">
            Welcome back !
          </h2>

          {/* <!-- Form --> */}
          <form className="space-y-6">
            {/* <!-- Username Field --> */}
            <div className="relative">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 shadow-sm"
                required
              />
            </div>

            {/* <!-- Password Field --> */}
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 shadow-sm pr-12"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400"
              >
                {/* <!-- Eye Icon --> */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </button>
            </div>

            {/* <!-- Remember Me & Forgot Password --> */}
            <div className="flex justify-between items-center text-sm px-1 pt-1">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="remember" className="ml-2 text-gray-600">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-800 transition"
              >
                Forget password?
              </a>
            </div>

            {/* <!-- Login Button --> */}
            <button
              type="submit"
              className="w-full py-4 text-white font-semibold rounded-2xl shadow-lg transition duration-300 hover:shadow-xl
                                bg-gradient-to-r from-indigo-600 to-purple-600 mt-6"
            >
              Login
            </button>
          </form>

          {/* <!-- Sign Up Link & OR --> */}
          <div className="mt-8 text-sm">
            <p className="text-gray-600">
              New user?{" "}
              <a
                href="#"
                className="text-indigo-600 font-semibold hover:text-indigo-800"
                onClick={()=>screenSwitch('SignupScreen')}
              >
                Sign Up
              </a>
            </p>
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-x-0 h-px bg-gray-300"></div>
              <span className="relative bg-white px-4 text-gray-500 text-xs font-medium uppercase">
                OR
              </span>
            </div>
          </div>

          {/* <!-- Social Icons --> */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-md hover:scale-105 transition"
            >
              ...
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white shadow-md hover:scale-105 transition"
            >
              ...
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:scale-105 transition"
            >
              ...
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white shadow-md hover:scale-105 transition"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 2.25c-5.42 0-9.84 4.09-9.84 9.12s4.42 9.13 9.84 9.13c4.78 0 8.52-3.32 9.61-7.73h-4.14c-.93 2.1-3.03 3.6-5.47 3.6-3.23 0-5.87-2.73-5.87-6.02 0-3.29 2.64-6.02 5.87-6.02 2.76 0 4.37 1.18 5.2 2.05l2.91-2.82c-1.35-1.28-3.08-2.05-5.2-2.05z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { LoginScreen };
