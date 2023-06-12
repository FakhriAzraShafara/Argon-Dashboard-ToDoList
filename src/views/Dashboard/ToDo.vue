<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <button
          class="btn-primary rounded px-5 py-1.9 mb-3"
          type="button"
          @click="showModal"
        >
          Add
        </button>
        <Modal v-show="isModalAddVisible" @close="closeModal">
          <template v-slot:header>FAKHRI MODAL</template>
          <template v-slot:body>
            <div class="mt-3">
              <form v-on:submit.prevent="submitAddList">
                <div class="form-group">
                  <label for="title">Title:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="input.title"
                  />
                </div>
                <div class="form-group">
                  <label for="category">Category:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="input.category"
                  />
                </div>
                <div class="form-group">
                  <label for="description">Description:</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="input.description"
                  ></textarea>
                </div>
                <div class="text-center mt-4">
                  <button class="btn btn-primary px-6 fs-5" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </template>
          <template v-slot:footer> @footerMeme </template>
        </Modal>
        <TodoTable />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import d$todo from "@/stores/dashboard/todo";
import Modal from "@/components/Modal.vue";
import TodoTable from "@/views/Dashboard/TodoTable.vue";

export default {
  name: "Todo",
  components: {
    TodoTable,
    Modal,
  },
  data: () => ({
    input: {
      title: "",
      description: "",
      category: "",
    },
    isModalAddVisible: false,
  }),
  methods: {
    showModal() {
      this.isModalAddVisible = true;
    },
    closeModal() {
      this.isModalAddVisible = false;
    },
    ...mapActions(d$todo, ["a$list", "a$add"]),
    async submitAddList() {
      try {
        await this.a$add({ ...this.input });
        await this.a$list();
        this.isModalAddVisible = false;
        this.input.title = "";
        this.input.description = "";
        this.input.category = "";
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style></style>
