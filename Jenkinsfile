#!/usr/bin/env groovy

def NODE_VERSION = "8.10.0"
def PACKAGE_LOCATION = './lambda/custom'
def PACKAGE_NAME = 'UNKNOWN'
def PACKAGE_RELEASE_VERSION = 'UNKNOWN'
def PACKAGE_RELEASE_ARTIFACTS = 'UNKNOWN'

pipeline {
  agent any

  stages {
        stage ('Install') {
        	steps {
            checkout scm
            sh "cd ${PACKAGE_LOCATION} && npm install"
          }
        }
        stage ('Test') {
        	steps {
            sh "ln -s /usr/bin/nodejs /usr/bin/node"
            sh "cd ${PACKAGE_LOCATION} && npm test"
          }
        }
    
  }
  post {
    success {
      deleteDir() /* clean up our workspace */
    }
  }
}
