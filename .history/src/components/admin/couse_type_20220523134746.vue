<template>
  <div>
    <form>
        <div class="form-group card row">
        <label for="OPDnumber" class="col-sm-12 col-form-label">Type Name</label>
        <div class="col-sm-12">
          <input type="text" class="form-control" id="OPDnumber">
        </div>
      </div>
      <div class="d-flex justify-content-end mt-2">
        <button class="btn btn-sm btn-success">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3CouseType',

  data() {
    return {
      create: {
        type:''
      }
      
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