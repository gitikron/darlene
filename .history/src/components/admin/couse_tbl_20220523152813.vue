<template>
  <div>
    <input type="tet" placeholder="Couse Name" v-model="create.couseName">
    <input type="number" placeholder="ราคา" v-model="create.price">
    <input type="number" placeholder="จำนวนครั้ง" v-model="create.per">
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3CouseTbl',

  data() {
    return {
      create:{
        couseName:"s",
        price:"0",
        per:"10"
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