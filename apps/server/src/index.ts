import app from "./app";

// Port 5050 used for the server within internal Docker network
const port: number = 5050;

// Start listening for traffic on the port
app.listen(port, (error: Error | undefined) => {
    if(!error)
        console.log(`Express app listening on port ${port}`);
    else
        console.log(`Error occurred, could not start server: ${error}`);
});