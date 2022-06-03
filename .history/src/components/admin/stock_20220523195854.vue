<template>
  <div>
    <button class="btn btn-sm btn-primary m-2">
      Create with Excel
    </button>
    <input type="file" id="input" class="form-control" @change="readfile($event)"/>
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
        const data=result
        data.splice(0,1)
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          console.log(element)
        }
      }).catch((err) => {
        console.log(err)
      });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>