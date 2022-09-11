import React from "react";
import Main from "../template/Main";

export default function Home(props) {
	return (
		<Main icon="home" title="Início" subtitle="Projeto CRUD com React">
			<div className="display-4">Bem vindo!</div>
			<hr />
			<p className="mb-0">Cadastro de usuários com React</p>
		</Main>
	);
}
