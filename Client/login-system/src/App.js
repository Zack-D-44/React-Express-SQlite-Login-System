// import LoggedInUserScreen from "./Components/LoggedInUserScreen";
import LoginForm from "./Components/LoginForm";

function App() {
  // const [LoggedIn, setLoggedIn] = useState(false);
  // const [currentUserUsername, setCurrentUserUsername] = useState("");

  // const navigate = useNavigate();

  // const checkIfUserSignedIn = (userLoggedIn) => {
  //   setLoggedIn(userLoggedIn);

  //   console.log(LoggedIn);
  // };

  // const getCurrentUserUsername = (username) => {
  //   setCurrentUserUsername(username);
  // };
  return (
    <div>
      {/* {LoggedIn &&
      currentUserUsername === "admin" &&
      currentUserUsername === "admin" ? (
        navigate("/admin/logged-in", {
          state: { username: currentUserUsername },
        })
      ) : (
        <LoginForm
          isUserSignedIn={checkIfUserSignedIn}
          setCurrentUserUsername={getCurrentUserUsername}
        />
      )} */}

      {/* {LoggedIn &&
      currentUserUsername !== "admin" &&
      currentUserUsername !== "admin" ? (
        navigate("/user/logged-in", {
          state: { username: currentUserUsername },
        })
      ) : (
        <LoginForm
          isUserSignedIn={checkIfUserSignedIn}
          setCurrentUserUsername={getCurrentUserUsername}
        />
      )} */}
      <LoginForm />
    </div>
  );
}

export default App;
