import LoggedInUserScreen from "./Components/LoggedInUserScreen";
import LoginForm from "./Components/LoginForm";
const { useState } = require("react");
const { useNavigate } = require("react-router-dom");

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkIfUserSignedIn = (userLoggedIn) => {
    setLoggedIn(userLoggedIn);

    console.log(LoggedIn);
  };
  return (
    <div>
      {LoggedIn ? (
        navigate("/loggedIn")
      ) : (
        <LoginForm isUserSignedIn={checkIfUserSignedIn} />
      )}
    </div>
  );
}

export default App;
