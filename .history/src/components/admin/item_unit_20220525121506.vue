<template>
  <div>
<div class="alert alert-danger" role="alert" v-if="alert.control===true" @click="alert.control=false,alert.text=''">
{{alert.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
</div>
<div class="alert alert-success" role="alert" v-if="alert2.control===true" @click="alert2.control=false,alert2.text=''">
{{alert2.text}},คลิ๊กเพื่อปิดการแจ้งเตือน.
</div>
    <div class="d-flex justify-content-end mt-2">
      <button class="btn btn-sm btn-primary" @click="swiftUnit()">create</button>
    </div>

    <label for="unit" v-if="unitControl===true"> หน่วย
      <input type="text" name="unit" id="unit" class="form-control" placeholder="หน่วย" v-model="unit.units">
      <div class="d-flex justify-content-end mt-2">
        <button class="btn btn-sm btn-success">Submit</button>
      </div>
    </label>
{{unit}}

  </div>
</template>

<script>
export default {
  name: 'DarleneVue3ItemUnit',

  data() {
    return {
      load:false,
      unitControl:true,
      unit:{units:''},
      alert:{
        text:'',
        control:false
      },
      alert2:{
        text:'',
        control:false
      },
    };
  },

  mounted() {
    
  },

  methods: {
    swiftUnit(){
      if(this.unitControl==false){
        this.unitControl=true
      }else{
        this.unitControl=false
      }
    },
    validation(){
      if (this.unit.units=='') {
        this.alert.text='กรุณากรอกหน่วย'
        this.alert.control=true
        return false
      }
      return true
    },
    createUnit(){
      if (this.validation()) {
        
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>