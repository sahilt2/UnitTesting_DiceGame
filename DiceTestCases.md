# Test cases for Dice

## **constructor**

- initializes the dice with upper bound that is passed as a parameter
- if no uppper bound is given, the default upper bound will be 6
- initializes the dot count to 0

- if upper bound is not and not an integer, throw an exception
  `upper bound must be an integer`

- if the upper bound is not between 2 and 20, an exception is thrown:
  - upper bound >20: `upper bound too big`
  - upper bound <2: `upper bound is too small`

### Test cases for constructor

1. Create a dice with no upper bound given
   initializes a dice with dot count between 1 and 6

   - maximumValue is 6
   - minimumValue is 1
   - dots count is 0

2. Create a dice with upper bounds 2-20

   - maximumValue is upper bound
   - minimumValue is 1
   - dots is zero

3. Test the exceptions
   - 0 throws `upper bound too small`
   - 1 throws `upper bound too small`
   - -1 throws `upper bound too small`
   - -10 throws `upper bound too small`
   - 21 throws `upper bound too big`
   - 'a' throws `upper bound must be an integer`
   - 2.5 throws `upper bound must be an integer`

### Test cases for **roll**

- rolls the dice
- when rolled, the dot count will become a random number between 1 and upper bound
- returns nothing

- create dice with no uppper bound given

  - if not rolled , dots is 0 ( Optional, is tested in another test)
  - when rolled, the dots is
    - greater than or equal to 1
    - less than or equal to 6

- create dice with upper bound 20 (or 2 - 20)
  - greater than or equal to 1
  - less than or equal to upper bound

### Test cases for **toString**

- returns dot count as a string (text). For example: `'4'`
- if dice hasn't been rolled yet, returns a text `'Not rolled yet'`

- In both cases create a new dice (no uppper bound given)
  - roll the dice. Compare resulting text with dots converted to text
  - don't roll the dice. Compare result to `'Not rolled yet'`
