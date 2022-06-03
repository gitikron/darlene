<template>
  <div>
    <button class="btn btn-sm btn-primary m-2">
      Create with Excel
    </button>

    <input type="file" id="input" @change="readfile($event)"/>
  </div>
</template>

<script>
import readXlsxFile from 'read-excel-file'
export default {
  name: 'DarleneVue3Index',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    readfile(e){
      readXlsxFile(e.files[0])
    }
  },
};
</script>

<style lang="scss" scoped>

</style>