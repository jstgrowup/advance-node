// node myFile.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];
// new timers , tasks,oprtaions are recorded from myFIle running
myFile.runContents();
function shouldContinue() {
  // check one : any pending settimeout,setinterval,setimmediate?
  // check two : any pending  OS tasks?(Like server listening to port)
  // check three : any pending long running operations
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}
// entire body executes in one tick
while (shouldContinue()) {
  //  Node looks at pending timers and sees if any functions are ready to be called
  //  Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  //  pause execution
}
// exit back to terminal
