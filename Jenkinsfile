pipeline {
  agent any
  stages {
    stage("Checkout") {
      steps {
        checkout scm
      }
    }
    stage("Install package manager") {
      steps {
        sh 'sudo apt install yarn'
      }
    }
    stage("Build") {
      steps {
        sh 'yarn build'
      }
    }
  }
}