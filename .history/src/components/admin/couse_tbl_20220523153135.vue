<template>
  <div class="form-group">
    <label for="CouseName">Couse Name</label>
    <input class="form-control" name="CouseName" type="tet" placeholder="Couse Name" v-model="create.couseName">
    <label for="CouseName">Price</label>
    <input class="form-control" type="number" placeholder="ราคา" v-model="create.price">
    <input class="form-control" type="number" placeholder="จำนวนครั้ง" v-model="create.per">
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