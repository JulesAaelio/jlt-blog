#!/usr/bin/env bash

git add -A -f $deploy_prefix && git commit -m "$TRAVIS_COMMIT_MESSAGE" # Forcefully add the ignored files.
git tag build/$TRAVIS_BUILD_NUMBER #Tag the commit so it's easy to roll back to previous build.

# Split and push the build folder.
git subtree split --prefix $deploy_prefix -b build #
git push --tags deploy build:master
git branch -D build

#If you don't need tags you can simply use :
#git subtree push --prefix build deploy master
