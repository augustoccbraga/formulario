import React from "react";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import Upload from "./Upload";
import useForm from "../Hooks/useForm";
import styles from "./Form.module.css";

const Form = () => {
	const nome = useForm("nome");
	const email = useForm("email");
	const celular = useForm("tel");
	const [vaga, setVaga] = React.useState("");

	function handleSubmit(event) {
		event.preventDefault();
		if (nome.validate() && celular.validate() && email.validate()) {
			console.log("Enviou");
		} else {
			console.log("Não enviou");
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h1>Candidate-se agora!</h1>
			<h2 className={styles.h2}>
				Basta preencher e enviar o formulário abaixo para ter uma oportunidade
				de trabalhar conosco.
			</h2>
			<Input id="nome" label="Nome" placeholder="Nome Completo" {...nome} />
			<Input
				id="email"
				label="Email"
				type="email"
				placeholder="email@email.com"
				{...email}
			/>
			<Input
				id="celular"
				label="Celular"
				type="tel"
				placeholder="(99) 99999-9999"
				{...celular}
			/>
			<Select
				id="selectvaga"
				label="Escolha sua função"
				value={vaga}
				setValue={setVaga}
				required
			/>
			<Upload
				id="curriculo"
				label="Currículo"
				type="file"
				accept="application/pdf, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
				required
			/>
			<h4>Campos com * são de preenchimento obrigatório</h4>
			<Button />
		</form>
	);
};

export default Form;
