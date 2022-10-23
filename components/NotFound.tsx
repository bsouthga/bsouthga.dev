import { style } from "typestyle";

const rootStyle = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
});

export default function NotFound() {
  return <div className={rootStyle}>{"whoops, this doesn't exist..."}</div>;
}
