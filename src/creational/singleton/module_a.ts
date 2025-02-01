import { MyDatabaseModule } from "./db/my-database-module";

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: "John Doe", age: 30 });
myDatabaseClassic.add({ name: "Jane Doe", age: 25 });
myDatabaseClassic.add({ name: "Alice", age: 20 });


export { myDatabaseClassic }; 