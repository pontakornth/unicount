<script lang="ts">
	import CountdownPage from '$lib/components/CountdownPage.svelte';

	const currentDate = new Date();
	const newYearDate = new Date(
		currentDate.getMonth() == 0 && currentDate.getDate() == 1
			? currentDate.getFullYear()
			: currentDate.getFullYear() + 1,
		0,
		1
	);
</script>

<CountdownPage
	targetDate={newYearDate}
	countdownText="Countdown to New Year"
	passedText="Happy New Year"
/>
