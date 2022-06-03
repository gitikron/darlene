<template>
<div>
  <div><button @click="change()">create</button></div>
  <div v-if="create===true">
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
  name: 'DarleneVue3Index',

  data() {
    return {
      create:false
    };
  },

  mounted() {

  },

  methods: {
    change(){
      if(create==true){create=false}create=true
    }
  },
};
</script>

<style lang="scss" scoped>

</style>