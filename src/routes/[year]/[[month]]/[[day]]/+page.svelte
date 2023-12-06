<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let year = $page.data.year;
	let month = $page.data.month;
	let day = $page.data.day;
	let targetDate: Date = new Date(year, month, day);
	// const year = parseInt($page.params.year, 10);
	// const month = parseInt($page.params.month, 10);
	// const day = parseInt($page.params.day, 10);
	// const targetDate = new Date(year, month - 1, day);
	let interval: number;
	let remainingDays: number = 0;
	let remainingHours: number = 0;
	let remainingMinutes: number = 0;
	let remainingSeconds: number = 0;
	let isPassed = false;
	let isError = false;

	onMount(() => {
		interval = setInterval(() => {
			const currentDate = new Date();
			const timeDelta = targetDate.getTime() - currentDate.getTime();
			if (timeDelta <= 0) {
				clearInterval(interval);
				isPassed = true;
				return;
			}
			remainingDays = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
			remainingHours = Math.floor((timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			remainingMinutes = Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60));
			remainingSeconds = Math.floor((timeDelta % (1000 * 60)) / 1000);
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
