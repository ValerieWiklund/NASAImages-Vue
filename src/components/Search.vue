<template>
  <div class="search">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Enter Date YYYY-MM-DD" v-model="query" />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          @click="getImage"
        >Search</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "search",
  data() {
    return {
      query: ""
    };
  },
  computed: {},
  methods: {
    getImage() {
      this.$store.dispatch("getImage", this.query);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>