<template>
  <div>
     <nav class="navbar d-flex justify-content-end">
      <button class="btn btn-sm btn-dark" @click="load=true">items</button>
      <button class="btn btn-sm btn-dark m-2" @click="load=false">type</button>
    </nav>
<!--END header-->
    <div>
      <label for="unit" class="form-control"> หน่วย
        <input type="text" name="unit" id="unit" class="form-control" placeholder="unit">
        <div class="d-flex justify-content-end">
          <button class="btn btn-sm btn-success">Submit</button>
        </div>
      </label>
    </div>


  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Item',

  data() {
    return {
      load:false
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