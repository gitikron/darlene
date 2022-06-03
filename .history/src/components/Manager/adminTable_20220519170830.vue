<template>
  <div class=" d-blog fs-res">
    <table class="table table-striped" id="datatable" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>role</th>
          <th>action</th>
          <th>action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item.username">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.role }}</td>
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
          paging: false,
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
