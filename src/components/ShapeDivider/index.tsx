import styles from "./styles.module.css";

type Props = {
  imgTag:
    | "waves"
    | "wavesUpsideDown"
    | "curve"
    | "split"
    | "layeredLeft"
    | "layeredRight"
    | "layeredCenter";
};

const ShapeDivider = ({ imgTag }: Props) => {
  const returnaStyle = () => {
    switch (imgTag) {
      case "waves":
        return styles.waves;
      case "wavesUpsideDown":
        return styles.waves_upsidedown;
      case "curve":
        return styles.curve;
      case "split":
        return styles.instersecting;
      case "layeredLeft":
        return styles.layered_left;
      case "layeredRight":
        return styles.layered_right;
      case "layeredCenter":
        return styles.layered_center;
    }
  };
  return (
    <div
      className={`${returnaStyle()} w-full h-20 bg-repeat-x bg-cover md:bg-auto`}
    ></div>
  );
};
export default ShapeDivider;
