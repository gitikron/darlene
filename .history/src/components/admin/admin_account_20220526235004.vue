<template>
  <div>
    admin
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="d-flex justify-content-end m-2">
      <button class="btn btn-sm btn-success" @click="swift()">Create</button>
    </div>

    <div v-if="switch===true">
      s
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3AdminAccount',
  data() {
    return {
      switch:false,
      alert:{
        text:"",
        control:false
      },
      alert2:{
        text:"",
        control:false
      }
    };
  },

  mounted() {
    
  },

  methods: {
    swift(){
      if (this.switch==true) {
        this.switch==false
      }
      this.switch==true
    }
  },
};
</script>

<style lang="scss" scoped>

</style>