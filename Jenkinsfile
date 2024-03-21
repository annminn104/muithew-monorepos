pipeline {
  agent any
  stages{
    stage("Checkout") {
      steps {
        checkout scm
      }
    }
    stage("Install dependencies") {
      steps {
        sh 'sudo apt-get install yarn'
        sh 'yarn install'
      }
    }
    stage("Build") {
      steps {
        sh 'yarn build'
      }
    }
  }
}