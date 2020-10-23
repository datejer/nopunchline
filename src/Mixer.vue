<template>
	<div id="app" @click="getJoke()">
		<h1>
			{{ joke }}
			<br />
			{{ punchline }}
		</h1>
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
	name: "Mixer",
	data() {
		return {
			joke: "",
			punchline: "",
		};
	},
	mounted() {
		this.getJoke();
	},
	methods: {
		getJoke() {
			this.joke = "";
			this.punchline = "";
			axios
				.get("https://official-joke-api.appspot.com/jokes/general/random")
				.then((res) => {
					this.joke = res.data[0].setup;
					console.log(res.data[0]);
					axios
						.get("https://official-joke-api.appspot.com/jokes/general/random")
						.then((res) => {
							this.punchline = res.data[0].punchline;
							console.log(res.data[0]);
						});
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
