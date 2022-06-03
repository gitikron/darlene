<template>
  <div>
     <nav class="navbar d-flex justify-content-end">
      <button class="btn btn-sm btn-dark" @click="load=true">items</button>
      <button class="btn btn-sm btn-dark m-2" @click="load=false">type</button>
    </nav>
<!--END header-->
  <ADITEMUNIT class="container card p-3 mb-2" v-if="load===false"/>

  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Item',

  data() {
    return {
      load:true,
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