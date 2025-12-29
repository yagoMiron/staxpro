import styles from "./styles.module.css";

type Props = {
  imgTag: "waves" | "wavesUpsideDown";
};

const ShapeDivider = ({ imgTag }: Props) => {
  const returnaStyle = () => {
    switch (imgTag) {
      case "waves":
        return styles.waves;
      case "wavesUpsideDown":
        return styles.waves_upsidedown;
    }
  };
  return <div className={`${returnaStyle()} w-full h-20 bg-repeat-x`}></div>;
};
export default ShapeDivider;
