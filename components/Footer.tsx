import IconLink from "components/IconLink";
import { style } from "typestyle";

const footer = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  borderTopColor: "currentColor",
  borderTopStyle: "solid",
  borderTopWidth: 1,
  marginTop: "20px",
  paddingTop: "10px",
  marginBottom: "40px",
});

export default function Footer(): JSX.Element {
  return (
    <footer className={footer}>
      Ben Southgate, 2020 - &nbsp;
      <IconLink
        alt="view the source of this website on github"
        icon="github"
        href="https://github.com/bsouthga/bsouthga.dev"
      />
    </footer>
  );
}
