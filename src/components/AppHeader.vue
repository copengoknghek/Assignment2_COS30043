<template>
  <header class="header">
    <div class="container">
      <h1 class="text-white">Insight Hire</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
