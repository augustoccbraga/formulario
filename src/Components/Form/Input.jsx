import React from "react";
import styles from "./Input.module.css";

const Input = ({
	label,
	id,
	onChange,
	value,
	accept,
	type,
	onBlur,
	placeholder,
	error,
	pattern,
}) => {
	return (
		<>
			<label className={styles.label} htmlFor={id}>
				{label} *
			</label>
			<input
				className={styles.input}
				id={id}
				name={id}
				onChange={onChange}
				value={value}
				type={type}
				accept={accept}
				onBlur={onBlur}
				placeholder={placeholder}
				error={error}
				pattern={pattern}
			/>
			{error && <p className={styles.erro}>{error}</p>}
		</>
	);
};

export default Input;
