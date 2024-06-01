# Clustering

Request==> (Node server) ==> Response
cluester manager doesnt execute any kindof logic
cluster manager
Node server(single thread) Node server(single thread) Node server(single thread)

## What usually happens

Run node index.js ==> index.js ==> Node instance

## With clustering

Run node index.js ==> index.js--> worker instance ==> cluster manager(for the first time the node runs the file it creates the cluster manager) ==> cluster.fork()
