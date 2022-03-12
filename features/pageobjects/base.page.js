/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
     * define selectors using getter methods
     */
    get loadingEllipse(){
        return $('//*[contains(@class, "loaderSvg")]')
    }
    /**
    * method to open sub page of the page
    * @param pagePath path of the sub page (e.g. /path/to/page.html)
    */
    open (pagePath) {
        const openPage = browser.url(pagePath)
        // after opening the page, wait for loading ellipse to disappear
        if(this.loadingEllipse.isDisplayed()){
            this.loadingEllipse.waitForDisplayed({reverse : true})
        }
        return openPage
    }
    
    /** 
     * Finds element by data-testid attribute
     * @param testId data-testid attribute of page elements
    */
    findByTestID (testId) {
        return $(`//*[@data-testid="${testID}"]`)
    }

    /** 
     * Finds all elements by data-testid attribute
     * @param testId data-testid attribute of page elements
    */
    findAllByTestID (testId) {
        return $$(`//*[@data-testid="${testID}"]`)
    }
}
