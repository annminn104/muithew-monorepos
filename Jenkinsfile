pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                chectout scm
            }
        }

        stage('Install dependencies') {
            steps {
                // Install NVM
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash'

                sh 'source ~/.nvm/nvm.sh'

                // Install Node.js 18 using NVM
                sh 'nvm install 18'
                sh 'nvm use 18'

                // Install Yarn
                sh 'npm install -g yarn'

                // Verify Node.js version
                sh 'node --version'

                // Install dependencies
                sh 'yarn install'
            }
        }

        stage('Build') {
            steps {
                // Build the Next.js app
                sh 'yarn build'
            }
        }
    }
}
