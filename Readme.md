# Express base server

Basic template for Node js Express server


# Docker

## Basic image build

Build docker image, in the root folder:

    docker build -t express_base .

***
## Run and stop with docker 

Run docker exposing port 3001

    docker run -p3001:3001 express_base

To stop the server, first get the CONTAINER_ID with:

    docker ps

Then stop it with
    
    docker stop <my_container_id>

***
## Run and stop with docker-compose

In the same folder with the docker-compose.yml, run:

    docker-compose up
    docker-compose stop
***
## Run and stop with docker stack deploy (alternative to docker compose):

 > warining: docker stack cant build new images

    docker swarm init
    docker stack deploy -c docker-compose.yml my_stack
    docker stack rm my_stack


***
## Dev test and prod stages:

There are 3 docker compose files, the basic one is for development, the other two are tagged with test and prod respectively.