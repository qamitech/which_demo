import { Given, When, Then } from '@wdio/cucumber-framework';

import TelevisionReviewsPage from '../pageobjects/television-reviews.page';

const pages = {
    television_reviews: TelevisionReviewsPage
}

Given(/^I navigate to (\w+) page$/, async (page) => {  
    await pages[page].open()
});

When(/^I click to (?:expand|collapse) (.*) filter$/, async (filterName) => {
    await TelevisionReviewsPage.getFilter(filterName).click()
});

Then(/^(.*) filter should be in expanded state$/, async (filterName) => {
    await expect(TelevisionReviewsPage.getFilter(filterName).getAttribute('aria-expanded')).toBeTruthy
});

Then(/^(.*) filter should be in collapsed state$/, async (filterName) => {
    await expect(TelevisionReviewsPage.getFilter(filterName).getAttribute('aria-expanded')).toBeFalsy
});

