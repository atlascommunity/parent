# maven-yarn-docker
Dockerfile which builds an image containing maven and yarn build tools

## JDK 8
```
docker build -f Dockerfile.jdk8 -t registry-gitlab.corp.mail.ru/atl-team/maven-yarn-docker:3.0.5_JDK11 .
```

##JDK 11
```
docker build -f Dockerfile.jdk11 -t registry-gitlab.corp.mail.ru/atl-team/maven-yarn-docker:3.0.5_JDK11 .
```