<template>
  <div>
    <nav class="navbar d-flex justify-content-end">
      <button class="btn btn-sm btn-primary" @click="load=true">Couse</button>
      <button class="btn btn-sm btn-primary m-2" @click="load=false">type</button>
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
      load:true
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