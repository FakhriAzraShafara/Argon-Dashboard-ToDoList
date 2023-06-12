<template>
  <add-modal
    :modal-id="modalId"
    :modal-title="modalTitle"
    :submit-form="submitForm"
  >
    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        v-model="form.title"
        required
      />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        class="form-control"
        id="description"
        v-model="form.description"
        required
      ></textarea>
    </div>
  </add-modal>
</template>

<script>
import AddModal from "@/components/Modal.vue";

export default {
  name: "AddTodo",
  components: {
    AddModal,
  },
  data() {
    return {
      modalId: "addModal",
      modalTitle: "Add Item",
      form: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Submit form data to server
    },
  },
};
</script>
