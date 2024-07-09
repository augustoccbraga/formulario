import React from "react";
import stylelabel from "./Input.module.css";
import styles from "./Upload.module.css";

const Upload = ({ id, label, ...props }) => {
	return (
		<>
			<label className={stylelabel.label} htmlFor={id}>
				{label} *
			</label>
			<input id={id} className={styles.upload} {...props}></input>
		</>
	);
};

export default Upload;
