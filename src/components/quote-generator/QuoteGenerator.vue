<template>
  <base-card v-if="!show">
    <transition name="fade">
      <div class="quote-container" id="quote-container">
        <!-- Quote -->
        <div class="quote-text">
          <i class="fas fa-quote-left"></i>
          <span id="quote" :class="addLongQuoteClass">{{ quote }}</span>
        </div>
        <!-- Author -->
        <div class="quote-author">
          <span id="author">{{ quoteAuthor }}</span>
        </div>
        <!-- Buttons -->
        <button-container
          @twitter-btn="tweetQuote"
          @new-quote-btn="getQuote"
        ></button-container>
      </div>
    </transition>
  </base-card>
  <teleport to="body" v-else>
    <base-card>
      <loader></loader>
    </base-card>
  </teleport>
</template>

<script>
import ButtonContainer from "./ButtonContainer.vue";
export default {
  components: {
    ButtonContainer,
  },
  data() {
    return {
      quote: "",
      quoteAuthor: "",
      show: false,
      longQuote: false,
    };
  },
  computed: {
    addLongQuoteClass() {
      return {
        "long-quote": this.longQuote,
      };
    },
  },

  methods: {
    getQuote() {
      const apiUrl =
        "https://type.fit/api/quotes/?method=getQuote&lang=en&format=json";
      this.show = true;
      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          let number = Math.floor(Math.random() * data.length);
          const randomQuoteAuthor = data[number].author;
          const randomQuoteText = data[number].text;
          this.quote = randomQuoteText;
          this.checkQuoteLength();
          if (!randomQuoteAuthor) {
            this.quoteAuthor = "Unknown";
          } else {
            this.quoteAuthor = randomQuoteAuthor;
          }
          this.show = false;
        })
        .catch((error) => {
          error = "Falied to fetch data - please try again later";
        });
    },
    tweetQuote() {
      const quote = this.quote;
      const author = this.quoteAuthor;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
      window.open(twitterUrl, "_blank");
    },
    checkQuoteLength() {
      if (this.quote.length > 120) {
        this.longQuote = true;
      } else {
        this.longQuote = false;
      }
    },
  },
  mounted() {
    this.getQuote();
  },
};
</script>

<style scoped>
.quote-container {
  width: auto;
  max-width: 900px;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
}

.quote-text {
  font-size: 2.75rem;
}

.long-quote {
  font-size: 2rem;
}

.fa-quote-left {
  font-size: 4rem;
}

.quote-author {
  margin-top: 15px;
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
}
</style>