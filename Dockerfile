FROM tomcat:latest 
RUN rm -rf /usr/local/tomcat/webapps/angularProject
ADD ./dist/* /usr/local/tomcat/webapps/angularProject
EXPOSE 8085
CMD ["catalina.sh", "run"]
