#/bin/bash
set -eu

rm -f spec.json
rm -rf codegen-test

curl http://localhost:3000/api-json > spec.json
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i /local/spec.json -l nodejs-server -o /local/codegen-test/
