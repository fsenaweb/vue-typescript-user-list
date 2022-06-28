<template>
  <HeaderUser />
  <BodyUser :users="users" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderUser from '@/components/HeaderUser.vue'
import BodyUser from "@/components/BodyUser.vue";
import {User} from "@/types/Users";

const users = ref<User[]>([])

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => {
        users.value = result
      })
})

</script>

<style lang="scss">

</style>
