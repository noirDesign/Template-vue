<template>
	<main
		class="bg-primary rounded-30 overflow-hidden flex flex-col my-20 mx-40"
	>
		<img :src="item.thumbnailUrl" class="object-cover h-200" />
		<div class="flex flex-col p-15">
			<h1 class="text-20">{{ item.title }}</h1>
			<h2 class="text-10 text-terciary">${{ item.precio }}.00</h2>
			<button class="px-8 py-5 rounded-20 bg-azul text-15 mt-10 w-fit">
				comprar
			</button>
		</div>
	</main>
</template>

<script>
export default {
	props: ['item'],
};
</script>
