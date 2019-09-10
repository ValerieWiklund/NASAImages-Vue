<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <img alt="Vue logo" src="../assets/logo.png" />
        NASA Image of the Day
      </div>
      <search />
    </div>
    <div class="row">
      <div class="col-12">
        <NasaImgs />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NasaImgs from "@/components/NasaImgs.vue";
import Search from "@/components/Search.vue";

export default {
  name: "home",
  components: {
    Search,
    NasaImgs
  }
};
</script>
<style scoped>
img {
  height: 100px;
}
</style>
