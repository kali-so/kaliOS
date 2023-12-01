<script>
	import { onMount } from 'svelte';

	let timeLeft = '';

	onMount(() => {
		const countdownDate = new Date('Feb 1, 2024 19:00:00 GMT+0100').getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;

			if (distance < 0) {
				clearInterval(interval);
				timeLeft = 'Countdown ended';
			}
		}, 1000);
	});
</script>

<div class="h-screen w-screen flex items-start justify-center flex-row">
	{#if timeLeft}
		<div
			class="px-4 py-2 mt-24 bg-purple-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100"
		>
			<h2 class="text-4xl">Time until Demo day:</h2>
			<h3 class="text-5xl">{timeLeft}</h3>
		</div>
	{/if}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.indigo.800);
	}
	:global(body) {
		background-image: url('/wallpaper.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;
		height: 100vh;
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		font-family: 'VT323', monospace;
		color: aliceblue;
	}
</style>
