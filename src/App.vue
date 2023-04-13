<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/departments">Departments</RouterLink>
    <RouterLink to="/employees">Employees</RouterLink>
  </nav>

  <RouterView />
</template>