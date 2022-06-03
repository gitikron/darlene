<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
      {{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
      {{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
    </div>
    <div class="d-flex justify-content-end m-2">
      <button class="btn btn-sm btn-success" @click="swift()">Create</button>
    </div>

    <div class="card m-2 p-2" v-if="switchs===true">
      <input type="text" class="form-control" placeholder="ID">
      <input type="password" class="form-control" placeholder="Password">
      <input type="password" class="form-control" placeholder="Confirm Password">
      <select id="position" class="form-control text-success">
        <option value="">admin</option>
        <option value="">manager</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3AdminAccount',
  data() {
    return {
      switchs:true,
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
      if (this.switchs==true) {
        this.switchs=false
      }else{
        this.switchs=true
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>