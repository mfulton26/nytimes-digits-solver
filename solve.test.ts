import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { solve } from "./solve.ts";

function macro(t: Deno.TestContext) {
  const [targetText, numbersText] = t.name.split(":");
  const target = parseInt(targetText);
  const numbers = numbersText.split(",").map((text) => parseInt(text));
  const operations = solve(target, numbers);
  assertEquals(operations?.at(-1)?.result, target);
}

Deno.test("84:1,3,4,5,10,25", macro);
Deno.test("93:1,2,3,4,5,25", macro);
Deno.test("112:1,2,3,4,5,25", macro);
