<template>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      :class="inputClass"
      type="checkbox"
      :name="name"
      :id="id"
      :checked="checked === true"
      @change="$emit('input', checked !== true)"
    />
    <label class="form-check-label" :class="labelClass" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "argon-switch",
  props: {
    name: String,
    id: String,
    checked: {
      type: [Boolean, String],
      default: false,
    },
    labelClass: String,
    inputClass: String,
  },
};
</script>
