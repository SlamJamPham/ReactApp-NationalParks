import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const NextArrow = ({ onClick, type }) => {
  const nextType = type === "normal" ? "arrow next" : "arrow nextModal";
  return (
    <div className={nextType} onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

export const PrevArrow = ({ onClick, type }) => {
  const prevType = type === "normal" ? "arrow prev" : "arrow prevModal";
  return (
    <div className={prevType} onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};
