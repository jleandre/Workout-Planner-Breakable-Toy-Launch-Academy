const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/workout-planner-breakable-toy_development",
      test: "postgres://postgres:postgres@localhost:5432/workout-planner-breakable-toy_test",
      e2e: "postgres://postgres:postgres@localhost:5432/workout-planner-breakable-toy_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
