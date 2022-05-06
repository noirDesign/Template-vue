<script>
import Homenav from './Homenav.vue';
import Searchnav from './Searchnav.vue';
import Shortnav from './Shortnav.vue';
import Heartnav from './Heartnav.vue';
export default {
	components: { Homenav, Searchnav, Shortnav, Heartnav },
};
</script>

<template>
	<nav
		class="w-full py-10 px-25 fixed bottom-0 left-0 right-0 justify-center flex"
	>
		<div
			class="backdrop-blur-xl bg-trans p-8 flex justify-between rounded-30 px-20 w-full"
		>
			<router-link to="'/" class="btn hover:bg-trans2">
				<Homenav />
			</router-link>
			<router-link to="'/Search" class="btn hover:bg-trans2">
				<Searchnav />
			</router-link>
			<router-link to="'/Short" class="btn hover:bg-trans2">
				<Shortnav />
			</router-link>
			<router-link to="'/Activity" class="btn hover:bg-trans2">
				<Heartnav />
			</router-link>
			<router-link to="'/User" class="btn hover:bg-trans2">
				<img src="../assets/user.jpg" class="nav-icons rounded-50" />
			</router-link>
		</div>
	</nav>
</template>

<style>
.nav-icons {
	width: 22px;
}
</style>
