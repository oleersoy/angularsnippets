## New Generic Maven Project

mvn archetype:generate -DgroupId=com.fireflysemantics -DartifactId=start -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

## Java8 Junit 5 Maven Project

```
 git clone https://github.com/thiagoprocaci/java8-junit5-archetype.git
    cd java8-junit5-archetype
    mvn clean install
    
``` 
mvn archetype:generate \
 -DarchetypeGroupId=com.tbp \
 -DarchetypeArtifactId=java8-junit5-archetype \
 -DarchetypeVersion=1.0-SNAPSHOT  \
 -DgroupId=com.example       \
 -DartifactId=my-project      \
 -DinteractiveMode=false
 ```
