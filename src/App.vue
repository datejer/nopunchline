<template>
	<div id="app">
		<h1>{{ joke }}</h1>
		<footer>
			<div>Thank you</div>
			<img src="https://minotar.net/avatar/jschlatt.png" />
		</footer>
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
	font-family: RCT2;
	color: #fff;
}

#app > h1 {
	font-size: 5em;
	text-align: center;
}

#app > footer {
	position: absolute;
	bottom: 0;
	margin: 0.5em 0;
}

#app > footer > div {
	font-size: 1.5em;
	display: inline-block;
	vertical-align: middle;
}

#app > footer > img {
	display: inline-block;
	vertical-align: middle;
	height: 1.5em;
	margin-left: 0.6em;
	filter: drop-shadow(0 0 4px #ffffff88);
}
</style>
