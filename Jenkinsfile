pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 18') {
          sh 'npm run build'
        }
      }

    stage('Deploy') {
      steps {
        echo 'Deploying...'
        // Deploy code here
      }
    }
  }
}
