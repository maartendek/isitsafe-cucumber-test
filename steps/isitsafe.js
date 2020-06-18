import { Given, When, Then } from "cucumber";
import assert from 'assert';

Given(/^the browser is at the "(.*)" website$/, (site) => {
  browser.url(site);
});

When("the user tries to skim the headlines", () => {
  console.log('browsing');
});

Then(/^"(.*)" will tell you if it\'s safe to go out$/, (site) => {

  $('body').waitForDisplayed();

  let safe = true;
  const headlines = $$("h1,li h2,li .item-title span");

  console.log(headlines.length + ' headlines');

  headlines.forEach(headline => {
    const headlineText = headline.getText().toLowerCase();
    if (headlineText && headlineText.includes('corona')) {
      safe = false;
    }
  });

  assert(
    true === safe,
    `${site} says no`
  )

  browser.pause(1000);
});