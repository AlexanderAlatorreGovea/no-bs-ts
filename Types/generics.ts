// you can replace the string with an any Type so replace string w/ T
// every place we use T becomes the type we pass to it
function simpleTState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;

  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [stateGetter, stateSetter] = simpleTState(1);
console.log(stateGetter());

const [state1Getter, state2Setter] = simpleTState("alex");
console.log(state1Getter());

// <string | null> overwrites the values
const [state2Getter, state3Setter] = simpleTState<string | null>(null);
console.log(state2Getter());
state3Setter("ssdfa");
console.log(state2Getter());

// ranker
// if you don't have access to RankItem outside just add a generic Rank<RankItem>

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
[];

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number) {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  { name: "Boulvasor", hp: 20 },
  { name: "Charizard", hp: 23 },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks)