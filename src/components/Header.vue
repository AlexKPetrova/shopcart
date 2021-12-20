<template>
  <b-container>
    <b-row>
      <b-navbar toggleable="lg" variant="faded">
        <b-navbar-brand to="/">Shoppp</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Товары</b-nav-item>
            <b-nav-item to="/personal-info">Данные</b-nav-item>
            <b-nav-item to="/orders">Заказы</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto"> </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-row>
  </b-container>
</template>
