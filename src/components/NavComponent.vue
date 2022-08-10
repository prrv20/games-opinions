<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/">
          <a class="navbar-brand fs-3">
             <i class="fa-solid fa-headset"></i>Games Opinions
          </a>
        </router-link>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-3 text-end" >
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link active" aria-current="page">
                  <i class="fa-solid fa-house mx-1"></i>Home
                </a>
              </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/opiniones">
                  <a class="nav-link">
                    <i class="fa-solid fa-comments mx-1"></i>Opiniones
                  </a>
                </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin">
                <a class="nav-link">
                  <i class="fa-solid fa-users-gear mx-1"></i>Administración
                </a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  </div>
  
</template>

<script>
export default {
  name: "nav-component",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
    a{
      text-decoration: none;
    }

</style>