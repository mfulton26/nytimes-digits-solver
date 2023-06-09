import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { solve } from "./solve.ts";

function expect(target: number, numbers: number[]) {
  return function () {
    const operations = solve(target, numbers);
    assertEquals(operations?.at(-1)?.result, target);
  };
}

Deno.test("2023-06-09:pz0", expect(76, [10, 2, 1, 3, 4, 25]));
Deno.test("2023-06-09:pz1", expect(131, [9, 7, 25, 2, 11, 3]));
Deno.test("2023-06-09:pz2", expect(271, [3, 4, 6, 7, 8, 11]));
Deno.test("2023-06-09:pz3", expect(312, [4, 7, 8, 9, 14, 20]));
Deno.test("2023-06-09:pz4", expect(493, [9, 11, 14, 21, 23, 25]));
