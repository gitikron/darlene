<template>
  <div>
    <button>create</button>
    <form>
        <div class="form-group row">
        <label for="OPDnumber" class="col-sm-2 col-form-label">OPD</label>
        <div class="col-sm-8">
          <input type="text" class=" col-12 form-control" id="OPDnumber">
        </div>
        <div class="col-sm-2">
       <button>create</button>
        </div>
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