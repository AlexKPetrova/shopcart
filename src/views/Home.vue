<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col md="3" v-for="item in items" :key="item.id">
          <Item :item="item" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/Item.vue';

export default {
  name: 'Home',
  components: { Item },

  computed: {
    items() {
      return this.$store.getters.getItems;
    },
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 15px 0;
}
</style>
