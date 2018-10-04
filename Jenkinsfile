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
          agent {
            docker {
              reuseNode true
              image "node:${NODE_VERSION}"
              args '-v /etc/npmrc:/usr/local/etc/npmrc -v /etc/pki:/etc/pki -e HOME=.'
            }
          }
        	steps {
            checkout scm
            sh "cd ${PACKAGE_LOCATION} && npm install"
          }
        }
        stage ('Test') {
        	steps {
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
