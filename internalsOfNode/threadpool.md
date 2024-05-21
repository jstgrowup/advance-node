## Can we use the threadpool for JS code or can only nodeJs functions use it?

- We can write custom JS that uses the threadpool

## What functions in node std library use the threadpool

- All fs module functions.Some crypto stuff . Depends on OS

## How does this threadpool stuff fit into the event loop?

- Tasks running in the threadpool are the 'pendingOperations' in our code example.
