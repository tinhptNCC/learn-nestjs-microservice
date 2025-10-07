pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'tinhptncc/my-nest-microservice'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/tinhptNCC/learn-nestjs-microservice', branch: 'main'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push('latest')
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                docker stop my-nest-container || true
                docker rm my-nest-container || true
                docker pull ${DOCKER_IMAGE}:${DOCKER_TAG}
                docker run -d --name my-nest-container -p 3001:3001 ${DOCKER_IMAGE}:${DOCKER_TAG}
                '''
            }
        }
    }
}