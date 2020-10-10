<template>
	<div class="containerBox alert alert-primary">
		<main>
			<h3>Search</h3>
			<b-form-input
				class="w-25"
				v-model="countryName"
				placeholder="Country Name"
			></b-form-input>
			<!--Change this to a Select Tag :)-->
			<div>
				<b-dropdown
					id="dropdown-left"
					text="What do you want to know?"
					variant="primary"
					class="m-2"
				>
					<b-dropdown-item @click="searchData('Capital')"
						>Capital</b-dropdown-item
					>
					<b-dropdown-item @click="searchData('Demonym')"
						>Demonym</b-dropdown-item
					>
					<b-dropdown-item @click="searchData('Area')">Area</b-dropdown-item>
				</b-dropdown>
			</div>
			<span class="alert alert-danger" v-if="errorMessage"
				>Error: We can't find the Country</span
			>
		</main>

		<!-- Show Result Component -->
		<show-result
			style="margin-bottom: 50px;"
			:errorMessage="errorMessage"
			:whatUserSearchResult="whatUserSearchResult"
			:img="img"
		></show-result>
	</div>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';
import showResult from './showResult.vue';

export default {
	components: {
		showResult,
	},
	data() {
		return {
			countryName: undefined,
			errorMessage: false,
			img: undefined,
			whatUserSearchResult: undefined,
		};
	},
	methods: {
		async searchData(whatToSearch) {
			this.errorMessage = false;
			let search = whatToSearch.toLowerCase();
			let countryName =
				this.countryName.charAt(0).toUpperCase() + this.countryName.slice(1);
			if (search && countryName) {
				try {
					let response = await axios.get(
						`https://restcountries.eu/rest/v2/name/${countryName}`
					);
					this.img = response.data[0].flag;
					this.whatUserSearchResult = response.data[0][search];
					Number(this.whatUserSearchResult)
						? (this.whatUserSearchResult += ' Km²')
						: false;
				} catch (error) {
					//If there is an error (invalid Country Name)
					this.img = undefined;
					this.whatUserSearchResult = undefined;
					this.errorMessage = true;
					setTimeout(() => {
						this.errorMessage = false;
					}, 5000);
				}
			}
		},
	},
};
</script>

<style scoped>
.containerBox {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	border-radius: 15px;
	min-height: 83vh;
}

main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
}
</style>
