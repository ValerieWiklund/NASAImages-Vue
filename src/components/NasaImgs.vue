<template>
  <div class="nasaImgs col-12 border">
    <h3>NASA Image of the Day for {{img.date}}</h3>
    <h4>{{img.title}}</h4>
    <img :src="img.hdurl" />
    <p>{{img.explanation}}</p>
  </div>
</template>


<script>
export default {
  name: "nasaImgs",
  data() {
    return {};
  },
  computed: {
    img() {
      return this.$store.state.nasaimgs;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
img {
  height: 500px;
}
p {
  font-size: 0.75rem;
}
</style>