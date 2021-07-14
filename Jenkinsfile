pipeline {
    agent any
  stages {
    stage("build") {
      steps {
        echo 'building the application...'
        echo 'building the application...'
        bash 'sudo npm install'
        bash 'sudo ng build --prod'
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
