const quotes = [
  {
    quote:
      "그대는 인생을 사랑하는가? 그렇다면 시간을 낭비하지 말라, 시간이야말로 인생을 형성하는 재료이기 때문이다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "오직 남을 위해 산 인생만이 가치 있는 것이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "중요한 것은 사랑을 받는 것이 아니라 사랑을 하는 것이었다. 남을 위해 산 인생만이 가치 있는 것이다.",
    author: "윌리엄 서머셋 모옴",
  },
  {
    quote:
      "어려운 직업에서 성공하려면 자신을 굳게 믿어야 한다. 이것이 탁월한 재능을 지닌 사람보다 재능은 평범하지만 강한 투지를 가진 사람이 훨씬 더 성공하는 이유다.",
    author: "소피아 로렌",
  },
  {
    quote:
      "최선을 다하고 있다라고 말해봤자 소용없다. 필요한 일을 함에 있어서는 반드시 성공해야 한다.",
    author: "윈스턴 처칠",
  },
  {
    quote: "의심으로 가득 찬 마음은 승리로의 여정에 집중할 수 없다.",
    author: "아서 골든",
  },
  {
    quote: "나는 때를 놓쳤고, 그래서 지금은 시간이 나를 낭비하고 있는 거지.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote: "가장 큰 위험은 위험없는 삶이다.",
    author: "스티븐 코비",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
