pipeline {
    agent {
        docker {
            image 'node:latest' 
            args '-p 3038:3000' 
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

      }
    }
    
    stage("deploy") {
      steps {
        echo 'deploying the application...'
        sh 'docker build -t angularproject:latest .'

      }
    }
  }
}
