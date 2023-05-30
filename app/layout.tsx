import "destyle.css";
import "@/src/styles/global.css";
import styles from "@/src/styles/layout.module.css";
import Icon from "@/components/Icon";

export const metadata = {
  title: "掲示板app",
  description: "react-station2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className={styles.header}>
          <Icon width={36} height={36} className={styles.icon} />
          <h1>掲示板app</h1>
        </header>
          {children}
        <footer>
          <address>&copy;2023 react-station2</address>
        </footer>
      </body>
    </html>
  );
}
