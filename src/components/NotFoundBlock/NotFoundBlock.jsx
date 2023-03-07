import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock(props) {
  return (
    <div>
      <h1 className={styles.root}>
        <span className={styles.spanSize}>&#128533;</span>
        <br />
        Ничего не найдено
        <p className={styles.description}>
          Данная страница отсутствует в интернет магазине
        </p>
      </h1>
    </div>
  );
}

export default NotFoundBlock;
