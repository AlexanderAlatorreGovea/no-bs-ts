// you can replace the string with an any Type so replace string w/ T

function simpleTState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;

  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}
