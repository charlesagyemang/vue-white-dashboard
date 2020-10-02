<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}} <router-link to="/dashboard/add-a-sales" class="btn btn-primary">Add New Sales</router-link>
          </h3>
        </div>

      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Quarter</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Car</th>
          <th>Actions</th>
        </template>

        <template slot-scope="{row}">

          <td scope="startDate">
            {{row.quarter}}
          </td>

          <td scope="startDate">
            {{row.startDate}}
          </td>

          <td class="endDate">
            {{row.endDate}}
          </td>

          <td class="car">
            {{row.car.modelName}}
          </td>

          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>
              <template>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
              </template>
            </base-dropdown>
          </td>


        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
import {mapState} from 'vuex';

  export default {
    beforeCreate () {
      // Tobi Geolcator
      // if(navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(function(position) {
      //       console.log(position);
      //   });
      // } else {
      //     alert("Sorry, your browser does not support HTML5 geolocation.");
      // }
    },
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    created (){
      // fetch all insurance
      if (this.$store.state.car.carIncometaxes.length < 1) {
        this.$store.dispatch('car/fetchCarIncometaxes').then(() =>{
            console.log(this.car.carIncometaxes );
          });
      }
    },
    data() {
      return {
        total: 30,
      }
    },
    computed: {
      ...mapState(['car']),
      tableData(){
        return this.car.carIncometaxes
      },
    },
    methods: {
      getLatestData() {
        this.$store.dispatch('car/fetchCarIncometaxes').then(() =>{
            console.log(this.car.carIncometaxes );
        });
      },
    },
  }
</script>
<style>
</style>
