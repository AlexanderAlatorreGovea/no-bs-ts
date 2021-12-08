interface Database {
  get(id: string): string;
  set(id: string, value): void;
}

interface Persistance {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistance {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new PersistentMemoryDB();
myDB.set("foo", "bar");
myDB.get("foo");
const saved = myDB.saveToString();
console.log(myDB);

const myDB2 = new PersistentMemoryDB();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"));
