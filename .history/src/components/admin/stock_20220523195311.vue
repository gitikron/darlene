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
      const file = e.target.files[0]
      console.log(file)
      readXlsxFile(file).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>