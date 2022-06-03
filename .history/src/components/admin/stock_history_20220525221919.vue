<template>
  <div>
    stock history
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
import command from '@/assets/command';
const DB_URL = command.DB_URL
const moment = require('moment')
export default {
  name: 'DarleneVue3StockHistory',
  data() {
    return {
      arr:[]
    };
  },

  mounted() {
    
  },
  methods: {
    getArr()
  },
};
</script>

<style lang="scss" scoped>

</style>