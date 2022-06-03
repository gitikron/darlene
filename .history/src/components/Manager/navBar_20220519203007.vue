<template>
    <nav class="navbar bg-dark fs-res navbar-inverse">
        <button class="btn btn-sm btn-outline-light mx-auto fs-res" type="button">
          Admin Manage
        </button>
        <button class="btn btn-sm btn-outline-light mx-auto fs-res" type="button">
          User Manage
        </button>
        <button class="btn btn-sm btn-outline-light mx-auto fs-res" type="button">
          Doctor manage
        </button>
        <button class="btn btn-sm btn-outline-light mx-auto fs-res" type="button">
          Sale manage
        </button>
    </nav>
</template>

<script>
export default {
  name: 'DarleneVue3Navbar',

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
/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  .fs-res{
    font-size: 15px;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  .fs-res{
    font-size: 10px;
  }
}

.navbar-inverse {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
}
@media screen and (max-width: 767px){
  .navbar-inverse{bottom: 0; top:auto;}
}
</style>