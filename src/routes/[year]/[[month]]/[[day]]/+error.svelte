<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="text-red-500 font-bold text-underline">{$page.status}: {$page.error?.message}</h1>
