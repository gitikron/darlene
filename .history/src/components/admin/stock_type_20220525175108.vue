<template>
  <div>
    <div class="d-flex justify-content-end"><button class="btn btn-sm btn-primary" @click="swift()">create</button></div>
    {{createControl}}

    <div v-if="createControl===true">
      <label for="typename">ประเภท</label>
      <input type="text" class="form-control" placeholder="ชื่อประเภท">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3StockType',

  data() {
    return {
      createControl:true
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