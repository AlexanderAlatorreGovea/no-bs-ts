function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type MutationFunction = (v: number) => number;

function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
  return numbers.map(mutate);
}

type AdderFunction = (val: number) => number;

function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
