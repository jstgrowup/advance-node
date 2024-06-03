### Big Image Upload Issues

1. Where do images get physically stored?
2. How do images _get_ to the place they should be stored?
3. How do we relate images to a particular blog post?

### Solution

1. Image ==> Express API ==> MongoDB
2. In HD attached to server
   - Image ==> Express API + Hard drive(our hosted server)
   - Image is stored in the hard drive of our server
   - but the issue is when we have multiple servers than the server A sont get the files of server B so its a very bas approach
3. Outsite Data Store(recommended approach)
   - Image ==> express API ==> AWSS3/Azure File Storage/Google Cloud storage
   - Express API ==> Amazon S3

### Upload Process Issues

1. Only signed in users should be able to uplaod
2. The uploaded image needs to be tied to the blog post thats being created
3. We should only allows images (.jpg,.png,etc) to be uplaoded
   There is a issue with the existing solutions because here we are involving the express server which will consume the resources and increase the bill

### Upload flow to S3

Client Server AWS S3
Client tells server it needs to upload a file to S3. includes file name and file type ==> server asks S3 for a predesigned URL ==> AWS
server sends url to react client <== S3 gives server a predesigned URL works only for a file matching the original file name <== aws
React client uploads image file directly to S3 server =============================================> aws
react client tells server the upload file was successful. server saves the URL of that new Image with the blog post===> server

- There is an issue though because there is no security
