import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div>HEADER</div>
      <Outlet />
    </div>
  );
};

export default Index;
