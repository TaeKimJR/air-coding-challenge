import React from "react";

import styles from "./PersonResult.module.scss";

interface PersonResultProps {
  name: string;
  avatar: string;
  description: string;
}

const PersonResult = ({ name, avatar, description }: PersonResultProps) => {
  return (
    <div className={styles.person}>
      <img className={styles.avatar} src={avatar} alt={`${name}'s Avatar`} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>

        {/* TODO: Line clamp (easy way is string length) */}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default PersonResult;
