import React from "react";

import Image from "next/image";

import styles from "./PersonResult.module.scss";

interface PersonResultProps {
  name: string;
  avatar: string;
  description: string;
}

const PersonResult = ({ name, avatar, description }: PersonResultProps) => {
  return (
    <div data-test-id="person-result" className={styles.person}>
      <Image
        className={styles.avatar}
        src={avatar}
        alt={`${name}'s Avatar`}
        width={96}
        height={96}
      />

      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>

        {/* TODO: Line clamp (easy way is string length) */}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default PersonResult;
