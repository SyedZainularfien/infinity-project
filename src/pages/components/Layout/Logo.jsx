import { Link } from "react-router-dom";

export default function Logo({ vertical }) {
  return (
    <Link
      to={"/"}
      className="h-[60px] w-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center"
    >
      <img
        src={
          vertical
            ? "/assets/images/vertical-logo.png"
            : "/assets/images//infinity-logo.png"
        }
        width={50}
        height={40}
        alt="infinity-assets"
      />
    </Link>
  );
}
