import LoggedInUserScreen from "./Components/LoggedInUserScreen";
import LoginForm from "./Components/LoginForm";
const { useState } = require("react");
const { useNavigate } = require("react-router-dom");

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [currentUserUsername, setCurrentUserUsername] = useState("");

  const navigate = useNavigate();

  const checkIfUserSignedIn = (userLoggedIn) => {
    setLoggedIn(userLoggedIn);

    console.log(LoggedIn);
  };

  const getCurrentUserUsername = (username) => {
    setCurrentUserUsername(username);
  };
  return (
    <div>
      {LoggedIn ? (
        navigate("/loggedIn", { state: { username: currentUserUsername } })
      ) : (
        <LoginForm
          isUserSignedIn={checkIfUserSignedIn}
          setCurrentUserUsername={getCurrentUserUsername}
        />
      )}
    </div>
  );
}

export default App;
