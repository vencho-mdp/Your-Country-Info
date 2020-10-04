<template>
  <div class="container">
    <!--Printing Data only if there isn't an error message-->
    <h2 v-if="!errorMessage">{{ whatUserSearchResult }}</h2>
    <img v-if="!errorMessage" :src="img" />
  </div>
</template>

<script>
export default {
  props: ["img", "whatUserSearchResult", "errorMessage"] //Getting the Props from Main.vue
};
</script>

<style scoped>
div {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 96vw;
  padding: 3vh;
  border-radius: 15px;
  margin: 2vh;
  background-color: rgb(190, 210, 235);
}

img {
  max-height: 38vh;
  max-width: 100%;
  padding: 2vw;
}

@media screen and (max-width: 400px) {
  img {
    max-height: 250px;
  }
}
</style>
