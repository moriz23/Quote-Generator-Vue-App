<template>
  <div class="button-container">
    <base-button
      class="twitter-button"
      id="twitter"
      title="Tweet This!"
      @click="$emit('twitter-btn')"
    >
      <i class="fab fa-twitter"></i>
    </base-button>
    <base-button id="newQuote" @click="$emit('new-quote-btn')"
      >New Quote</base-button
    >
  </div>
</template>

<script>
export default {
  emits: ["twitter-btn", "new-quote-btn"],
};
</script>

<style scoped>
.button-container {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.twitter-button:hover {
  color: #38a1f3;
}
.fa-twitter {
  font-size: 1.5rem;
}
</style>