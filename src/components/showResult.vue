<template>
  <div class="container">
    <div class="sub-container" v-if="this.$store.state.FirstCountryInformation && this.$store.state.FirstCountryName">
      <h2>{{this.$store.state.FirstCountryName}} </h2>
      <h4>{{ this.$store.state.FirstCountryInformation.capital}}</h4>
      <h4 v-bigger="{ search: 'area', numberOfCountry: 'FirstCountryInformation' }">{{ this.$store.state.FirstCountryInformation.area}}</h4>
      <h4  v-bigger="{ search: 'population', numberOfCountry: 'FirstCountryInformation' }">{{ this.$store.state.FirstCountryInformation.population}} <b-icon icon="person-fill" scale="0.7"></b-icon></h4>
    </div>
    <h2 v-if="this.$store.state.SecondCountryName && this.$store.state.SecondCountryInformation && this.$store.state.FirstCountryInformation && this.$store.state.FirstCountryName" id="vs" style="color:rgb(0, 0, 0);font-family: 'Carter One', cursive;">VS</h2>
    <div class="sub-container" v-if="this.$store.state.SecondCountryName && this.$store.state.SecondCountryInformation">
      <h2>{{this.$store.state.SecondCountryName}} </h2>
      <h4>{{ this.$store.state.SecondCountryInformation.capital}}</h4>
      <h4 v-bigger="{ search: 'area', numberOfCountry: 'SecondCountryInformation' }">{{ this.$store.state.SecondCountryInformation.area}}</h4>
      <h4 v-bigger="{ search: 'population', numberOfCountry: 'SecondCountryInformation' }">{{ this.$store.state.SecondCountryInformation.population}} <b-icon icon="person-fill" scale="0.7"></b-icon></h4>
    </div>
  </div>
</template>

<script>
export default {
  computed: { 
  },
  methods: {
    whichIsBigger(whatToAnalize){
      let firstCountryData = whatToAnalize == "Area" ?  Number(this.$store.state.FirstCountryInformation.area.match(/\d/g).join("")) : Number(this.$store.state.FirstCountryInformation.population.match(/\d/g).join(""))
      let secondCountryData = whatToAnalize == "Area" ? Number(this.$store.state.SecondCountryInformation.area.match(/\d/g).join("")) : Number(this.$store.state.SecondCountryInformation.population.match(/\d/g).join("")) 
      if(firstCountryData == secondCountryData || !firstCountryData || !secondCountryData) return false
      if (firstCountryData > secondCountryData) {
        return "first country"
      } else if (secondCountryData > firstCountryData){
        return "second country"
      } 
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');

h2,h4{
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
@media screen and (max-width: 600px){
  #vs{
    margin: 0 100%;
  }
}
.sub-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 10vw;
  max-width: 100%;
  margin: 0 10px;
  max-height: 25vh;
}

.container{
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 3vh;
  border-radius: 15px;
  margin: 2vh;
  background-color: rgb(190, 210, 235);
}
</style>
