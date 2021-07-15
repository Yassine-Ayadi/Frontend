pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 3000:3000' 
        }
    }
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
        echo 'building the application...'
        echo 'building the application...'
        echo 'building the application...'
         //nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
         ///sh 'npm config ls'
         //sh 'npm install'
        //bash 'sudo ng build --prod'
      }
    }
    
    stage("test") {
      steps {
        echo 'testing the application...'
        echo 'testing the application...'
        echo 'testing the application...'
      }
    }
    
    stage("deploy") {
      steps {
        echo 'deploying the application...'
      }
    }
  }
}
