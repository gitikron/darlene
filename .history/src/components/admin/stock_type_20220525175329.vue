<template>
  <div>
    <div class="d-flex justify-content-end"><button class="btn btn-sm btn-primary" @click="swift()">create</button></div>
    
    <div v-if="createControl===true">
      <label for="typename">ประเภท</label>
      <input type="text" class="form-control" placeholder="ชื่อประเภท" v-model="data.type">
      <div class="d-flex justify-content-end m-2">
        <button class="btn btn-sm btn-success">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3StockType',
  data() {
    return {
      createControl:true,
      data:{
        type:''
      }
    };
  },

  mounted() {
    
  },

  methods: {
    swift(){
      if (this.createControl==true) {
        this.createControl=false
      }else{
        this.createControl=true
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>