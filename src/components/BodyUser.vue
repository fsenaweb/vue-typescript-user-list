'<template>
  <div class="order-buttons">
    <button @click="setOrder('asc')">Ascending order</button>
    <button @click="setOrder('desc')">Descending order</button>
  </div>
  <div class="user-list">
    <transition-group name="user-list" tag="ul">
      <li v-for="user in orderedUser" :key="user">
        <h1>{{ user.name }} - {{ user.username }}</h1>
        <hr/>
        <div class="web">{{ user.email }} - {{ user.website }}</div>
        <div class="address">
          <p>Company: {{ user.company.name }}</p>
          <p>Address: {{ user.address.street }}, {{ user.address.suite }} - {{ user.address.zipcode }} -
            {{ user.address.city }}</p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import {defineProps, PropType, computed, ref} from 'vue'
import {User} from "@/types/Users";

const order = ref('')

const props = defineProps({
  users: {
    type: Array as PropType<User[]>,
    required: true
  }
})

const orderedUser = computed(() => {
  return [...props.users].sort((a: User, b: User) => {
    if(order.value === 'asc') {
      return a.name > b.name ? 1 : -1
    } else {
      return a.name < b.name ? 1 : -1
    }

  })
})

const setOrder = (value: string) => {
  order.value = value
}



</script>

<style lang="scss" scoped>
.order-buttons {
  max-width: 1024px;
  text-align: center;
  margin: 20px auto;
}

button {
  margin: 0 10px;
  color: #a1a1a1;
  border: 3px solid #a1a1a1;
  background: #f2f2f2;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.user-list {
  max-width: 1024px;
  margin: 30px auto;
}

.user-list ul {
  padding: 0
}

.user-list li {
  list-style-type: none;
  background: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 6px;
  box-shadow: 2px 2px 2px #bbb;

  h1 {
    font-size: 20px;
    padding: 0;
    margin: 0;
  }
}

.web {
  display: block;
  color: #888;
}

.user-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}

.address {
  background: #f9f9f9;
  padding: 20px;
  margin: 20px 0;
  border-radius: 6px;

  p {
    padding: 0;
    margin: 0;
  }
}

.user-list-move {
  transition: all 1s;
}

hr {
  border: none;
  height: 1px;
  border-top: 1px dashed #8c8b8b;
}

</style>
'
