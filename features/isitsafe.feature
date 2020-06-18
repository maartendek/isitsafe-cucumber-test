Feature: Is it safe?

  As a scared web developer, I want to be able to 
  know wether it is safe to go outside or not

  Scenario Outline: Attempting to go out; <newssite>
    Given the browser is at the "<newssite>" website
    When the user tries to skim the headlines
    Then "<newssite>" will tell you if it's safe to go out

    Examples:
      | newssite |
      | nos.nl   |
      | nu.nl    |
