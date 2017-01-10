<template>
	<div class="example">
		<p>{{ title }}</p>
	</div>
</template>
<script>
	export default {
		name: 'example',
		data(){
			return {
				title: 'Example component'
			};
		}
	}
</script>
<style type="sass">
	.example {background: #e3e3e3}
</style>