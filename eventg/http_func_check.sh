#!/bin/bash
export WEBSITE='func_name'
export FUNC='simple'
curl -X GET "https://${WEBSITE}.azurewebsites.net/api/${FUNC}" -i
