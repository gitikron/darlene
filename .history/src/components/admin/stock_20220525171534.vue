<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-dark m-2" @click="load='index'">stock tbl</button>
      <button class="btn btn-sm btn-dark m-2" @click="load='history'">history</button>
      <button class="btn btn-sm btn-dark m-2" @click="load='type'">type</button>
    </div>

    {{load}}
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