// as const makes an immutable array in typescript so you cannot push
// it also makes it type safe to not push or do something funny like that
const reallyConst = [1, 2, 3] as const;

interface Cat {
  readonly name: string;
  breed: string;
}

// this makes it so that the name is not reassinable or readonly
type ReadonlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): ReadonlyCat {
  return {
    name,
    breed,
  };
}

const usu = makeCat("Usul", "Tabby");

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 40; for example is not allowed
