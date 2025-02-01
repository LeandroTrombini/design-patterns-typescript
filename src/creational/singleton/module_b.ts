import { MyDatabaseModule } from "./db/my-database-module";
import { myDatabaseClassic as myDatabaseClassicA } from './module_a'

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: "Brad Sympson", age: 30 });
myDatabaseClassic.add({ name: "Clark Hope", age: 25 });
myDatabaseClassic.add({ name: "Janice Hendrix", age: 20 });
myDatabaseClassic.show();
