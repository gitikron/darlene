<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-success mx-2" @click="swiftUnit()">create</button>
    </div>

    <div>
      <input type="text" class="form-control mt-2" placeholder="Item Name">
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