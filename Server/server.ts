import { app } from "./app";

require("dotenv").config();

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
})