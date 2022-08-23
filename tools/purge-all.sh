#/bin/bash

cd "$(git rev-parse --show-toplevel)"

# remove temp folders
rm -rf node_modules
rm -rf dist
rm -rf tmp
rm -rf out-tsc
rm -rf .pnpm-store

# re install libs
pnpm install
