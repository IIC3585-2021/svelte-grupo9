<script>
    import { link } from 'svelte-navigator';
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/" use:link>
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a> -->
      <div class="logo">
        <img src="/logoSvelte.PNG" width="112" height="28" alt="">
      </div>
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
        <a href="/countries" use:link class="navbar-item">
          Explorar por Lugares
        </a>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" use:link href="myphotos" replace>
              <strong>Mis Fotos</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
</nav>

<style>
  .logo {
    padding: 22px 15px 15px 20px;
  }
</style>