import "destyle.css";
import "@/src/styles/global.css";
import styles from "@/src/styles/layout.module.css";
import { Icon } from "@/components/Icon";
import { Noto_Sans_JP, Montserrat } from "next/font/google";

export const metadata = {
  title: "掲示板app",
  description: "react-station2",
};

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  preload: true,
});
const montserrat = Montserrat({
  weight: ["400", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${NotoSansJP.variable} ${montserrat.variable}`}>
      <body>
        <header className={styles.header}>
          <Icon width={36} height={36} className={styles.icon} />
          <h1>掲示板app</h1>
        </header>
        {children}
        <footer className={styles.footer}>
          <address>&copy;2023 react-station2</address>
        </footer>
      </body>
    </html>
  );
}
