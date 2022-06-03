<template>
  <div class="container">
    <table class="table table-hover" id="datatable">
      <thead>
        <tr>
          <th class="fs-res">Name</th>
          <th class="fs-res">Username</th>
          <th class="fs-res">role</th>
          <th class="fs-res">action</th>
          <th class="fs-res">action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item.username">
          <td class="fs-res">{{ item.name }}</td>
          <td class="fs-res">{{ item.username }}</td>
          <td class="fs-res">{{ item.role }}</td>
          <td>
            <button class="btn btn-warning btn-sm fs-res">edit</button>
          </td>
          <td>
            <button class="btn btn-danger btn-sm fs-res">del</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
const DB_URL =
  "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app";
export default {
  name: "DarleneVue3Admintable",

  data: function () {
    return {
      data: [],
    };
  },

  mounted() {
    axios.get(`${DB_URL}/auth.json`).then((response) => {
      this.data = response.data;
      $(document).ready(function () {
        $("#datatable").DataTable({
          lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"],
          ],
          paging: true,
        });
      });
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
/* Set the background color of body to tan */
body {
  background-color: tan;
}

/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  .sorting {
    padding: 0px;
  }
  th {
    padding-right: 0px !important;
    margin: 0px;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  .fs-res{
    font-size: 10px;
  }
}
</style>
