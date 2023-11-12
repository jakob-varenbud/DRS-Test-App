const TextBody = (props) => {
  const styleA = {
    fontSize: "1.5rem",
  };

  const styleB = {
    fontSize: "1.2rem",
  };

  return (
    <div style={props.variant === "small" ? styleB : styleA}>{props.text}</div>
  );
};

export default TextBody;
