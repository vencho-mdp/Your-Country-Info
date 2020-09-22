<template>
  <div class="alert alert-primary" role="alert">
    <input style="color: blue;" type="text" v-model="countryName" @keyup="searchData" />
    <!--Change this to a Select Tag :)-->
    <input style="color: red; " type="text" v-model="search" @keyup="searchData" />
    <span v-if="errorMessage">Error: We can't find what you are looking for :(</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      countryName: undefined,
      search: undefined,
      errorMessage: false
    };
  },
  methods: {
    searchData() {
      let search = this.search.toLowerCase();
      let countryName =
        this.countryName.charAt(0).toUpperCase() + this.countryName.slice(1);
      if (search && countryName) {
        axios
          .get("https://restcountries.eu/rest/v2/name/" + countryName)
          .then(function(response) {
            let fetchResponse = response.data[0];
            let img = fetchResponse.flag;
            if (fetchResponse[search] !== undefined) {
              document.write(
                fetchResponse[search] + `<img src="${img}"> </img>`
              );
              console.log(response.status); // ex.: 200
            } else {
              this.errorMessage = true;
            }
          })
          .catch(error => {
            console.log(error);
            this.errorMessage = true;
          });
      }
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
