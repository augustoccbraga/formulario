import React from "react";
import Img from "./resume.svg";
import styles from "./img.module.css";

const img = () => {
	return <img src={Img} className={styles.img} />;
};

export default img;
