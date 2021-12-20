<template>
  <b-card
    @click.prevent="modalShow = !modalShow"
    :title="item.name"
    header-tag="header"
    footer-tag="footer"
  >
    <b-card-text>{{ item.description.substring(0, 95) + '...' }}</b-card-text>
    <b-card-text
      ><b>{{ item.price }} руб.</b></b-card-text
    >

    <template #footer>
      <template v-if="itemInCart">
        <b-button size="lg" variant="outline-primary" @click.prevent.stop="removeFromCart(item.id)">
          <b-icon-patch-minus-fill />
        </b-button>
        <span class="quantity">{{ itemInCart.count }}</span>
        <b-button size="lg" variant="outline-primary" @click.prevent.stop="addToCart(item.id)">
          <b-icon-patch-plus-fill />
        </b-button>
      </template>
      <b-button
        v-else
        key="addnew"
        size="lg"
        variant="primary"
        @click.prevent.stop="addToCart(item.id)"
      >
        Add to cart <b-icon-plus />
      </b-button>
    </template>

    <b-modal v-model="modalShow" :title="item.name" hide-footer>
      <ItemFull :item="item" />
    </b-modal>
  </b-card>
</template>

<script>
import ItemFull from '@/components/ItemFull.vue';

export default {
  name: 'Item',
  props: {
    item: null,
  },
  components: {
    ItemFull,
  },
  data() {
    return {
      modalShow: false,
    };
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
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
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
