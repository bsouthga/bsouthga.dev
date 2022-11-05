import "./globals.css";

import { TYPESTYLE_TARGET } from "lib/constants";
import { getStyles } from "typestyle";
import Providers from "app/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          id={TYPESTYLE_TARGET}
          dangerouslySetInnerHTML={{
            __html: getStyles(),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
