import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { solve } from "./solve.ts";

Deno.test("84:1,3,4,5,10,25", () => {
  const target = 84;
  const operations = solve(target, [1, 3, 4, 5, 10, 25]);
  assertEquals(operations?.at(-1)?.result, target);
});

Deno.test("93:1,2,3,4,5,25", () => {
  const target = 93;
  const operations = solve(target, [1, 2, 3, 4, 5, 25]);
  assertEquals(operations?.at(-1)?.result, target);
});
