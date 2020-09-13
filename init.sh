#!/bin/bash

docker run --rm --name=my-mysql --env MYSQL_ROOT_PASSWORD=password --detach --publish 3307:3307 mysql:5.7.24