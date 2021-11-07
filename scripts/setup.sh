#! /bin/bash

urlBase="https://github.com/buildpacks/pack/releases/download/v0.22.0-rc1/"

if [[ `uname` -eq "Darwin" ]]; then
  file="pack-v0.22.0-rc1-macos.tgz"
else
  file="pack-v0.22.0-rc1-linux.tgz"
fi

url="$urlBase/$file"

cd /tmp

wget $url

tar -xz -f "./$file"

cd -

cp /tmp/pack/pack ./node_modules/.bin