#!/bin/bash
# This file prepares all the necessary dependencies for the web build.
set -euxo pipefail

echo "Entering prep deps..."

emcc --version
npm --version

TVM_HOME_SET="${TVM_HOME:-}"

if [[ -z ${TVM_HOME_SET} ]]; then
    if [[ ! -d "3rdparty/tvm-unity" ]]; then
        echo "Do not find TVM_HOME env variable, cloning a version as source".
        git clone https://github.com/mlc-ai/relax 3rdparty/tvm-unity --recursive
    fi
    export TVM_HOME="${TVM_HOME:-3rdparty/tvm-unity}"
fi

cd ${TVM_HOME}/web && echo ${PWD} && make && npm install && npm run build && cd - || { echo 'tvm build failed' ; exit 1; }

rm -rf tvm_home
ln -s ${TVM_HOME} tvm_home
npm install
cd examples/simple-chat
npm install
cd ../..
