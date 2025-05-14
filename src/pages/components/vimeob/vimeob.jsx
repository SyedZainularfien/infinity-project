import styles from "../vimeob/vimeob.module.css";
const Vimeob = ({ label, variant }) => {
  const btnVariantClass = getVariantClass(variant);
  return (
    <button
      className={`${styles.vimeob} flex justify-center items-center gap-1 md:gap-5  ${btnVariantClass}`}
    >
      <img
        src={"/assets/svg/vimeo.svg"}
        width={40}
        height={40}
        alt="Video Icon"
      />{" "}
      {label}
    </button>
  );
};

export default Vimeob;

const getVariantClass = (variant) => {
  switch (variant) {
    case "solid":
      return styles.solid;
    case "outline":
      return styles.outline;
    case "darkOutline":
      return styles.darkOutline;
    default:
      return styles.default;
  }
};
