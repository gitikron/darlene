<template>
  <div>
    <label for="typename">วิธีการชำระ</label>
    <input type="text" class="form-control mt-2" name="typename" placeholder="Name">
    <label for="typename">วิธีหักยอด</label>
    <select  class="form-control mt-2">
       <option value="">เลือก</option>
        <option value="percent">percent</option>
        <option value="cash">cash</option>
    </select>
  <label for="typename">จำนวนที่หัก</label>
    <input type="text" class="form-control mt-2" placeholder="หักจำนวน(ก่อนคิดค่าคอม)">

    <button class="btn btn-sm btn-success mt-2">submit</button>
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