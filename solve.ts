type Operator = "+" | "-" | "*" | "/";

export type Operation = {
  lhs: number;
  rhs: number;
  operator: Operator;
  result: number;
};

type OperationFunction = (lhs: number, rhs: number) => Operation;

const operationFunctions: OperationFunction[] = [
  (lhs, rhs) => ({ lhs, rhs, operator: "+", result: lhs + rhs }),
  (lhs, rhs) => ({ lhs, rhs, operator: "-", result: lhs - rhs }),
  (rhs, lhs) => ({ lhs, rhs, operator: "-", result: lhs - rhs }),
  (lhs, rhs) => ({ lhs, rhs, operator: "*", result: lhs * rhs }),
  (lhs, rhs) => ({ lhs, rhs, operator: "/", result: lhs / rhs }),
  (rhs, lhs) => ({ lhs, rhs, operator: "/", result: lhs / rhs }),
];

export function solve(
  target: number,
  numbers: number[]
): Operation[] | undefined {
  const seen = new Set<string>();
  const queue = [{ numbers, operations: [] as Operation[] }];
  while (queue.length) {
    const { numbers, operations } = queue.shift()!;
    if (numbers.includes(target)) {
      return operations;
    }
    for (let i = 0; i < numbers.length; i++) {
      const lhs = numbers[i];
      const numbersWithoutLHS = numbers.toSpliced(i, 1);
      for (let j = 0; j < numbersWithoutLHS.length; j++) {
        const rhs = numbersWithoutLHS[j];
        for (const operationFunction of operationFunctions) {
          const operation = operationFunction(lhs, rhs);
          if (!Number.isInteger(operation.result) || operation.result < 0) {
            continue;
          }
          const newNumbers = numbersWithoutLHS.with(j, operation.result);
          const hash = newNumbers.toSorted().join();
          if (seen.has(hash)) {
            continue;
          }
          seen.add(hash);
          queue.push({
            numbers: newNumbers,
            operations: [...operations, operation],
          });
        }
      }
    }
  }
  // return [
  //   { lhs: 25, rhs: 3, operator: "*", result: 75 },
  //   { lhs: 75, rhs: 10, operator: "+", result: 85 },
  //   { lhs: 85, rhs: 1, operator: "-", result: 84 },
  // ];
}
