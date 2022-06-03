<template>
  <div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-success m-2" @click="swift()">create</button>
    </div>

    <div>
      <input type="text" class="formcontrol">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3StockIndex',

  data() {
    return {
      control:false
    };
  },

  mounted() {
    
  },

  methods: {
    swift(){
      if (this.control==false) {
        this.control=true
      }else{
        this.control=false
      }
      
    }
  },
};
</script>

<style lang="scss" scoped>

</style>