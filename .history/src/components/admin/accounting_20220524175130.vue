<template>
<div class="p-2">
  <div class="d-flex justify-content-end"><button class="btn btn-sm btn-primary" @click="change()">create</button></div>
  <div class="container card p-3 mb-2" v-if="create===true">
    <label for="typename" class="mt-2">วิธีการชำระ</label>
    <input type="text" class="form-control mt-2" name="typename" placeholder="Name">
    <label for="typename" class="mt-2">วิธีหักยอด</label>
    <select  class="form-control mt-2">
       <option value="">เลือก</option>
        <option value="percent">percent</option>
        <option value="cash">cash</option>
    </select>
    
    <label for="typename" class="mt-2">จำนวนที่หัก</label>
    <input type="text" class="form-control mt-2" placeholder="หักจำนวน(ก่อนคิดค่าคอม)">

    <button class="btn btn-sm btn-success mt-2">submit</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'DarleneVue3Acc',

  data() {
    return {
      create:false
    };
  },

  mounted() {

  },

  methods: {
    change(){
      if(this.create==true){
        this.create=false
        }else{
      this.create=true
        }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
