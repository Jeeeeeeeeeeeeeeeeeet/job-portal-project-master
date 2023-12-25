import { useSelector } from "react-redux";
import AdminScreen from "../../AdminScreen";
import Login from "./Login";
import ProviderScreen from "../../ProviderScreen";
import JobSeekerScreen from "../../JobSeekerScreen";
import jwtDecode from "jwt-decode";
import { Nav } from "../../components/Nav";

function Mdashboard() {
  const selectauthToken = (rootstate) => rootstate.authToken;

  const authToken = localStorage.getItem("token");
  const redToken = useSelector(selectauthToken);

  if (authToken) {
    const redAuthToken = jwtDecode(authToken);
    // console.log("lol", decoded);
    if (redAuthToken.role === "Admin") {
      return <AdminScreen />;
    }
    if (redAuthToken.role === "Job Provider") {
      return <ProviderScreen />;
    }
    if (redAuthToken.role === "User") {
      return <JobSeekerScreen />;
    }
  }
  return (
    <>
      <Login />
    </>
  );
}

export default Mdashboard;
