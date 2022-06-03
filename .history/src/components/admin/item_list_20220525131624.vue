<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-success mx-2" @click="swiftUnit()">create</button>
    </div>

    <div>
      <input type="text" class="form-control mt-2" placeholder="Item Name">
      <input type="number" class="form-control mt-2" placeholder="Price">
      <div class="mt-2" >
                <label for="mdCommission">MD Commission</label>
                <select  class="form-control" v-model="edit.arr.mdCommission">
                  <option value="false">ไม่มี</option>
                  <option value="true">มี</option>
                </select>
          </div>
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