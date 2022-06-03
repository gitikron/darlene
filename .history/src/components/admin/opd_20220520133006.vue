<template>
  <div>
    <button class="btn btn-sm btn-primary" @click="load = 'createNew'">
      Create OPD
    </button>
    <div class="container card ">
      <select class="form-control form-control-lg">
        <option>Large select</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "DarleneVue3Index",

  data() {
    return {
      load: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
