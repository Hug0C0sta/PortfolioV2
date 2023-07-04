import "./globals.scss";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["600", "500", "400", "300"],
});

export const metadata = {
  title: "Hugo Costa Portfolio",
  description:
    "Welcome to my front-end portfolio! I'm Hugo Costa, and I'm thrilled to share my passion for crafting captivating digital experiences with you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
