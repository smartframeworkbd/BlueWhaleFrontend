"use client";
import Wrapper from "@/layout/wrapper";
import "../styles/index.css";
import Footer from "@/layout/footers/footer";
import { Inter, Cuprum } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
// import "react-modal-video/css/modal-video.css";




const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cuprum = Cuprum({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cuprum",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <title>Blue Whale</title>
        <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </head>
      <body
        y
        suppressHydrationWarning={true}
        className={`${inter.variable} ${cuprum.variable}`}
      >
        <Provider store={store}>
          <Wrapper>
            {children}
            <Footer />
          </Wrapper>
        </Provider>
      </body>
    </html>
  );
}
