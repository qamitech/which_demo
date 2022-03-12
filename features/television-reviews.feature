@reviews
Feature: Television Reviews

  @automated
  Scenario Outline: Collapse/Expand filters
    As an anonymous user, I should be able to collapse and expand the filters. By default an active filter should be expanded

    Given I navigate to television_reviews page
    Then '<filter>' filter should be in expanded state
    When I click to collapse '<filter>' filter
    Then '<filter>' filter should be in collapsed state
    When I click to expand '<filter>' filter
    Then '<filter>' filter should be in expanded state
    Examples:
      | filter |
      | Brands |
      | Price  |

  @manual
  Scenario: Select a filter
    Given I navigate to television reviews page
    When I click to expand 'Brands' filter
    And I click on 'Samsung' in 'Brands' filter
    Then I should land on page '/reviews/televisions/samsung/brand'

  @manual
  Scenario: Apply sorting to search results
    Given I navigate to television reviews page
    When I select sort option 'Price (low to high)'
    Then the page url should get updated with sort parameter 'sortBy=PRICE_ASC'
    And the results should get sorted by 'price_low_to_high'

