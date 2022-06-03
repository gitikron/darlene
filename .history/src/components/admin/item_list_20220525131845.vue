<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-success mx-2" @click="swiftUnit()">create</button>
    </div>

    <div>
      <label for="itemName">Item name</label>
      <input type="text" class="form-control mt-2" placeholder="Item Name">
      <label for="price">Item Price</label>
      <input type="number" class="form-control mt-2" placeholder="Price">
      <select  class="form-control mt-2">
        <option value="false">ไม่มี</option>
        <option value="true">มี</option>
      </select>

    </div>



  </div>
</template>

<script>
export default {
  name: 'DarleneVue3ItemList',

  data() {
    return {
      unitControl:false
    };
  },

  mounted() {
    
  },

  methods: {
    swiftUnit(){
      if(this.unitControl==false){
        this.unitControl=true
      }else{
        this.unitControl=false
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>