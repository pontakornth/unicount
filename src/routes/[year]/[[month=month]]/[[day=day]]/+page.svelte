<script lang="ts">
	import { page } from '$app/stores';
	import CountdownPage from '$lib/components/CountdownPage.svelte';
	export let targetDate: Date = $page.data.targetDate;
	let titleText: string;
</script>

<svelte:head>
	<title>{titleText}</title>
</svelte:head>

<CountdownPage bind:titleText {targetDate} />
