<template>
	<div id="app" @click="getPunchline()">
		<header>
			<router-link class="link" to="/">No Punchline</router-link>
			<br />
			<router-link class="link punchline" to="/punchline"
				>/punchline</router-link
			>
			<router-link class="link mixer" to="/mixer">/mixer</router-link>
		</header>
		<h1>{{ punchline }}</h1>
		<footer>
			<div class="thankyou">
				<div>Thank you</div>
				<img src="https://minotar.net/avatar/jschlatt.png" />
			</div>
			<div class="credit"><a href="https://ejer.ga">Made by ejer</a></div>
		</footer>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Punchline",
	data() {
		return {
			punchline: "",
		};
	},
	mounted() {
		this.getPunchline();
	},
	methods: {
		getPunchline() {
			this.punchline = "";

			let apis = [
				"https://official-joke-api.appspot.com/jokes/general/random",
				"https://sv443.net/jokeapi/v2/joke/Any",
			];
			let api = apis[Math.floor(Math.random() * apis.length)];

			axios.get(api).then((res) => {
				if (api === apis[0]) this.punchline = res.data[0].punchline;
				else if (api === apis[1]) this.punchline = res.data.delivery;
			});
		},
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

#app > header {
	position: absolute;
	top: 0;
	text-align: center;
	margin: 0.5em 0;
}

#app > header > .link {
	color: #fff;
	text-decoration: none;
	font-size: 2em;
}

#app > header > .punchline {
	margin-right: 1em;
}

#app > header > .link:hover {
	text-decoration: underline;
}

#app > h1 {
	font-size: 5em;
	text-align: center;
	font-smooth: never;
	-webkit-font-smoothing: none;
	-moz-osx-font-smoothing: grayscale;
}

#app > footer {
	position: absolute;
	bottom: 0;
	margin: 0.5em 0;
	text-align: center;
}

#app > footer > .thankyou > div {
	font-size: 1.5em;
	display: inline-block;
	vertical-align: middle;
}

#app > footer > .thankyou > img {
	display: inline-block;
	vertical-align: middle;
	height: 1.5em;
	margin-left: 0.6em;
	filter: drop-shadow(0 0 4px #ffffff88);
}

#app > footer > .credit {
	margin-top: 0.5em;
	font-size: 1.5em;
}

#app > footer > .credit > a {
	color: #fff;
	text-decoration: none;
}

#app > footer > .credit > a:hover {
	text-decoration: underline;
}
</style>
