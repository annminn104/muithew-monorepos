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
        'yarn install'
      }
    }
    stage("Build") {
      steps {
        'yarn build'
      }
    }
  }
}