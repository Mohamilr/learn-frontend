const view = document.querySelector("#views");
const price = document.querySelector(".price");
const duration = document.querySelector("#duration");
const range = document.querySelector("#range");
const durationChange = document.querySelector("#change");
const discount = document.querySelector(".discount");

let pageviews;
let prices = parseInt(price.textContent.substr(1, 3));

function pageViewsValue(value) {
  switch (value) {
    case "2":
      pageviews = "10K";
      prices = 8;
      break;
    case "4":
      pageviews = "50K";
      prices = 12;
      break;
    case "6":
      pageviews = "100K";
      prices = 16;
      break;
    case "8":
      pageviews = "500K";
      prices = 24;
      break;
    case "10":
      pageviews = "1M";
      prices = 36;
      break;
    default:
      return value;
  }
}

range.addEventListener("input", () => {
  pageViewsValue(range.value);
  view.textContent = `${pageviews} PAGEVIEWS`;
  if (durationChange.checked) {
    prices = (25 / 100) * prices;
  }
  price.textContent = `$${prices}.00`;
});

durationChange.addEventListener("change", () => {
  if (durationChange.checked) {
    prices = (25 / 100) * prices;
    duration.textContent = '/year';
  } else {
    prices = (prices * 100) / 25;
    duration.textContent = '/month';
  }
  price.textContent = `$${prices}.00`;
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 643) {
    discount.textContent = "25%";
  } else {
    discount.textContent = "25% discount";
  }
});
