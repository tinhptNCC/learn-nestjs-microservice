pipeline {
    agent any

    environment {
        NODE_VERSION = '20'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tinhptNCC/learn-nestjs-microservice'
            }
        }

        stage('Install Node.js') {
            steps {
                sh '''
                curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
                apt-get install -y nodejs
                '''
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint & Test') {
            steps {
                sh 'npm run lint'
                sh 'npm run test -- --watch=false'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker build -t demo-nest:latest .
                docker stop demo-nest || true
                docker rm demo-nest || true
                docker run -d -p 3000:3000 --name demo-nest demo-nest:latest
                '''
            }
        }
    }
}
