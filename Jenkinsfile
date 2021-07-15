pipeline {
    agent {
        docker {
            image 'node:latest' 
            args '-p 3000:3000' 
        }
    }
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
        echo 'building the application...'
     
         sh 'npm install'
         bash 'sudo ng build --prod'
        
      }
    }
    
    stage("test") {
      steps {
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
