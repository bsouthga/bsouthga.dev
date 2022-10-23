import { Fragment } from "react";
import Document, { DocumentContext } from "next/document";
import { getStyles } from "typestyle";
import { TYPESTYLE_TARGET } from "../lib/constants";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <Fragment key="1">
          {initialProps.styles}
          <style
            id={TYPESTYLE_TARGET}
            dangerouslySetInnerHTML={{
              __html: getStyles(),
            }}
          ></style>
        </Fragment>,
      ],
    };
  }
}
