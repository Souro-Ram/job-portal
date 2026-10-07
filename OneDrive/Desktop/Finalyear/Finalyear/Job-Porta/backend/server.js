import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dli8kzrac",
  api_key: "597648424676685",
  api_secret: "W3clX92VJlJkvTfzEMef_sdm6Wc",
});

const port=4000
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
