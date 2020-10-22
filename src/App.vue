<template>
	<div id="app">
		<h1>{{ joke }}</h1>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "App",
	data() {
		return {
			joke: "",
		};
	},
	mounted() {
		axios
			.get("https://official-joke-api.appspot.com/jokes/general/random")
			.then((res) => (this.joke = res.data[0].setup));
	},
};
</script>

<style>
@font-face {
	font-family: "RCT2";
	src: url("./assets/RCT2.ttf");
}

#app {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
}

#app > h1 {
	font-family: RCT2;
	color: #fff;
	font-size: 5em;
}
</style>
