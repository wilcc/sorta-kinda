const {
  firstNumberIsLess,
  secondNumberIsLess,
  trueIsFirst,
  truesFirst,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
} = require('./main.js')


describe('firstNumberIsLess', () => {
  it(`returns a negative number if the first number is less`, () => {
    expect(firstNumberIsLess(3, 5) < 0).toBe(true)
    expect(firstNumberIsLess(1, 7) < 0).toBe(true)
  })

  it(`returns a positive number if the first number is greater`, () => {
    expect(firstNumberIsLess(6, 5) > 0).toBe(true)
    expect(firstNumberIsLess(8, 2) > 0).toBe(true)
  })

  it(`returns 0 if the numbers are equal`, () => {
    expect(firstNumberIsLess(6, 6)).toBe(0)
    expect(firstNumberIsLess(8, 8)).toBe(0)
  })
})

describe('secondNumberIsLess', () => {
  it(`returns a negative number if the second number is less`, () => {
    expect(secondNumberIsLess(6, 5) < 0).toBe(true)
    expect(secondNumberIsLess(8, 2) < 0).toBe(true)
  })

  it(`returns a positive number if the second number is greater`, () => {
    expect(secondNumberIsLess(3, 5) > 0).toBe(true)
    expect(secondNumberIsLess(1, 7) > 0).toBe(true)
  })

  it(`returns 0 if the numbers are equal`, () => {
    expect(secondNumberIsLess(6, 6)).toBe(0)
    expect(secondNumberIsLess(8, 8)).toBe(0)
  })
})

describe('firstNameIsFirstAlphabetically', () => {
  it(`returns a positive number if the second name is first alphabetically`, () => {
    expect(firstNameIsFirstAlphabetically('Smeagol', 'Lauren') > 0).toBe(true)
    expect(firstNameIsFirstAlphabetically('Pak', 'Mesuara') > 0).toBe(true)
  })

  it(`returns a negative number if the first name is first alphabetically`, () => {
    expect(firstNameIsFirstAlphabetically('Colin', 'Lauren') < 0).toBe(true)
    expect(firstNameIsFirstAlphabetically('Lauren', 'Zanzibar') < 0).toBe(true)
  })

  it(`returns 0 if the names are the same`, () => {
    expect(firstNameIsFirstAlphabetically('Colin', 'Colin')).toBe(0)
    expect(firstNameIsFirstAlphabetically('Rohan', 'Rohan')).toBe(0)
  })
})

describe('firstLastNameIsFirstAlphabetically', () => {
  it(`returns a positive number if the second name's last name is first alphabetically`, () => {
    expect(firstLastNameIsFirstAlphabetically('Smeagol Smith', 'Lauren Bacall') > 0).toBe(true)
    expect(firstLastNameIsFirstAlphabetically('Mesuara Kaleziq', 'Pak Chu') > 0).toBe(true)
  })

  it(`returns a negative number if the first name's last name is first alphabetically`, () => {
    expect(firstLastNameIsFirstAlphabetically('Colin Jaffe', 'Lauren Smythe') < 0).toBe(true)
    expect(firstLastNameIsFirstAlphabetically('Lauren Bacall', 'Adam Zanzibar') < 0).toBe(true)
  })

  it(`returns 0 if the names are the same`, () => {
    expect(firstLastNameIsFirstAlphabetically('Colin Jaffe', 'Colin Jaffe')).toBe(0)
    expect(firstLastNameIsFirstAlphabetically('Rohan Battle', 'Rohan Battle')).toBe(0)
  })
})

describe('trueIsFirst', () => {
  it(`returns a negative number if the first boolean is true and the second false`, () => {
    expect(trueIsFirst(true, false) < 0).toBe(true)
  })

  it(`returns a positive number if the first boolean is false and the second true`, () => {
    expect(trueIsFirst(false, true) > 0).toBe(true)
  })

  it(`returns 0 if the booleans are equal`, () => {
    expect(trueIsFirst(true, true)).toBe(0)
    expect(trueIsFirst(false, false)).toBe(0)
  })
})

describe('sortByNumberAscending', () => {
  it(`sorts numbers in ascending order`, () => {
    const nums = [
      5,
      3,
      8,
      1,
    ];

    const sorted = [
      1,
      3,
      5,
      8,
    ];

    expect(sortByNumberAscending(nums)).toEqual(sorted);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers1 = [1, 2, 3, 4];
    const numbers1 = [1, 2, 3, 4];
    const originalNumbers2 = [-5, 101, 0, 32.5];
    const numbers2 = [-5, 101, 0, 32.5];
    sortByNumberAscending(numbers1)
    sortByNumberAscending(numbers2)
    expect(numbers1).toEqual(originalNumbers1);
    expect(numbers2).toEqual(originalNumbers2);
  })
})

describe('sortByNumberDescending', () => {
  it(`sorts numbers in descending order`, () => {
    const nums = [
      5,
      3,
      8,
      1,
    ];

    const sorted = [
      8,
      5,
      3,
      1,
    ];

    expect(sortByNumberDescending(nums)).toEqual(sorted);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers1 = [1, 2, 3, 4];
    const numbers1 = [1, 2, 3, 4];
    const originalNumbers2 = [-5, 101, 0, 32.5];
    const numbers2 = [-5, 101, 0, 32.5];
    sortByNumberDescending(numbers1)
    sortByNumberDescending(numbers2)
    expect(numbers1).toEqual(originalNumbers1);
    expect(numbers2).toEqual(originalNumbers2);
  })
})

describe('truesFirst', () => {
  it(`sorts the array by trues first`, () => {
    expect(truesFirst([true, false, true])).toEqual([true, true, false])
    expect(truesFirst([false, true, false, true])).toEqual([true, true, false, false])
  })

  it(`doesn't modify the original array`, () => {
    const originalBools = [false, true, false, true];
    const bools = [false, true, false, true];
    truesFirst(bools)
    expect(bools).toEqual(originalBools);
  })
})

describe('sortByNameAscending', () => {
  it(`sorts names by name ascending`, () => {
    const names = [
      'Colin Jaffe',
      'Anthony DeRosa',
      'Pak Chu',
      'Mesuara Kaleziq',
    ];

    const sorted = [
      'Anthony DeRosa',
      'Colin Jaffe',
      'Mesuara Kaleziq',
      'Pak Chu',
    ];

    expect(sortByNameAscending(names)).toEqual(sorted);
  })

  it(`doesn't modify the original array`, () => {
    const originalNames = [
      'Colin Jaffe',
      'Anthony DeRosa',
      'Pak Chu',
      'Mesuara Kaleziq',
    ];

    const names = [
      'Colin Jaffe',
      'Anthony DeRosa',
      'Pak Chu',
      'Mesuara Kaleziq',
    ];

    sortByNameAscending(names)
    expect(names).toEqual(originalNames);
  })
})

describe('sortByLastNameAscending', () => {
  it(`sorts names by last name ascending`, () => {
    const names = [
      'Colin Jaffe',
      'Anthony DeRosa',
      'Pak Chu',
      'Mesuara Kaleziq',
    ];

    const sorted = [
      'Pak Chu',
      'Anthony DeRosa',
      'Colin Jaffe',
      'Mesuara Kaleziq',
    ];

    expect(sortByLastNameAscending(names)).toEqual(sorted);
  })

  it(`doesn't modify the original array`, () => {
    const originalNames = [
      'Colin Jaffe',
      'Anthony DeRosa',
      'Pak Chu',
      'Mesuara Kaleziq',
    ];

    const names = [
      'Colin Jaffe',
      'Anthony DeRosa',
      'Pak Chu',
      'Mesuara Kaleziq',
    ];

    sortByLastNameAscending(names)
    expect(names).toEqual(originalNames);
  })
})
