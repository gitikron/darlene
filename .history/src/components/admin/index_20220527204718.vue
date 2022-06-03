<template>
  <div class="block-0 m-2 p-0">
    <div class="block-center">
      <div class="card block-1">
        



      </div>
		  <div class="card block-2"></div>
    </div>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import sha1 from 'sha1'
import moment from 'moment'
import axios from 'axios';
import command from '../../assets/command'
const _ =require("lodash")
export default {
  name: 'DarleneVue3Index',
  data() {
    return {
      couse:''
    };
  },

  mounted() {
    this.getCouse()
  },

  methods: {
    getCouse(){
        axios.get(`${command.DB_URL}/couse/list.json`).then((result) => {
          this.couse=result.data
        }).catch((err) => {
          console.log(err)
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.block-0 {
	width: 100%;
	height: 100%;
	background: #ffffff;
  float: left;
}
.block-center{
  width: 100%;
	height: 100%;
	background: #ffffff;
  float: center;
}
.block-1 {
	width: 80%;
	height: 98%;
	background: #ffffff;
  float: left;
}
.block-2 {
	width: 20%;
	height: 98%;
	background: #c3c3c3;
  float: right;
}
</style>