import { app } from "./src/app";
const PORT = 8000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`app is listening on PORT ${PORT}`);
});
