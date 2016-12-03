#!/bin/bash
sudo docker build -t ashah7/"$1" .
sudo docker login -u="ashah7" -p="Docker3001."
sudo docker push ashah7/"$1"
sudo docker rm $(sudo docker ps -a -q);
sudo docker rmi $(sudo docker images -q);
