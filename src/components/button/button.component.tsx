import "./button.styles.scss";
const BUTTON_TYPE = {
  google: "google-button",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProperties }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...otherProperties}
    >
      {children}
    </button>
  );
};
export default Button;
