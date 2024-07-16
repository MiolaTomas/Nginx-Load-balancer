# Setting up a Load Balancer with Nginx, Express.js, and Docker

## Description

This project demonstrates the setup of a simple load balancer using Nginx alongside three instances of an Express.js server, orchestrated within Docker containers.

## Key Components

- **Nginx**: Used as the load balancer to distribute incoming requests among multiple backend servers.
- **Express.js**: Three instances of an Express.js server simulate backend services that handle requests.
- **Docker**: Orchestration tool to containerize each component (Nginx and Express.js servers), ensuring consistent deployment across different environments.