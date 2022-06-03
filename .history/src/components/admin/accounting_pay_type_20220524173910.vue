<template>
  <div>
    <input type="text" class="form-control m-2" placeholder="Name">

    <select  class="form-control m-2">
       <option value="">เลือก</option>
        <option value="percent">percent</option>
        <option value="cash">cash</option>
    </select>

    <input type="text" class="form-control m-2" placeholder="หักจำนวน(ก่อนคิดค่าคอม)">

    <button class="btn btn-sm btn-success">submit</button>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Index',

  data() {
    return {
      
    };
  },

  mounted() {

  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>