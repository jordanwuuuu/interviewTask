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
