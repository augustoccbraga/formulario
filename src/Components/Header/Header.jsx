import React from "react";
import styles from "./Header.module.css";
import logo from "../img/logo-finansee.svg";

const Header = () => {
	return (
		<div className={styles.header}>
			<img src={logo} alt="Paytour" />
		</div>
	);
};

export default Header;
