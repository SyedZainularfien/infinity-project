import React from "react";
import styles from "../button/button.module.css";

const Button = ({ label, variant, className }) => {
  const btnVariantClass = getVariantClass(variant);
  return (
    <button className={`${styles.button} ${btnVariantClass} ${className}`}>
      {label}
    </button>
  );
};

export default Button;

const getVariantClass = (variant) => {
  switch (variant) {
    case "solid":
      return styles.solid;
    case "outline":
      return styles.outline;
    case "lightSolid":
      return styles.lightSolid;
    default:
      return styles.default;
  }
};
