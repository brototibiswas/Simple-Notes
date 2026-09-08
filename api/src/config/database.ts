import { Sequelize } from "sequelize-typescript";
import path from "path";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: "postgres",
  logging: false, // set to console.log to see generated SQL, useful while learning
  // Every model class under src/models is registered automatically, so a new
  // model only needs its @Table decorator - no manual list to keep in sync.
  // __dirname is dist/config once compiled, which is why this is relative.
  models: [path.join(__dirname, "..", "models")],
  // Default matching is exact, so Task.model.ts would have to export a member
  // literally named "Task.model". Drop the ".model" suffix and compare
  // case-insensitively instead: task.model.ts exports class Task.
  modelMatch: (filename, member) =>
    filename.replace(/\.model$/i, "").toLowerCase() === member.toLowerCase(),
});

export default sequelize;
