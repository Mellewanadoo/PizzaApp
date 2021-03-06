import "./env";

export default {
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
  migrations: {
    directory: "migrations",
    tableName: "migrations",
  },
};
