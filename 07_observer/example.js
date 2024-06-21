const EventEmitter = require("events");

class NewsPublisher extends EventEmitter {
  publishNews(news) {
    console.log("Publishing news:", news);
    this.emit("newsPublished", news);
  }
}

// Creating a news publisher instance
const newsPublisher = new NewsPublisher();

// Subscribing the subscribers to the 'newsPublished' event
newsPublisher.on("newsPublished", (news) => {
  console.log("Subscriber 1 received news:", news);
});

newsPublisher.on("newsPublished", (news) => {
  console.log("Subscriber 2 received news:", news);
});

// Publishing news
newsPublisher.publishNews("Breaking: New discovery in science!");
