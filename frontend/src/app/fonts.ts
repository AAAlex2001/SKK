import localFont from "next/font/local";

export const fontPrimary = localFont({
  src: [
    {
      path: "../../node_modules/@qpokychuk/gilroy/src/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@qpokychuk/gilroy/src/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@qpokychuk/gilroy/src/Gilroy-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@qpokychuk/gilroy/src/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-primary",
});
