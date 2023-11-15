import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Index;
