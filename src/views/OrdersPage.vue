<template>
  <div class="orders-page">
    <b-container>
      <b-row>
        <b-col md="12" v-for="order in orders" :key="order.id">
          <b-list-group>
            <b-list-group-item
              >Заказ <b>ID-{{ order.id }}</b></b-list-group-item
            >
            <b-list-group-item v-for="item in order.items" :key="item.id"
              >{{ item.name }} –– {{ item.price }} * {{ item.count }} =
              {{ item.price * item.count }} руб.
            </b-list-group-item>

            <b-list-group-item
              >Общая цена - <b>{{ order.totalPrice }} руб.</b></b-list-group-item
            >
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'OrdersPage',
  components: {},
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
};
</script>

<style lang="scss" scoped></style>
