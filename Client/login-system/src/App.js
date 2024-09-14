import LoggedInUserScreen from "./Components/LoggedInUserScreen";
import LoginForm from "./Components/LoginForm";
const { useState } = require("react");

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const checkIfUserSignedIn = (userLoggedIn) => {
    setLoggedIn(userLoggedIn);

    console.log(LoggedIn);
  };
  return (
    <div>
      {LoggedIn ? (
        <LoggedInUserScreen />
      ) : (
        <LoginForm isUserSignedIn={checkIfUserSignedIn} />
      )}
    </div>
  );
}

export default App;
