<template>
  <div>
    <h3>ADD NEW PROJECT</h3>

    <div class="horizontal">
      <div class="field">
        <label for="pt">Project Title</label>
        <br />
        <input id="pt" type="text" v-model="title" />
      </div>

      <div class="field">
        <label for="url">Image URL</label>
        <br />
        <input id="url" type="text" v-model="image" />
      </div>
    </div>

    <div class="field">
      <label for="pd">Project Description</label>
      <br />
      <textarea id="pd" v-model="description"></textarea>
    </div>

    <button @click="handleSubmit">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      title: "",
      image: "",
      description: "",
      id: 4
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("createProject", {
        title: this.title,
        image: this.image,
        description: this.description,
        id: this.id++
      });
    }
  }
};
</script>

<style>
.horizontal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
}

.field {
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
}
</style>
