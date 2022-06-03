<template>
  <div>
    <nav class="navbar d-flex justify-content-end">
      <button class="btn btn-sm btn-dark" @click="load=false">Couse</button>
      <button class="btn btn-sm btn-dark m-2" @click="load=true">type</button>
    </nav>

    <ADCOUSETYPE class="container card p-3 mb-2" v-if="load===false"/>
      <ADCOUSETBL class="container card p-3 mb-2" v-if="load===true"/>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Index',
  data() {
    return {
      load:false
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