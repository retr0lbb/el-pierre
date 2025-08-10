import { App } from "./app";

App.listen({ port: 3333 }).then(() => {
	console.log("Server is running on http://localhost:3333");
});
