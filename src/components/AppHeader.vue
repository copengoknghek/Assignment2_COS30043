<template>
  <header class="header">
    <img src="../assets/header-banner.png" alt="Welcome to Insight Hire" class="header-banner" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
.header {
  padding: 0;
  margin: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header-banner {
  width: 100%;
  height: 200px;
  display: block;
  margin: 0;
  object-fit: cover;
}

.header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8rem;
  }
}
</style>
