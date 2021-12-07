type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

add3DCoordinate([1, 100, 0], [10, 20, 39]);

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;

  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

//this is essentially the setState and the getState
const [str1getter, str1setter] = simpleStringState("hello");
