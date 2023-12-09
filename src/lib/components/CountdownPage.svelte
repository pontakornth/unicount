<script lang="ts">
	import { onMount } from 'svelte';
	export let targetDate: Date = new Date();
	export let passedText = 'Passed';
	export let countdownText = `Countdown to ${targetDate.toLocaleDateString('en-GB')}`;
	let currentDate = new Date();
	$: timeDelta = targetDate.getTime() - currentDate.getTime();
	$: remainingDays = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
	$: remainingHours = Math.floor((timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	$: remainingMinutes = Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60));
	$: remainingSeconds = Math.floor((timeDelta % (1000 * 60)) / 1000);
	$: isPassed = timeDelta <= 0;

	// For some reason <svelte:head> is not reactive inside a component.
	export let titleText = `${remainingDays}:${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
	$: titleText = `${remainingDays}:${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
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

<!-- <svelte:head> -->
<!-- 	{#if isPassed} -->
<!-- 		<title> -->
<!-- 			{passedText} -->
<!-- 		</title> -->
<!-- 	{:else} -->
<!-- 		<title> -->
<!-- 			{remainingDays}:{remainingHours}:{remainingMinutes}:{remainingSeconds}:{timeDelta} -->
<!-- 		</title> -->
<!-- 	{/if} -->
<!-- </svelte:head> -->
<main
	class="flex p-4 text-center bg-orange-500 min-h-screen justify-center items-center flex-col text-white"
>
	{#if isError}
		<p>Invalid time</p>
	{:else}
		<h1 class="text-5xl font-bold">{countdownText}</h1>
		{#if isPassed}
			<p class="text-lg">{passedText}</p>
		{:else}
			<p class="text-3xl">
				{remainingDays} Day(s) {remainingHours} Hour(s) {remainingMinutes} Minute(s) {remainingSeconds}
				Second(s)
			</p>
		{/if}
	{/if}
</main>
