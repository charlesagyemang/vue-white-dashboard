<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
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
          <th>Actions</th>
          <th>Full Name</th>
          <th>email</th>
          <th>phoneNumber</th>
          <th>address</th>
          <th>car</th>
        </template>

        <template slot-scope="{row}">

          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>
              <template>
                <a class="dropdown-item" href="#">View Driver Details</a>
                <a class="dropdown-item" href="#">View Driver Status</a>
              </template>
            </base-dropdown>
          </td>

          <th scope="fullname">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Car Image" :src="row.imageUrl">
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.fullName}}</span>
              </div>
            </div>
          </th>

          <td class="email">
            {{row.email}}
          </td>

          <td class="phone-number">
            {{row.phoneNumber}}
          </td>


          <td class="address">
            {{row.address}}
          </td>


          <td class="car">
            {{row.car.modelName}}<br>
          </td>

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination :total="total" ></base-pagination>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        total: 30,
        tableData: [
          {
            imageUrl: '/img/cars/picanto2.jpg',
            fullName:'fullname',
            email: 'fullname@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            car: {
              modelName: 'Tundra',
            }
            //currentDriver
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            fullName:'fullname',
            email: 'fullname@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            car: {
              modelName: 'Tundra',
            }
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            fullName:'fullname',
            email: 'fullname@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            car: {
              modelName: 'Tundra',
            }
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            fullName:'fullname',
            email: 'fullname@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            car: {
              modelName: 'Tundra',
            }
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            fullName:'fullname',
            email: 'fullname@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            car: {
              modelName: 'Tundra',
            }
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            fullName:'fullname',
            email: 'fullname@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            car: {
              modelName: 'Tundra',
            }
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            fullName:'fullname',
            email: 'fullname@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            car: {
              modelName: 'Tundra',
            }
          },
        ],
      }
    },
  }
</script>
<style>
</style>
