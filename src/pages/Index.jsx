import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <div>HEADER</div>
      <Outlet />
    </div>
  );
};

export default Index;
