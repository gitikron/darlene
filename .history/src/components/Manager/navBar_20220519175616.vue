<template>
    <nav class="navbar bg-dark fs-res mt-10">
      <form class="container-fluid justify-content-start">
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
      </form>
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
</style>