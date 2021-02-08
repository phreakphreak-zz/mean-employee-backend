const app = require("./app");
require("./services/database/index");

app.listen(app.get("port"), () => {
  console.log(`server running on http://localhost:${app.get("port")}`);
});
