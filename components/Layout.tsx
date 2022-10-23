import { ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { style } from "typestyle";

const containerStyle = style({
  minHeight: "100vh",
  padding: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
});

const contentStyle = style({
  width: "100%",
  height: "100%",
  maxWidth: "600px",
});

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  const { children } = props;
  return (
    <div className={containerStyle}>
      <div className={contentStyle}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
