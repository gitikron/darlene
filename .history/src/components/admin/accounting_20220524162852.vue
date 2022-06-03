<template>
  <div>
    <nav class="navbar d-flex justify-content-end">
      <button class="btn btn-sm btn-dark" @click="load='table'">table</button>
      <button class="btn btn-sm btn-dark m-2" @click="load='type'">type</button>
    </nav>
    <ADACCTYPE class="container card p-3 mb-2" v-if="load==='type'"/>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Index',

  data() {
    return {
      load:'type'
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