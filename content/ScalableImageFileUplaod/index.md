### Big Image Upload Issues

1. Where do images get physically stored?
2. How do images _get_ to the place they should be stored?
3. How do we relate images to a particular blog post?

### Solution

1. Image ==> Express API ==> MongoDB
2. In HD attached to server
   - Image ==> Express API + Hard drive(our hosted server)
   - Image is stored in teh hard drive of our server
   - but the issue is when we have multiple servers than the server A sont get the files of server B so its a very bas approach
3. Outsite Data Store(recommended approach)
   - Image ==> express API ==> AWSS3/Azure File Storage/Google Cloud storage
   - Express API ==> Amazon S3
   -
