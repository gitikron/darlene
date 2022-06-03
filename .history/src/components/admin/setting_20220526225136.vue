<template>

  <div class="w-blog">
    <span class=" fw-bold text-success">LINE NOTIFY
      <label class="switch" >
        <input type="checkbox" v-model="Setting.main">
        <span class="slider round"></span>
      </label>
    </span>
    <div>
      <label for="Stock" class="mx-2">
        <span class="d-flex fw-bold mt-2">Stock</span>
       <input type="text" class="form-control-md m-2" v-model="Setting.lineStock" :disabled="Setting.main===false">
       <button  class="btn btn-sm btn-primary" :disabled="Setting.main===false">test</button> 
       </label>
       <label for="Account"  class="mx-2">
         <span class="d-flex fw-bold">Account</span>
       <input type="text" class="form-control-md m-2" v-model="Setting.lineAccount" :disabled="Setting.main===false">
       <button class="btn btn-sm btn-primary" :disabled="Setting.main===false">test</button>
       </label>
       <div class="d-flex justify-content-center m-2">
         <button class="btn btn-sm btn-success" :disabled="Setting.main===false">save</button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarleneVue3Setting',

  data() {
    return {
      Setting:{
        main:this.$store.getters.getSetting.main,
        lineStock:this.$store.getters.getSetting.lineStock,
        lineAccount:this.$store.getters.getSetting.lineAccount,
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
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(203, 203, 203);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 0px;
  bottom: 0px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 2px #c3c3c3;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #00a53f;
}

input:focus + .slider {
  box-shadow: 0 0 1px #00a03d;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 20px;
}

.slider.round:before {
  border-radius: 50%;
}
.w-blog{
  width: 25%;
  min-width: 300px;
}
</style>