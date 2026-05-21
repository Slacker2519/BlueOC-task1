const { stringLengthFrequency } = require("./task1.js");
let passed = 0;
let failed = 0;

function assert(description, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) {
    console.log(`✅ ${description}`);
    passed++;
  } else {
    console.error(`❌ ${description}`);
    console.error(`Expected: ${JSON.stringify(expected)}`);
    console.error(`Received: ${JSON.stringify(actual)}`);
    failed++;
  }
}

function runTests() {
  console.log("Running unit test for stringLengthFrequency\n");

  console.log("Basic wingle winner");
  assert(
    "Three 3-char words dominate -> return those strings",
    stringLengthFrequency(["cat", "dog", "bat", "elephant", "hi"]),
    ["cat", "dog", "bat"],
  );

  console.log("\nTie between two lengths");
  assert(
    "Length 2 and 3 tie - all four strings returned",
    stringLengthFrequency(["hi", "yo", "cat", "dog"]),
    ["hi", "yo", "cat", "dog"],
  );

  console.log("\nAll strings the same length");
  assert(
    "All length-5 -> entire array returned",
    stringLengthFrequency(["apple", "mango", "grape", "peach"]),
    ["apple", "mango", "grape", "peach"],
  );

  console.log("\nAll strings have different lengths (all tie at 1)");
  assert(
    "Every length appears once → entire array returned",
    stringLengthFrequency(["a", "ab", "abc", "abcd"]),
    ["a", "ab", "abc", "abcd"],
  );

  console.log("\nEmpty array");
  assert("Empty input -> empty output", stringLengthFrequency([]), []);

  console.log("\nSingle element");
  assert(
    "Only one string -> it is returned",
    stringLengthFrequency(["lantern"]),
    ["lantern"],
  );

  console.log("\nEmpty strings (length 0) tie with length-2 strings");
  assert(
    "Both empty strings and 2-char strings returned",
    stringLengthFrequency(["", "", "hi", "ok"]),
    ["", "", "hi", "ok"],
  );

  console.log("\nStrings with symbols and mixed-case");
  assert(
    "All four strings returned when lengths 6 and 2 tie",
    stringLengthFrequency(["hello!", "world!", "hi", "OK"]),
    ["hello!", "world!", "hi", "OK"],
  );

  console.log("\nLarge array, length-3 dominated");
  const large = [
    ...Array(50).fill("yes"),
    ...Array(30).fill("no"),
    ...Array(20).fill("maybe"),
  ];
  const result = stringLengthFrequency(large);
  assert("Only 'yes' strings returned (50 of them)", result.length, 50);
  assert(
    "Every returned string is 'yes'",
    result.every((s) => s === "yes"),
    true,
  );

  console.log("\nThree-way tie across length 1, 3, 5");
  assert(
    "All six strings returned when length 1, 3, 5 each appear twice",
    stringLengthFrequency(["a", "b", "cat", "dog", "hello", "world"]),
    ["a", "b", "cat", "dog", "hello", "world"],
  );

  console.log("\nOne length clearly loses and is filtered out");
  assert(
    "Only the 2-char strings are returned",
    stringLengthFrequency(["hi", "ok", "yo", "elephant"]),
    ["hi", "ok", "yo"],
  );

  console.log(`\n${"-".repeat(50)}`);
  console.log(`Results: ${passed} passed, ${failed} failed`);
  if (failed === 0) {
    console.log("All tests passed!");
  }
}

runTests();
