import Page from './base.page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TelevisionReviewsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get categoryHeader () {
        this.findByTestID('category-header')
    }

    get breadCrumb () {
        this.findByTestID('breadcrumb')
    }

    /**
     * method to select a filter element based on title provided
     * @param filterName name of the filter element to interact with
     */
    getFilter (filterName) {
        return $(`//button[span[text()=${filterName}]]`);
    }

    /**
     * method to open the page based on sub-path
     */
    open () {
        return super.open('/reviews/televisions');
    }
}

export default new TelevisionReviewsPage();
