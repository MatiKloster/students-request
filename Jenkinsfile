pipeline {
    agent {
        kubernetes {
            yamlFile 'jenkins-pod.yaml'
        }
    }

    environment {
        DOCKER_REGISTRY = "https://index.docker.io/v2/"
        DOCKER_IMAGE_NAME = "lbaschiera/students-request"
        DOCKER_IMAGE_TAG = "${BRANCH == 'master' ? 'latest' : "${BRANCH.toLowerCase()}-${GIT_COMMIT.substring(0, Math.min(GIT_COMMIT.length(), 10))}" }"
        HELM_RELEASE_NAME = "students-request"
        HELM_CHART_PATH = "helm/students-request"
    }

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                    docker.withRegistry("${DOCKER_REGISTRY}", 'docker-registry-credentials') {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Update Helm Chart') {
            when{ 
                branch 'master';
            }
            steps {
                container('helm') {
                    script {
                        def imageTag = sh(script: "echo ${DOCKER_IMAGE_TAG}", returnStdout: true).trim()
                        sh(script: "helm upgrade ${HELM_RELEASE_NAME} ${HELM_CHART_PATH} --install --set image.tag=${imageTag}", returnStdout: true)
                    }
                }
            }
        }
    }
}
