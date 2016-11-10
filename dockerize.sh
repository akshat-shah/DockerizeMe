#!/bin/bash
docker build -t ashah7/"$1" .
docker login -u="ashah7" -p="Docker3001."
docker push ashah7/"$1"
docker rmi $(docker images -q);