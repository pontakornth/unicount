<script lang="ts">
	import { page } from '$app/stores';
	import CountdownPage from '$lib/components/CountdownPage.svelte';
	export let targetDate: Date = $page.data.targetDate;
</script>

<CountdownPage {targetDate} />
