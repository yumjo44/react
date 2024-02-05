import propTypes from "prop-types";
import badgeStyles from "./Badge.module.css";

const Badge = ({ children }) => {
  return <span> {children}</span>;
};
Badge.propType = {
  children: propTypes.node.isRequired,
};
export default Badge;
