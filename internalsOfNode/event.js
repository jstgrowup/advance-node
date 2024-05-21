// node myFile.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];
// new timers , tasks,oprtaions are recorded from myFIle running
myFile.runContents();
function shouldContinue() {
  // check one : any pending settimeout,setinterval,setimmediate?
  // check two : any pending  OS tasks?(Like server listening to port)
  // check three : any pending long running operations (fs module function call)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}
// entire body executes in one tick
while (shouldContinue()) {
  // 1) Node looks at pending timers and sees if any functions are ready to be called settimeout and setinterval
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  // 3) Pause Execution continue when
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete
  // 4) look at pendingTimers call any setImmediate
  // 5) handle any close "events"
}

// exit back to terminal
