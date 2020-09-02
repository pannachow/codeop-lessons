<template>
  <div>
    <div class="role">
      <button :class="{ active: isAdmin }" @click="isAdmin = true">
        ADMIN
      </button>
      <button :class="{ active: !isAdmin }" @click="isAdmin = false">
        USER
      </button>
    </div>

    <h1>MY PORTFOLIO</h1>

    <admin-view v-if="isAdmin" @createProject="addProject" />
    <user-view v-else v-bind:projects="allProjects" />
  </div>
</template>

<script>
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";

export default {
  name: "app",
  components: {
    userView: UserView,
    adminView: AdminView
  },
  data() {
    return {
      isAdmin: true,
      allProjects: [
        {
          id: 1,
          title: "baby no.1",
          description: "Golden Retriever",
          image: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
        },
        {
          id: 2,
          title: "baby no.2",
          description: "Maltese",
          image:
            "https://i.pinimg.com/originals/fa/bf/c0/fabfc0124567dec5037bae7b943762b5.jpg"
        },
        {
          id: 3,
          title: "baby no.3",
          description: "German Shepherd",
          image:
            "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11181218/German-Shepherd-puppies.jpg"
        }
      ]
    };
  },
  methods: {
    addProject(project) {
      console.log("LULULULULLU");
      this.allProjects.push(project);
    }
  }
};
</script>

<style>
.active {
  padding: 10px;
  background-color: white;
}

* {
  font-family: monospace;
}

body {
  background: white;
  text-align: center;
  max-width: 1000px;
  margin: auto;
}

input,
textarea {
  /* https://stackoverflow.com/q/16907518 */
  box-sizing: border-box;
  width: 100%;
}

textarea {
  height: 100px;
}

.role {
  text-align: right;
}
</style>
