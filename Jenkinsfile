pipeline {
    agent any
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
        sh 'npm install'
        sh 'ng build --prod'
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
