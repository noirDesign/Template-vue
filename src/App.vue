<script>
import Nav from './nav/Nav.vue';
export default {
	components: { Nav },
};
</script>

<template>
	<Nav class="z-20" />
	<router-view />
</template>

<style>
@font-face {
	font-family: inter;
	src: url(../public/font/Inter-Regular.ttf) format('truetype');
}

* {
	font-family: inter;
}

body {
	background-color: #111;
	color: #fff;
	font-weight: 'thin';
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	font-family: inter;
}

#app {
	background-color: #161616;
	width: 360px;
	height: 720px;
	overflow: hidden;
	overflow-y: scroll;
	border-radius: 40px;
}

h1 {
	font-size: 18px;
}
h2 {
	font-size: 15px;
}
h3 {
	font-size: 12px;
}
h4 {
	font-size: 11px;
	color: #838383;
}

@media (max-width: 400px) {
	#app {
		width: 100%;
		height: 100vh;
		border-radius: 0px;
	}
}

::-webkit-scrollbar {
	display: none;
}
</style>
