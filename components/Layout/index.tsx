import type { ReactNode } from "react";
import Header from "../Header";
import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header
        className={styles.spaceBottom}
        style={{
          border: "1px solid black",
        }}
      >
        <Header />
      </header>
      <main
        className={styles.spaceBottom}
        style={{
          border: "1px solid black",
        }}
      >
        {children}
      </main>
      <footer
        className={styles.spaceBottom}
        style={{
          border: "1px solid black",
        }}
      >
        2022 all right reserved. @digitalchina.com
      </footer>
    </>
  );
};

export default Layout;
