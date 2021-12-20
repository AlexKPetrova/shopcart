<template>
  <b-card header-tag="header" footer-tag="footer">
    <b-card-text>{{ item.description }}</b-card-text>

    <template #footer>
      <template v-if="itemInCart">
        <b-button size="lg" variant="outline-primary" @click="removeFromCart(item.id)">
          <b-icon-patch-minus-fill />
        </b-button>
        <span class="quantity">{{ itemInCart.count }}</span>
        <b-button size="lg" variant="outline-primary" @click="addToCart(item.id)">
          <b-icon-patch-plus-fill />
        </b-button>
      </template>
      <b-button v-else key="addnew" size="lg" variant="primary" @click="addToCart(item.id)">
        Add to cart <b-icon-plus />
      </b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: null,
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    },
    removeFromCart(id) {
      this.$store.dispatch('removeFromCart', id);
    },
  },
  computed: {
    itemInCart() {
      return this.$store.getters.getFromCartByID(this.item.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  .card-footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;

    button {
      padding: 3px 10px;
    }
  }
}
</style>
