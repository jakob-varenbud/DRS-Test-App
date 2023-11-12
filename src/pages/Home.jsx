import TextBody from "../components/TextBody";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "100%",
        height: "100%",
      }}
    >
      <TextBody text="test" variant="small" />
      <TextBody text="test" variant="big" />
    </div>
  );
};

export default Home;
