# PM2

- It helps us to run and manage and monitor our nodejs application more efficiently and reliably
- PM2 is a daemon process manager that will help you manage and keep your application online

### features

1. Keep Apps Running: PM2 makes sure your apps stay running all the time. If an app crashes or stops, PM2 will automatically restart it.
2. Easy Deployment: You can start, stop, restart, and reload your apps with simple commands. This makes managing your applications much easier.
3. Load Balancing: PM2 can run multiple instances of your application to handle more traffic, distributing the load evenly.
4. Monitoring and Logs: PM2 provides tools to monitor your application's performance and view logs, so you can see how your app is doing in real-time.

- `npm install -g pm2`
- `pm2 start ${filename} -i`
  -i is for number of instances to create for you if you put 0 pm2 will figure out how man instances to create
  here its the number of logical cores that can be cerated its the number of physical cores \* number of threads that each can create
  lets say i have 2 cores and now each can open 2 thgreads so its 4 logical cores
- `pm2 list` to see the health of all the processes
- `pm2 monit` to monitor the health of the processes
- `pm2 delete ${filename}` it will kill all the processes
