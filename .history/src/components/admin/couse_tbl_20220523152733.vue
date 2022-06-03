<template>
  <div>
    <input type="tet" placeholder="Couse Name" v-model="couseName">
    <input type="number" placeholder="ราคา">
    <input type="number" placeholder="จำนวนครั้ง">
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3CouseTbl',

  data() {
    return {
      create:{
        couseName:"",
        price:"",
        per:""
      }
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