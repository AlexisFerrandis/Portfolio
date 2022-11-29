import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = ({setUId}) => {
	const [formSubmit, setFormSubmit] = useState(false);
	const [pseudo, setPseudo] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [controlPassword, setControlPassword] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();

		const terms = document.getElementById("terms");
		const pseudoError = document.querySelector(".pseudo.error");
		const emailError = document.querySelector(".email.error");
		const passwordError = document.querySelector(".password.error");
		const passwordConfirmError = document.querySelector(".password-confirm.error");
		const termsError = document.querySelector(".terms.error");

		passwordConfirmError.innerHTML = "";
		termsError.innerHTML = "";

		if (password !== controlPassword || !terms.checked) {
			if (password !== controlPassword) passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";

			if (!terms.checked) termsError.innerHTML = "Veuillez valider les conditions générales";
		} else {
			await axios({
				method: "post",
				url: `${process.env.REACT_APP_API_URL}api/user/register`,
				data: {
					pseudo,
					email,
					password,
				},
			})
				.then((res) => {
					if (res.data.errors) {
						pseudoError.innerHTML = res.data.errors.pseudo;
						emailError.innerHTML = res.data.errors.email;
						passwordError.innerHTML = res.data.errors.password;
					} else {
						setFormSubmit(true);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<>
			{formSubmit ? (
				<>
					<SignInForm setUId={setUId}/>
					<span></span>
					<h4 className="success">Enregistrement réussi, veuillez vous connecter</h4>
				</>
			) : (
				<form action="" onSubmit={handleRegister} id="sign-up-form" className="sign-up-form">
					<h2>Créer un compte</h2>
					<h3>C'est rapide et facile.</h3>
					{/* <label htmlFor="pseudo">Pseudo</label> */}
					<input type="text" name="pseudo" id="pseudo" onChange={(e) => setPseudo(e.target.value)} value={pseudo} placeholder="Pseudo" />
					<div className="pseudo error"></div>

					{/* <label htmlFor="email">Email</label> */}
					<input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Adresse e-mail" />
					<div className="email error"></div>

					{/* <label htmlFor="password">Mot de passe</label> */}
					<input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Mot de passe" />
					<div className="password error"></div>

					{/* <label htmlFor="password-conf">Confirmer le mot de passe</label> */}
					<input type="password" name="password" id="password-conf" onChange={(e) => setControlPassword(e.target.value)} value={controlPassword} placeholder="Confirmer le mot de passe" />
					<div className="password-confirm error"></div>

					<input type="checkbox" id="terms" />
					<label htmlFor="terms">
						J'accepte les{" "}
						<a href="/" target="_blank" rel="noopener noreferrer">
							conditions générales
						</a>
					</label>
					<div className="terms error"></div>
					<br />

					<input type="submit" value="S'inscrire" className="green-btn"></input>
					<div className="grey-separator"></div>
				</form>
			)}
		</>
	);
};

export default SignUpForm;
