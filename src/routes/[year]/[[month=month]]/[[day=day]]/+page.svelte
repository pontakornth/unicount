<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	export let targetDate: Date = $page.data.targetDate;
	let currentDate = new Date();
	$: timeDelta = targetDate.getTime() - currentDate.getTime();
	$: remainingDays = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
	$: remainingHours = Math.floor((timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	$: remainingMinutes = Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60));
	$: remainingSeconds = Math.floor((timeDelta % (1000 * 60)) / 1000);
	$: isPassed = timeDelta <= 0;
	let interval: number;
	let isError = false;

	onMount(() => {
		// I do not take milliseconds into account right now.
		// I am not sure if making currentDate becomes reactive value will impact performance or not.
		interval = setInterval(() => {
			currentDate = new Date();
			if (isPassed) {
				clearInterval(interval);
				return;
			}
		}, 1000);
	});
</script>

<main
	class="flex p-4 text-center bg-orange-500 min-h-screen justify-center items-center flex-col text-white"
>
	{#if isError}
		<p>Invalid time</p>
	{:else}
		<h1 class="text-5xl font-bold">Countdown to {targetDate.toLocaleDateString('en-GB')}</h1>
		{#if isPassed}
			<p class="text-lg">Passed</p>
		{:else}
			<p class="text-3xl">
				{remainingDays} Day(s) {remainingHours} Hour(s) {remainingMinutes} Minute(s) {remainingSeconds}
				Second(s)
			</p>
		{/if}
	{/if}
</main>
