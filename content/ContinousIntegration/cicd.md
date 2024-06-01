### What is CI?

- Continous integration
- Process to merge all the code cheanges into a single branch

### What is CI server?

- Server that runs automatic checks on the codebase to ensure the changes havent broken anything

### CI flow

The real continuous idea here, and that is a awful pun,the real idea here is that the idea of a CI serveris to do some automated checking of the changes that we have made to a project before we start to actually formalize themand finalize them inside of our real project hosted on the remote repository.

1. Developer pushes code to github
2. CI Server detects that a new push of code has occured
3. CI server clones project to a cloud-based virtual machine
4. CI server run all tests
5. If all tests pass CI server marks build as passing and does some optional followup

## CI providers

1. Travis CI
2. Circle CI
3. Codeship
4. AWS Codebuild (little bit advance)

## CI Flwo with travis CI

1. We push code to github
2. Travis automatically detects pushed code
3. Travis clones our project
4. Travis runs tests using '.travis.yml' file
5. If tests are OK travis sends us an email

## YAML files
