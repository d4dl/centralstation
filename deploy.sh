/usr/local/tomcatCS/bin/shutdown.sh
mvn -e clean package install -DskipTests
cp /Users/joshuadeford/dev/d4dl/centralstation/target/com-d4dl-centralstation-0.0.1-SNAPSHOT.war /usr/local/tomcatCS/webapps/ROOT.war
/usr/local/tomcatCS/bin/catalina.sh jpda start -Djava.util.Arrays.useLegacyMergeSort=true
tail -n 99 -f /usr/local/tomcatCS/logs/catalina.out
