import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Aos from "aos";

const App = () => {
  // Aos Animation
  Aos.init();

  return (
    <main className="font-poppins">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default App;