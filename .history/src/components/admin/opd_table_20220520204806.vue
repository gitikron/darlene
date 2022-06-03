<template>
  <div>
    this is table
  </div>
</template>

<script>
import axios from 'axios';
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  
  name: 'DarleneVue3OpdTable',

  data() {
    return {
      arr:[]
    };
  },

  mounted() {
    this.GetTable()
  },

  methods: {
    GetTable(){
      axios.get(`${DB_URL}/OPD.json`).then((result) => {
        this.arr=result.data
        this.arr.splice(0,1)
        console.log(this.arr)
      }).catch((err) => {
        console.log(err)
      });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>