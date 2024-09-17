# Dogument

System for tracking and monitoring things important to your pet

## Deploying Dogument

Dogument is bundled as a Docker container which can be built locally, or pulled from Docker Hub.

### Docker CLI
```sh 
docker run -d \
  -p 3000:3000 \
  -p 8080:8080 \
  splinterhead27/dogument
```

### Docker Compose
```yaml
services:
  dogument:
    image: splinterhead27/dogument
    container_name: dogument
    ports:
    - 3000:3000
    - 8080:8080
    restart: unless-stopped
```
