<template>
  <div id="app">
    <AppHeader> </AppHeader>

    <Main></Main>

    <footerPage> </footerPage>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import AppHeader from "./components/AppHeader.vue";
import footerPage from "./components/footerPage.vue";
export default {
  name: "App",
  components: {
    Main,
    AppHeader,
    footerPage
  }
};
</script>

