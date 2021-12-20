<template>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="8">
        <b-card-body :title="item.name">
          <b-card-text> {{ item.description }} </b-card-text>
        </b-card-body>
      </b-col>
      <b-col md="4" class="card-actions">
        <b-card-body :title="item.price.toString() + ' руб.'">
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
            Add to cart <b-icon-plus-lg />
          </b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'CartItem',
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
.card-actions {
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
}
</style>
