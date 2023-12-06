<script lang="ts">
	import { base } from '$app/paths';
	function formatDate(date: Date) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
		const day = String(date.getDate()).padStart(2, '0');

		return `${year}-${month}-${day}`;
	}

	let targetDateString: string = formatDate(new Date());
	$: targetDate = new Date(targetDateString);
	// I have no idea how month is 0-indexed.
	$: targetUrl = `${base}/${targetDate.getFullYear()}/${
		targetDate.getMonth() + 1
	}/${targetDate.getDate()}`;
</script>

<main
	class="p-4 mx-auto text-center text-white min-h-screen flex items-center justify-center flex-col"
>
	<h1 class="text-5xl font-bold">Universal Countdown</h1>
	<p class="text-3xl">Countdown for every moment</p>
	<div class="py-4">
		<label for="target-date">Target Date</label>
		<input
			class="text-black"
			type="date"
			name="target-date"
			bind:value={targetDateString}
			id="target-date"
		/>
	</div>
	<a href={targetUrl} class="px-4 py-2 rounded bg-orange-600 hover:bg-orange-700 text-white"
		>Let's go</a
	>
</main>

<style>
	:global(body, html) {
		--at-apply: 'bg-orange-500';
	}
</style>
