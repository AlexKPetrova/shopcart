import Vue from 'vue';
import Vuex from 'vuex';
import { nanoid } from 'nanoid';

Vue.use(Vuex);

const initItems = [
  {
    id: 10,
    name: 'Alpha-1',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    quantity: 1,
    price: 100,
    imageLink: '',
    tags: ['tea', 'pot'],
  },
  {
    id: 11,
    name: 'Alpha-2',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    quantity: 1,
    price: 100,
    imageLink: '',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 12,
    name: 'Alpha-3',
    quantity: 1,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    price: 100,
    imageLink: '',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 13,
    name: 'Alpha-4',
    quantity: 1,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    price: 100,
    imageLink: '',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 14,
    name: 'Alpha-5',
    quantity: 1,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    price: 100,
    imageLink: '',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 15,
    name: 'Alpha-6',
    quantity: 1,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    price: 100,
    imageLink: '',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 16,
    name: 'Alpha-7',
    quantity: 1,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    price: 100,
    imageLink: '',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 17,
    name: 'Alpha-8',
    quantity: 1,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    price: 100,
    imageLink: '',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 18,
    name: 'Alpha-9',
    quantity: 1,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    price: 100,
    imageLink: '',
    tags: ['tag1', 'tag2'],
  },
];

const initUserInfo = {
  email: '',
  name: '',
  age: null,
};

export default new Vuex.Store({
  state: {
    // Пробуем забрать из локалстораджа, иначе суем
    // начальные данные в локалсторадж и возвращаем их в стору
    /* eslint operator-linebreak: ["error", "after"] */
    items:
      JSON.parse(localStorage.getItem('items')) ||
      localStorage.setItem('items', JSON.stringify(initItems)) ||
      initItems,
    cart:
      JSON.parse(localStorage.getItem('cart')) ||
      localStorage.setItem('cart', JSON.stringify([])) ||
      [],
    userInfo:
      JSON.parse(localStorage.getItem('userInfo')) ||
      localStorage.setItem('userInfo', JSON.stringify(initUserInfo)) ||
      initUserInfo,
    orders:
      JSON.parse(localStorage.getItem('orders')) ||
      localStorage.setItem('orders', JSON.stringify([])) ||
      [],
  },
  mutations: {
    updateEmail(state, value) {
      Vue.set(state.userInfo, 'email', value);
    },
    updateName(state, value) {
      Vue.set(state.userInfo, 'name', value);
    },
    updateAge(state, value) {
      Vue.set(state.userInfo, 'age', value);
    },
    addItemToCart(state, item) {
      state.cart.push(item);
    },
    setItemCount(state, { id, count }) {
      const item = state.cart.find((i) => i.id === id);
      item.count = count;
    },
    removeItemFromCart(state, id) {
      state.cart = state.cart.filter((i) => i.id !== id);
    },
    emptyCart(state) {
      state.cart = [];
    },
    addOrder(state, order) {
      state.orders.push(order);
    },
  },
  getters: {
    getItemByID(state) {
      return (id) => state.items.find((i) => i.id === id);
    },
    getItems(state) {
      return state.items;
    },
    getFromCartByID(state) {
      return (id) => state.cart.find((i) => i.id === id) || false;
    },
    getCart(state) {
      return state.cart;
    },
    getCount(state) {
      return state.cart.reduce((previousValue, i) => previousValue + i.count, 0);
    },
    totalPrice(state) {
      return state.cart.reduce((previousValue, i) => previousValue + i.count * i.price, 0);
    },
  },
  actions: {
    addToCart({ getters, commit }, id) {
      const item = getters.getItemByID(id);
      const itemInCart = getters.getFromCartByID(id);
      if (itemInCart) {
        itemInCart.count += 1;
        commit('setItemCount', { id: itemInCart.id, count: itemInCart.count });
      } else {
        commit('addItemToCart', { ...item, count: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(getters.getCart));
    },
    removeFromCart({ getters, commit }, id) {
      const itemInCart = getters.getFromCartByID(id);
      if (itemInCart.count > 1) {
        itemInCart.count -= 1;
        commit('setItemCount', { id: itemInCart.id, count: itemInCart.count });
      } else {
        commit('removeItemFromCart', itemInCart.id);
      }
      localStorage.setItem('cart', JSON.stringify(getters.getCart));
    },
    updateEmailAction({ commit, state }, value) {
      commit('updateEmail', value);
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    },
    updateNameAction({ commit, state }, value) {
      commit('updateName', value);
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    },
    updateAgeAction({ commit, state }, value) {
      commit('updateAge', value);
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    },
    addOrder({ commit, getters, state }) {
      const order = {
        id: nanoid(),
        items: [...state.cart],
        totalPrice: getters.totalPrice,
        date: Date.now().toString(),
      };
      commit('addOrder', order);
      commit('emptyCart');
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  modules: {},
});
