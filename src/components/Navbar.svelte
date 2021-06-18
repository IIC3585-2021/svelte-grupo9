<script>
    import { Link } from "svelte-navigator";
</script>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a> -->
      <Link to="../">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </Link>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Explorar Fotos
        </a>
        <a class="navbar-item">
          Explorar por Lugares
        </a>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Mis Fotos</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>