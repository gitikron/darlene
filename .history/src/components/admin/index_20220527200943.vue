<template>
  <div class="block-0 m-2 p-0">
    <div class="block-center">
      <div class="card block-1"></div>
		  <div class="card block-2"></div>
    </div>
   
		<div class="block-3"></div>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Index',
  data() {
    return {
      
    };
  },

  mounted() {

  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.block-0 {
	width: 100%;
	height: 100%;
	background: #818181;
  float: left;
}
.block-center{
  width: 100%;
	height: 75%;
	background: #e7e7e7;
  float: center;
}
.block-1 {
	width: 49%;
	height: 98%;
	background: #0E9F98;
  float: left;
}
.block-2 {
	width: 49%;
	height: 98%;
	background: #bfac04;
  float: right;
}
.block-3 {
	width: 100%;
	height: 25%;
	background: #F4E85C;
  clear: both;
}
</style>