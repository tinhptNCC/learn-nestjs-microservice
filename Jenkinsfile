pipeline {
  agent { label 'test' } 

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 18') {
          sh 'npm ci'
        }
      }
    }

    stage('Test') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 18') {
          sh 'npm run test'
        }
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
        echo '🚀 Deploy step here...'
      }
    }
  }

  post {
    success {
      echo "✅ Build completed successfully!"
    }
    failure {
      echo "❌ Build failed!"
    }
  }
}
