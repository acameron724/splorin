const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/splorin_development",
      test: "postgres://postgres:postgres@localhost:5432/splorin_test",
      e2e: "postgres://postgres:postgres@localhost:5432/splorin_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
