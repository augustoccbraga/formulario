import React from "react";

const types = {
	tel: {
		regex: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/,
		message: "Celular inválido!",
	},
	email: {
		regex:
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		message: "Email inválido",
	},
	file: {
		tamanhomax: 2097152,
		message: "Arquivo muito grande",
	},
};

const useForm = (type) => {
	const [value, setValue] = React.useState("");
	const [error, setError] = React.useState("");

	function validate(value) {
		if (value.length === 0) {
			setError("Preenchimento obrigatório");
			return false;
		} else if (types[type] && !types[type].regex.test(value)) {
			setError(types[type].message);
			return false;
		} else {
			setError(null);
			return true;
		}
	}

	function onChange({ target }) {
		if (error) validate(target.value);
		setValue(target.value);
	}

	return {
		value,
		setValue,
		error,
		onChange,
		onBlur: () => validate(value),
		validate: () => validate(value),
	};
};

export default useForm;
