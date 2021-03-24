import React from "react";

import AirLogo from "./AirLogo";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.topBorder} />

      <div className={styles.logo}>
        <AirLogo />
      </div>
    </header>
  );
};

export default Header;
