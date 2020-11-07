<template>
	<div class="container-box alert alert-primary">
		<main>
			<h1 style="text-align:center;">Your Country Information</h1>
			<selectCountry :number="1" @search="search">
			</selectCountry>
			<!-- <selectCountry>
			</selectCountry> -->
			<div>
			</div>
		</main>
		<show-result
			style="margin-bottom: 50px;"
		></show-result>
	</div>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';
import showResult from './showResult.vue';
import selectCountry from './selectCountry.vue'

export default {
	components: {
		showResult,
		selectCountry
	},
	data() {
		return {
			info: undefined
		};
	},
	methods: {
		async search() {
			var country = this.$store.state.FirstCountryName
			if (country) {
				try {
					let response = await axios.get(
						`https://restcountries.eu/rest/v2/name/${country}`
					);
					this.info = {
						name:  response.data[0].capital,
						area:  response.data[0].area.toLocaleString() + " Km²",
					}
				console.log(this.info)
				this.$store.commit('countryInformation', await this.info)
				} catch (error) {
					console.log(error)
				}
			}
		}
	},
};
</script>

<style scoped>
@media screen and (min-width: 500px){
	h3 {
		margin: 5vh
	}
}

.container-box {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	border-radius: 15px;
	min-height: 96vh;
}

main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
}
</style>
