import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Img from "./Components/img/img";
import "./Apps.css";

const App = () => {
	return (
		<>
			<Header />
			<section>
				<Form />
				<Img />
			</section>
			<Footer />
		</>
	);
};

export default App;
