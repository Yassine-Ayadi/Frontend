pipeline {
    agent any
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
        sh 'sudo npm install'
        sh 'sudo ng build --prod'
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
      }
    }
  }
}
