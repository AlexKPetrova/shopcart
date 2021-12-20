<template>
  <div class="cart-page">
    <b-container>
      <b-row>
        <template v-if="cart.length">
          <b-col md="12" v-for="item in cart" :key="item.id">
            <CartItem :item="item" />
          </b-col>
        </template>
        <template v-else>
          <p>nothing here</p>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';

export default {
  name: 'CartPage',
  components: { CartItem },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>
