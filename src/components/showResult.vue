<template>
  <div v-if="this.$store.state.FirstCountryInformation" class="container">
    <div>
      <h2>{{this.$store.state.FirstCountryName}} </h2>
      <h4>{{ this.$store.state.FirstCountryInformation.name}}</h4>
      <h4>{{ this.$store.state.FirstCountryInformation.area}}</h4>
    </div>
    <h2 class="vs" style="color:rgb(0, 0, 0);font-family: 'Carter One', cursive;">VS</h2>
    <div>
      <h2>{{this.$store.state.FirstCountryName}} </h2>
      <h4>{{ this.$store.state.FirstCountryInformation.name}}</h4>
      <h4>{{ this.$store.state.FirstCountryInformation.area}}</h4>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');

h2,h4{
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
@media screen and (max-width: 460px) and  (min-width: 260px){
  .vs{
    margin: 0 100%;
  }
}

h2{
  display:flex;
  align-items:center;
  justify-content:space-around;
}
.container *{
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.container{
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 3vh;
  border-radius: 15px;
  margin: 2vh;
  background-color: rgb(190, 210, 235);
}
</style>
