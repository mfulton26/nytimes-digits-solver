import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { solve } from "./solve.ts";

const testCases = [
  { target: 84, numbers: [1, 3, 4, 5, 10, 25] },
  { target: 93, numbers: [1, 2, 3, 4, 5, 25] },
];

Deno.test("testCases", () => {
  for (const { target, numbers } of testCases) {
    const operations = solve(target, numbers);
    assertEquals(operations?.at(-1)?.result, target);
  }
});
