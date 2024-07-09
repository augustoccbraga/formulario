import React from "react";
import stylelabel from "./Input.module.css";
import styles from "./Select.module.css";

const Select = ({ id, label, value, setValue, ...props }) => {
	return (
		<>
			<label className={stylelabel.label} htmlFor={id}>
				{label} *
			</label>
			<select
				className={styles.select}
				value={value}
				onChange={({ target }) => setValue(target.value)}
				{...props}
			>
				<option value="" disabled>
					Selecione uma vaga
				</option>
				<option value="vaga 1">vaga 1</option>
				<option value="vaga 2">vaga 2</option>
			</select>
		</>
	);
};

export default Select;
