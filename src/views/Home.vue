<template>
	<h1>soy el home</h1>
	<Card v-for="item of items" :key="item.id" :item="item" />
</template>

<script>
import Card from '../components/Card.vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
export default {
	components: { Card },
	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch('fetchData');
		});
		const items = computed(() => store.state.items);
		return { items };
	},
};
</script>
