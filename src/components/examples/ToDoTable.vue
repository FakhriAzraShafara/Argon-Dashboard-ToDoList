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
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                No
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Title
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Created-At
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Completed
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Description
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in g$list" :key="index">
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ item.title }}</h6>
                    <p class="text-xs text-secondary mb-0">
                      {{ item.cretedAt }}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs text-secondary mb-0">
                  {{ item.description }}
                </p>
              </td>
              <td class="align-middle text-center text-sm">
                <span
                  :class="[
                    'badge',
                    'badge-sm',
                    item.completed === 'False'
                      ? 'bg-gradient-success'
                      : 'bg-gradient-secondary',
                  ]"
                  >{{ author.status }}</span
                >
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
import { mapActions, mapState } from "pinia";
import d$todo from "@/stores/dashboard/todo";
export default {
  name: "ToDo",
  computed: {
    ...mapState(d$todo, ["g$list"]),
  },
  methods: {
    ...mapActions(d$todo, ["a$list"]),
    async getList() {
      try {
        await this.a$list();
      } catch (e) {
        console.error("methods getList error", e);
      }
    },
  },
  async created() {
    await this.getList();
  },
};
</script>
