FROM tomcat:latest 
ADD ./dist/* /usr/local/tomcat/webapps/angularProject
EXPOSE 8085
CMD ["catalina.sh", "run"]
