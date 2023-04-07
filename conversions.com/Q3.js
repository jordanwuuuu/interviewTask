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
