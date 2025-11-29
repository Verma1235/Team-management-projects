import { useState, useEffect } from "react";
import "./App.css";
import { HomeScreen } from "./componets/HomeScreen";
import { LoginScreen } from "./componets/LoginScreen";
import { SignupScreen } from "./componets/SignupScreen";
import Dashboard from "./componets/dashboard/dashboard";

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
    if (current == "0") {
    } else {
      setState({ [current]: 1 });
    }
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
            if (data.status == 500) {
              showToast("This account already registered !!", "d");
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
  // ___________________________ default login by token ________________________________
  let Local_token = JSON.parse(localStorage.getItem("Token"));
  const [token, setToken] = useState(Local_token);
  // login state +effect +api  manage
  const [logindata, setlogindata] = useState({ email: "", password: "" });

  useEffect(() => {
    const { email, password } = logindata;
    if (!email || !password) {
    } else {
      try {
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logindata),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("Response:", data);
            if (data.status == 401) {
              showToast(`${data.message}`, "d");
            }
            if (data.status == 200) {
              showToast("Login successfully !!", "s");
              setToken(data.token);
              localStorage.setItem("Token", JSON.stringify(data.token));
              screenSwitch("0");
            }
          })
          .catch((err) => {
            showToast(`Error on client response ${err} `, "d");
          });
      } catch (err) {}
    }
  }, [logindata]);

  function createLogin(data) {
    const { email, password } = data;
    setlogindata({ email, password });
  }

  // ______________________________________ API END ___________________________________


  // ____________________ USER INFO ____________________________________________
  const [userdata,setuserdata]=useState({name:"guest",email:"guest@gmail.com",users:0,usersdataset:[]});

  useEffect(() => {
  try {
    fetch("http://localhost:3000/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        
        try{
          fetch("http://localhost:3000/admin",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({email:data.email}),
          }).then((res)=>res.json())
          .then((data2)=>{
            console.log(data2);
          localStorage("ROLE",JSON.stringify({email:data.email,role:data2?.role}));
            
          })
        }catch(err){
          console.log(err);
          localStorage("ROLE",JSON.stringify({email:data.email,role:"USER"}));

        }

        setuserdata({name:data.name,email:data.email,users:data.totalUsers,usersdataset:data.usersdata});
        
      })
      .catch((err) => {
        showToast(err, "w");
      });
  } catch (err) {
    showToast(`error : ${err}`, "w");
  }
}, [token]);

// useEffect(() => {
//   console.log("token: ",JSON.stringify(token))
//   try {
//     fetch("http://localhost:3000/data", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setuserdata({name:data.name,email:data.email,users:data.totalUsers,usersdataset:data.usersdata});
//       })
//       .catch((err) => {
//         showToast(err, "w");
//       });
//   } catch (err) {
//     showToast(`error : ${err}`, "w");
//   }
// }, []);


  // logout
  const [logout, setlogout] = useState(0);
  useEffect(() => {
 
    if (logout) {
        //  alert("logout trigger");
      try {
        localStorage.removeItem("Token");
        setToken("");
        screenSwitch("HomeScreen");
        showToast("logout successsfully", "s");
      } catch (err) {
        showToast("Logout error", "d");
      }
    }
  }, [logout]);

  function Logout() {
    setlogout(1);
  }
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
          createLogin={createLogin}
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
      {!state.HomeScreen && !state.LoginScreen && !state.SignupScreen && (
        <Dashboard Logout={Logout} userdata={userdata} />
      )}
    </>
  );
}

export default App;
