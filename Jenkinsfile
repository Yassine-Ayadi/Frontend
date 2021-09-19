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
         sh 'rm -rf node_modules'
         sh 'npm install'
         sh 'rm -rf ./dist'
         sh 'npm run ng build --prod'
        
      }
    }
    
  stage('Sonarqube') {
    environment {
        CI = 'true'
        scannerHome = tool 'sonarqube'
    }
    agent{ docker { image 'openjdk'}  }

    steps {
        withSonarQubeEnv('sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
        timeout(time: 10, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
        }
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
