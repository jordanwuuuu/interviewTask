
1.

2.

```javascript

function highlightPrices() {
  const priceSelector = ".mErEH";

  const arrayOfPriceElements = Array.from(
    document.querySelectorAll(priceSelector)
  );
  const arrayOfPrices = arrayOfPriceElements.map((element, index) => {
    return {
      [index]: parseFloat(
        element.textContent.replace(/\$|€|£/g, "").replace(/,/g, "")
      ),
    };
  });

  const arrayOfIndexOverTwenty = arrayOfPrices.filter((elementObj, index) => {
    return elementObj[index] > 20;
  });
  const indexOfElementsOverTwenty = arrayOfIndexOverTwenty.map((objs) => {
    return Object.keys(objs)[0];
  });
  const arrayOfElementsOverTwenty = indexOfElementsOverTwenty.map(
    (overTwentyIndex) => {
      return arrayOfPriceElements[overTwentyIndex];
    }
  );
  arrayOfElementsOverTwenty.forEach((element) => {
    element.style.color = "red";
  });
}

setInterval(() => highlightPrices(), 1000);


```

3. 'You're a step away from rediscovering your style' Is not available so I have replaced the first subtitle with the style instead.



```javascript
const STYLE_BUTTON_SELECTOR = '[data-testid*="style-option"]';
const CHOSEN_STYLE_SELECTOR =
  "#root > div > div > div > div.css-175oi2r.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-1sncvnh.r-2eszeu > div > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(3)";
const SUBTITLE_SELECTOR =
  "#root > div > div > div > div.css-175oi2r.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-1sncvnh.r-2eszeu > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)";
const KEY_NAME = "styleSelected";

(function main() {
  if (window.location.href === "https://lookiero.co.uk/user/quiz/styles") {
    const allStyleOptionsArray = document.querySelectorAll(
      STYLE_BUTTON_SELECTOR
    );
    allStyleOptionsArray.forEach((element) => {
      element.addEventListener("click", scrapeStyle);
    });
  }
  if (window.location.href === "https://lookiero.co.uk/user/quiz/register") {
    const styleFromLocalStorage = localStorage.getItem(KEY_NAME);
    document.querySelector(
      SUBTITLE_SELECTOR
    ).textContent = `We’ll be carefully selecting your ${styleFromLocalStorage} package.`;
  }
})();

function scrapeStyle() {
  setInterval(() => {
    const styleChosen = document.querySelector(
      CHOSEN_STYLE_SELECTOR
    )?.innerText;
    const splitStyle = styleChosen.split("\n");
    const styleText = `${splitStyle[1]} ${splitStyle[2] ? splitStyle[2] : ""}`;
    localStorage.setItem(KEY_NAME, styleText);
  }, 1000);
}



```



4. a) scrape from basket mini cart and checkout
   b) datalayer
   `dataLayer[0].basketProducts[0].price`
   `dataLayer[0].basketProducts[0].quantity`
   for each product
