#!/bin/bash

docker run --name postgres_hiring -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=chats -p 5432:5432 -d postgres
