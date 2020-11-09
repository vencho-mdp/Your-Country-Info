<template>
	<div class="container-box alert alert-primary">
		<main>
			<h1 style="text-align:center;">Your Country Information</h1>
			<selectCountry :number="1" @search="search">
			</selectCountry>
			<selectCountry :number="2" @search="search">
			</selectCountry>
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
		async search(number, isRegion) {
			var country = number === 1 ? this.$store.state.FirstCountryName : this.$store.state.SecondCountryName
			if (country) {
				try {
					if(isRegion === false) {
						let response = await axios.get(
						`https://restcountries.eu/rest/v2/name/${country}`
					);
						this.info = {
						capital:  response.data[0].capital,
						population: new Intl.NumberFormat().format(response.data[0].population),
						area:  new Intl.NumberFormat().format(response.data[0].area) + " Km²",
					}
					} else {
						let query = country.replace(/[a-z]/g, '').replace(/\s/g, '');
						if(country == "Caribbean Community") {
						query = "CARICOM" 
						} else if  (country == "Association of Southeast Asian Nations") { 
						query = "ASEAN"
						}				
						number == 1 ? this.$store.commit('changeFirstCountryName', query) : this.$store.commit('changeSecondCountryName', query) 		
						let response = await axios.get(
						`https://restcountries.eu/rest/v2/regionalbloc/${query}`
					);
						this.info = {
						capital:  response.data[0].capital,
						population: new Intl.NumberFormat().format(response.data[0].population),
						area:  new Intl.NumberFormat().format(response.data[0].area) + " Km²",
					}
					}
					
				console.log(this.info)
				if(number == 1 ) {
					this.$store.commit('changeFirstCountryInformation', await this.info)
				} else {
					this.$store.commit('changeSecondCountryInformation', await this.info)
				}
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
	height: 100%;
}

main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
}
</style>
