<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-primary m-2" @click="load='index'">stock tbl</button>
      <button class="btn btn-sm btn-primary m-2" @click="load='create'">upload with excel</button>
      <button class="btn btn-sm btn-primary m-2" @click="load='history'">history</button>
      <button class="btn btn-sm btn-primary m-2" @click="load='type'">type</button>
    </div>
      <ADSTOCKINDEX class="container card p-3 mb-2" v-if="load==='index'"/>
      <ADSTOCKTYPE class="container card p-3 mb-2" v-if="load==='type'"/>
      <ADSTOCKHISTORY class="container card p-3 mb-2" v-if="load==='history'"/>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Stock',

  data() {
    return {
      load:'index'
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