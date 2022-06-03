<template>
  <div>
    <input type="text" class="form-control" placeholder="Name">

    <select  class="form-control">
       <option value="">เลือก</option>
        <option value="percent">percent</option>
        <option value="cash">cash</option>
    </select>

    <input type="text" class="form-control" placeholder="หักจำนวน(ก่อนคิดค่าคอม)">

    <button>submit</button>
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