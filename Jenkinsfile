pipeline {
    agent {
        docker {
            image 'node:latest' 
            args '-p 3008:3000' 
        }
    }
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
     
         sh 'npm install'
         sh 'npm run ng build --prod'
        
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
        echo 'deploying the application...'
        echo 'deploying the application...'
      }
    }
  }
}
