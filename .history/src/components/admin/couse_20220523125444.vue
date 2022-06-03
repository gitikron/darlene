<template>
  <div>
    <nav class="navbar d-flex justify-content-end">
      <button class="btn btn-sm btn-dark" @click="load='Couse'">Couse</button>
      <button class="btn btn-sm btn-dark m-2" @click="load='type'">type</button>
    </nav>

    <ADCOUSETYPE/>
      <ADCOUSETBL/>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Index',
  data() {
    return {
      load:"Couse"
    };
  },
  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>