// Decorators
import { performance } from "perf_hooks";

function timing() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const value = descriptor.value;
    descriptor.value = async function (args: any[]) {
      const start = performance.now();
      const output = await value.apply(this, args);
      const end = performance.now();
      console.log(end - start);
      return output;
    };
  };
}

// Client class

const delay = <T>(time: number, data: T): Promise<T> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, time)
  );

class Users {
  @timing()
  async getUsers() {
    return await delay(1000, []);
  }

  @timing()
  async getUser(id: number) {
    return await delay(50, {
      id: `user:${id}`,
    });
  }
}

(async function () {
  const users = new Users();

  const user = await users.getUser(22);
  console.log(`Got ${JSON.stringify(user)}`);

  await users.getUser(42);

  await users.getUsers();
})();
