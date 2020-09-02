<template>
  <div>
    <!-- Add a featured image section  -->
    <div class="horizontal">
      <div class="field">
        <img
          id="featured-img"
          class="image"
          v-bind:src="featuredProject.image"
        />
      </div>

      <div class="field">
        <h2 id="fpt">{{ featuredProject.title }}</h2>
        <p id="fpd">{{ featuredProject.description }}</p>
      </div>
    </div>

    <!-- Insert img, url, description -->
    <div id="images">
      <img
        @click="featuredProject = project"
        class="image"
        v-for="project in projects"
        :src="project.image"
        :key="project.id"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserView",
  props: ["projects"],
  data() {
    return {
      featuredProject: this.projects[0]
    };
  }
};
</script>

<style>
#images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.image {
  width: 100%;
}
</style>
