import { style, keyframes } from "typestyle";

const containerStyle = style({
  width: "100%",
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const loadingStyle = style({
  display: "inline-block",
  width: "80px",
  height: "80px",
  $nest: {
    ":after": {
      content: '" "',
      display: "block",
      width: 64,
      height: 64,
      margin: 8,
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
      animationName: keyframes({
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
    <div className={containerStyle}>
      <div className={loadingStyle} />
    </div>
  );
}
