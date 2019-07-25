#!/usr/bin/env bash

eval "$(ssh-agent -s)" #start the ssh agent

# add the deploy host to trusted hosts.
if [ -z `ssh-keygen -F $deploy_host` ]; then
    ssh-keyscan -H $deploy_host >> ~/.ssh/known_hosts
fi

# add the key to ssh-agent once for all
echo -e $deploy_key >> ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa

# fetch the build subtree.
git remote add deploy $deploy_uri
git subtree add --prefix $deploy_prefix deploy master