// this is for key value pairs and it allows us to get elements from an object
const pluck = <DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] => {
  return items.map((item) => item[key]);
};

const dogs = [
  { name: "mimi", age: 12 },
  { name: "lg", age: 132 },
];

console.log(pluck(dogs, "age"));

// & extends the properties of the interface

interface BaseEvent {
  time: number;
  user: string;
}
interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  productID: "foo",
  user: "baz",
  quantity: 1,
  time: 10,
});
sendEvent("checkout", { time: 20, user: "bob" });
