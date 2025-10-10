pipeline {
    agent { label 'test' }

    environment {
        NODEJS = 'NodeJS 18'
    }

    stages {
        stage('Setup') {
            steps {
                nodejs(NODEJS) {
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                nodejs(NODEJS) {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                nodejs(NODEJS) {
                    sh 'npm run test'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t my-nest-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy to server..."
                // Ví dụ: sh 'docker-compose up -d'
            }
        }
    }
}
