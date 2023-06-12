<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Authors table</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                v-for="(column, index) in tableColumns"
                :key="index"
                :class="column.class"
              >
                {{ column.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(author, index) in authors" :key="index">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      :src="author.image"
                      class="avatar avatar-sm me-3"
                      :alt="'user' + (index + 1)"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ author.name }}</h6>
                    <p class="text-xs text-secondary mb-0">
                      {{ author.email }}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ author.role }}</p>
                <p class="text-xs text-secondary mb-0">
                  {{ author.department }}
                </p>
              </td>
              <td class="align-middle text-center text-sm">
                <span
                  :class="[
                    'badge',
                    'badge-sm',
                    author.status === 'Online'
                      ? 'bg-gradient-success'
                      : 'bg-gradient-secondary',
                  ]"
                  >{{ author.status }}</span
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  author.employed
                }}</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "authors-table",
  data() {
    return {
      tableColumns: [
        {
          label: "Author",
          class:
            "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7",
        },
        {
          label: "Function",
          class:
            "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2",
        },
        {
          label: "Status",
          class:
            "text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7",
        },
        {
          label: "Employed",
          class:
            "text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7",
        },
        {
          label: "Actions",
          class:
            "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7",
        },
      ],
      authors: [
        {
          name: "John Michael",
          email: "john@creative-tim.com",
          image: "../../assets/img/team-2.jpg",
          role: "Manager",
          department: "Organization",
          status: "Online",
          employed: "23/04/18",
        },
        {
          name: "Alexa Liras",
          email: "alexa@creative-tim.com",
          image: "../../assets/img/team-3.jpg",
          role: "Programator",
          department: "Developer",
          status: "Offline",
          employed: "11/01/19",
        },
        {
          name: "Laurent Perrier",
          email: "laurent@creative-tim.com",
          image: "../../assets/img/team-4.jpg",
          role: "Executive",
          department: "Projects",
          status: "Online",
          employed: "19/09/17",
        },
        {
          name: "Michael Levi",
          email: "michael@creative-tim.com",
          image: "../../assets/img/team-3.jpg",
          role: "Programator",
          department: "Developer",
          status: "Online",
          employed: "24/12/08",
        },
        {
          name: "Richard Gran",
          email: "richard@creative-tim.com",
          image: "../../assets/img/team-2.jpg",
          role: "Manager",
          department: "Executive",
          status: "Offline",
          employed: "04/10/21",
        },
        {
          name: "Miriam Eric",
          email: "miriam@creative-tim.com",
          image: "../../assets/img/team-4.jpg",
          role: "Programtor",
          department: "Developer",
          status: "Offline",
          employed: "14/09/20",
        },
      ],
    };
  },
};
</script>
