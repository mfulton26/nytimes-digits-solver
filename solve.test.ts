import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { solve } from "./solve.ts";

Deno.test("84:1,3,4,5,10,25", () => {
  const operations = solve(84, [1, 3, 4, 5, 10, 25]);
  assertEquals(operations?.[operations.length - 1].result, 84);
});
