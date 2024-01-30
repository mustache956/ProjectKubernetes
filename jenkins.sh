pipeline {
    agent {
        label 'CloudSlave1'
    }
    stages {
        stage('clone git repo') {
            steps {
                git branch: 'main', url: 'https'
            }
        }
        stage('buildFront') {
            steps {
                script {
                    dir('Eshop_frontend') {
                        bat 'docker build -t antoiner956/eshop-frontend:1.0 .'
                    }
                }   
            }
        }
        stage('build back users') {
            steps {
                script {
                    dir('Inscription') {
                        bat 'docker build -t antoiner956/eshop-back-users'
                    }
                }
            }
        }
        stage('publish frontend') {
            setps {
                bat 'docker push antoiner956/eshop-frontend:1.0'
            }
        }
        stage('publish backend users') {
            setps {
                bat 'docker push antoiner956/eshop-back-user:1.0'
            }
        }
        stage('start minikube') {
            steps {
                script {
                    bat 'minikube start'
                }
            }
        }
        stage('enable ingress') {
            steps {
                script {
                    bat 'minikube addons enable ingress'
                    bat 'minikube addons enable ingress-dns'
                }
            }
        }
        stage('apply deplyments') {
            steps {
                script {
                    bat 'kubectl apply -f kube-deployment.yml'
                }
            }
        }
        stage('apply services') {
            steps {
                script {
                    bat 'kubectl apply -f kube-service.yml'
                }
            }
        }
        stage('apply ingress config') {
            steps {
                script {
                    bat 'kubectl apply -f ingress.yml'
                }
            }
        }
        stage('Logs') {
            steps {
                script {
                    bat 'kubectl get pods, services, deployments'
                }
            }
        }
    }
}