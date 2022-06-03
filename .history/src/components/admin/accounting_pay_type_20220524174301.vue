<template>
  <div>
    <div class="col-12">
    <label for="typename" class="mt-2">วิธีการชำระ</label>
    <input type="text" class="form-control mt-2" name="typename" placeholder="Name">
    </div>
    <div class="col-6">
    <label for="typename" class="mt-2">วิธีหักยอด</label>
    <select  class="form-control mt-2">
       <option value="">เลือก</option>
        <option value="percent">percent</option>
        <option value="cash">cash</option>
    </select>
</div>
<div class="col-6">
  <label for="typename" class="mt-2">จำนวนที่หัก</label>
    <input type="text" class="form-control mt-2" placeholder="หักจำนวน(ก่อนคิดค่าคอม)">
</div>
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