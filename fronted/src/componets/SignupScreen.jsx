import { useState } from "react";

function SignupScreen({ screenSwitch, CompanyName, showToast ,createNewSignup}) {
  // ################## useSate for form handelling #######################

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  // ################### end useState #####################################

  // ************************** function *********************************

  function formHandller(e) {
    setformdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  // form submit default functionality remove
  function FormSubmit() {
    const { name, email, password, confirmpassword } = formdata;

    if (!name || !email || !password || !confirmpassword) {
      return showToast("All fields are required!", "w");
    }

    if (password.length < 6) {
      return showToast("Password must be at least 6 characters!", "w");
    }

    if (password !== confirmpassword) {
      return showToast("Confirm password does not match!", "d");
    }

    // success
    createNewSignup(formdata)
  
  }

  // ************************** end of functions *************************

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
              fill-opacity="1"
              d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,197.3C672,192,768,160,864,154.7C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* <!-- Main Content Area --> */}
        <div className="p-8 pb-10 text-center">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-4">
            Let's create an account!
          </h2> */}

          <p className="text-gray-500 mb-8 text-sm">
            Sign up with your details or social media.
          </p>

          {/* <!-- Social Sign Up Buttons --> */}
          {/* <div className="flex space-x-3 mb-6">
            <!-- Facebook Button -->
            <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg transition duration-300 hover:bg-blue-700">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </button>
            <!-- Google Button -->
            <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-2xl text-gray-700 font-semibold border-2 border-gray-200 transition duration-300 hover:bg-gray-50">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-red-500"
              >
                <path d="M12 2.25c-5.42 0-9.84 4.09-9.84 9.12s4.42 9.13 9.84 9.13c4.78 0 8.52-3.32 9.61-7.73h-4.14c-.93 2.1-3.03 3.6-5.47 3.6-3.23 0-5.87-2.73-5.87-6.02 0-3.29 2.64-6.02 5.87-6.02 2.76 0 4.37 1.18 5.2 2.05l2.91-2.82c-1.35-1.28-3.08-2.05-5.2-2.05z" />
              </svg>
            </button>
          </div> */}

          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-x-0 h-px bg-gray-300"></div>
            <span className="relative bg-white px-4 text-gray-500 text-xs font-medium uppercase">
              OR
            </span>
          </div>

          {/* <!-- Form --> */}
          <form
            className="space-y-4"
            id="signupform"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* <!-- Name Field --> */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formdata.name}
                onChange={formHandller}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 shadow-sm"
                required
              />
            </div>

            {/* <!-- Email Field --> */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formdata.email}
                onChange={formHandller}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 shadow-sm"
                required
              />
            </div>

            {/* <!-- Password Field --> */}
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formdata.password}
                onChange={formHandller}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 shadow-sm pr-12"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400"
              >
                {/* <!-- Eye Icon --> */}
                {/* <svg
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
                </svg> */}
              </button>
            </div>

            {/* <!-- Confirm Password Field --> */}
            <div className="relative">
              <input
                type="password"
                id="confirm-password"
                name="confirmpassword"
                value={formdata.confirmpassword}
                onChange={formHandller}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 shadow-sm pr-12"
                required
              />
            </div>

            {/* <!-- Let's Go Button --> */}
            <button
              type="submit"
              className="w-full py-4 text-white font-semibold rounded-2xl shadow-lg transition duration-300 hover:shadow-xl
                                bg-gradient-to-r from-indigo-600 to-purple-600 mt-6"
              onClick={() => FormSubmit()}
            >
              Let's go
            </button>
          </form>

          {/* form handller function */}

          {/* <!-- Login Link & Terms --> */}
          <div className="mt-8 text-sm">
            <p className="text-gray-600 mb-4 text-xs">
              By clicking 'Let's go', you agree to our{" "}
              <a
                href="#"
                className="text-indigo-600 font-medium hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-indigo-600 font-medium hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                className="text-indigo-600 font-semibold hover:text-indigo-800"
                onClick={() => {
                  screenSwitch("LoginScreen");
                }}
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export { SignupScreen };
