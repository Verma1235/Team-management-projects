import { useState, useEffect } from "react";
import "./App.css";
import { HomeScreen } from "./componets/HomeScreen";
import { LoginScreen } from "./componets/LoginScreen";
import { SignupScreen } from "./componets/SignupScreen";

function App() {
  // _______________________ use state manage ______________________________
  const saved = JSON.parse(localStorage.getItem("currentState"));

  const [state, setState] = useState(
    saved || { HomeScreen: 1, LoginScreen: 0, SignupScreen: 0 }
  );
  // company name
  const [CompanyName, setCompanyName] = useState("TECH_XPRESS");

  // use local storage to manage state
  const [screen, setScreen] = useState(
    localStorage.getItem("currentScreen") || state
  );

  // ___________________________________ Function _______________________________

  async function screenSwitch(current) {
    await Object.entries(state).forEach(([key, val]) => {
      if (val == 1) {
        setState({ [key]: 0 });
      }
    });
    setState({ [current]: 1 });
  }

  // Toast handller function

  function showToast(message, type, duration = 4000) {
    const container = document.getElementById("toast-container");
    if (!container) return console.error("Toast container not found.");

    // Determine Tailwind classes based on type
    let baseClasses =
      "toast rounded-xl p-4 font-medium text-white shadow-lg pointer-events-auto mx-4";
    let colorClasses = "";

    switch (type) {
      case "s":
        colorClasses = "bg-green-500";
        break;
      case "w":
        colorClasses = "bg-yellow-500 text-gray-800";
        break;
      case "d":
        colorClasses = "bg-red-600";
        break;
      default:
        colorClasses = "bg-gray-700";
    }

    // Create the toast element
    const toast = document.createElement("div");
    toast.className = `${baseClasses} ${colorClasses}`;
    toast.textContent = message;

    // Append to container
    container.appendChild(toast);

    // Show animation
    // Use requestAnimationFrame for smooth transition start
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    // Set timeout to hide and remove the toast
    setTimeout(() => {
      // Start hide animation
      toast.classList.remove("show");

      // Remove element after transition completes (0.3s defined in style)
      setTimeout(() => {
        if (container.contains(toast)) {
          container.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  // ______________________________________ use Effect ____________________________
  useEffect(() => {
    localStorage.setItem("currentState", JSON.stringify(state));
  }, [state]);

  // _________________________________ API _________________________________________
  const [signup, setsignup] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    const { name, email, password } = signup;
    if (!name || !email || !password) {
    } else {
      try {
        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signup),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Response:", data);

            if (data.status == 200) {
              showToast("Account created successfully! Proceed further.", "s");

              // move to login screen
              screenSwitch("LoginScreen");
            }
            if(data.status == 500){
              showToast("This account already registered !!",'d');
              
            }
          })
          .catch((err) => console.error("Error:", err));
      } catch (err) {
        showToast("Account creation error.", "d");
      }
    }
  }, [signup]);

  function createNewSignup(data) {
    const { name, email, password } = data;
    setsignup({ name, email, password });
  }

  // ______________________________________ API END ___________________________________

  return (
    <>
      {state.HomeScreen === 1 && (
        <HomeScreen
          screenSwitch={screenSwitch}
          CompanyName={CompanyName}
          showToast={showToast}
        />
      )}
      {state.LoginScreen === 1 && (
        <LoginScreen
          screenSwitch={screenSwitch}
          CompanyName={CompanyName}
          showToast={showToast}
        />
      )}
      {state.SignupScreen === 1 && (
        <SignupScreen
          screenSwitch={screenSwitch}
          CompanyName={CompanyName}
          showToast={showToast}
          createNewSignup={createNewSignup}
        />
      )}
    </>
  );
}

export default App;
