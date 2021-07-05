
# Docker command sample
docker (login|logout)
docker system (info|df)

docker (image|container) (ls|rm|inspect)
docker image pull node:10-slim
docker image push furimako/IMAGE-NAME:1.0
docker container (create|run) ubuntu /bin/echo 'hello world'
docker container (create|run) --name webserver -d -p 80:80 nginx
docker container (start|stop|restart|pause) webserver
docker container attach webserver
docker container stats webserver
docker container (ps|top)

docker network ls
