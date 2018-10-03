#!/usr/bin/env groovy

def NODE_VERSION = "8.10.0"
def PACKAGE_LOCATION = './lambda/custom'
def PACKAGE_NAME = 'UNKNOWN'
def PACKAGE_RELEASE_VERSION = 'UNKNOWN'
def PACKAGE_RELEASE_ARTIFACTS = 'UNKNOWN'

pipeline {
  agent any
  options { skipDefaultCheckout()
            disableConcurrentBuilds()
          }

  stages {
        stage ('Install') {
        	npm install 
        }
        stage ('Test') {
        	npm test
        }
    
  }
  post {
    success {
      deleteDir() /* clean up our workspace */
    }
  }
}
