<template>
  <div class="block-0 m-2 p-0">
    <div class="block-center">
      <div class="card block-1">
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark brt-2">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" @click="load='index'">Home</a>
          </li>
         <li class="nav-item">
            <a class="nav-link active" @click="load='index'">Home</a>
          </li>
          </ul>

        </nav>

        <div class="float-start">
          <div v-for="item,index in couse" :key="index" class="btn btn-btn-outline-dark card block-3 m-2 p-1">
          <img :src="item.display" alt="itme display" class="img-card">
          <span v-if="item.couseName.length<=13" class="fw-semibold fs-10 text-center mt-1">{{item.couseName.toUpperCase()}}</span>
          <span v-if="item.couseName.length>=14" class="fw-semibold fs-10 text-center mt-1">{{item.couseName[0]+item.couseName[1]+item.couseName[2]+item.couseName[3]+item.couseName[4]+item.couseName[5]+item.couseName[6]+item.couseName[7]+item.couseName[8]+item.couseName[9]+item.couseName[10]+"..."}}</span>
          <span class="fw-semibold fs-10 text-center mt-1">{{Intl.NumberFormat().format(item.price)}} บาท</span>
          <span class="fw-semibold fs-10 text-center mt-1"> {{Intl.NumberFormat().format(item.per)}} ครั้ง</span>
          </div>
          </div>

      

        </div>
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
      load:'index',
      couse:''
    };
  },
  mounted() {
    this.getCouse()
  },
  methods: {
    getCouse(){
        axios.get(`${command.DB_URL}/couse/list.json`).then((result) => {
          console.log(result.data)
          this.couse=result.data
          console.log(this.couse)
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
  float: left;
}
.block-center{
  width: 100%;
	height: 100%;
  float: center;
}
.block-1 {
	width: 80%;
	height: 98%;
  float: left;
}
.block-2 {
	width: 20%;
	height: 98%;
  float: right;
}
.block-3 {
	width: 100px;
	height: auto;
  float: inherit;
}

.fs-10{
  font-size: 10px;
}

.img-card{
  width: 90px;
  height: 90px;
  border-radius: 3%;
  box-shadow: 2px 2px 4px black;
}
.brt-2{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>