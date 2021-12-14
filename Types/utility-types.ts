
interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}
// Partial makes things optional in MyUser
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overwrites: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overwrites,
  };
};

console.log(
  merge(
    {
      name: "jack",
      id: 2,
      email: "email@hotmail.com",
    },
    {
      id: 3,
    }
  )
);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

// Maps or records
// records is for objects the first argument is a string that will allow
//us to grab an argument and the second element argument MyUser is the data

type UserWithoutId = Omit<MyUser, "id">;

// MyUser["id"] says that everytime my number or string changes, this will change
const mapId = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
  return users.reduce((acc, record) => {
    const { id, ...other } = record;

    return {
      ...acc,
      [id]: other,
    };
  }, {});
};

console.log(
  mapId([
    {
      id: 2,
      name: "baz",
    },
    {
      id: 3,
      name: "bar",
    },
  ])
);
