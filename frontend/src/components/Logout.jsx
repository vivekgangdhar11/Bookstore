import  useAuth from "../context/AuthProvider";

function Logout() {
  const { authUser, setAuthUser } = useAuth(); // ✅ correct now

  const handleLogout = () => {
    try {
      setAuthUser(null); // log out completely
      localStorage.removeItem("Users");
      alert("Logout successful");
      window.location.reload(); // ✅ correct method, lowercase 'l'
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
export default Logout;
