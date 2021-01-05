import style9 from "style9";

const styles = style9.create({
  container: {
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    display: "inline-block",
    width: "80px",
    height: "80px",
    "::after": {
      content: '" "',
      display: "block",
      width: 64,
      height: 64,
      margin: 8,
      // @ts-ignore -- borderRadius is missing from typedef
      borderRadius: "50%",
      borderStyle: "solid",
      borderWidth: 6,
      borderTopColor: "currentColor",
      borderRightColor: "transparent",
      borderBottomColor: "currentColor",
      borderLeftColor: "transparent",
      animationDuration: "1.2s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationName: style9.keyframes({
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      }),
    },
  },
});

export default function Loading() {
  return (
    <div className={styles("container")}>
      <div className={styles("loading")} />
    </div>
  );
}
