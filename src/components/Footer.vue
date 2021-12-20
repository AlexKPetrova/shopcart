<template>
  <footer>
    <b-container>
      <b-row>
        <b-col>
          <div class="cart-data">
            <template v-if="count">
              <template v-if="!userInfoIsValid">
                <span class="cc">Items in cart: {{ count }}</span>
                <b-button variant="primary" to="/cart">В корзину</b-button>
                <b-button variant="success" to="/personal-info">Заполнить данные</b-button>
              </template>
              <b-button v-else variant="success" @click="addOrder">Сделать заказ</b-button>
            </template>

            <template v-else>Корзина пуста</template>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    addOrder() {
      this.$store.dispatch('addOrder');
      this.$router.push('/orders');
    },
  },
  computed: {
    count() {
      return this.$store.getters.getCount;
    },
    userInfoIsValid() {
      /* eslint operator-linebreak: ["error", "after"] */
      return (
        this.$store.state.userInfo.name &&
        this.$store.state.userInfo.email &&
        this.$store.state.userInfo.age
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  position: sticky;
  bottom: 0;
  background: white;
  padding: 24px;
  .cart-data {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 24px;
  }
}
</style>
