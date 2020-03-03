#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { BridgeApiStack } from '../lib/bridge-api'
// App initailize
const app = new cdk.App()


// Bridge Api
const bridgeApi = new BridgeApiStack(app, 'BridgeApiStack')

// old school way
// const bridgeApi = new BridgeApiStack(
//   app,
//   'BridgeApiStack',
//   SygnaVPC.vpc
// )
// bridgeApi.addDependency(SygnaVPC)

// const validEnv = (environment: string | undefined) => {
//   switch (environment) {
//     case 'dev':
//     case 'test':
//     case 'production':
//       return true
//     default:
//       return false
//   }
// }
// const environment = validEnv(process.env.NODE_ENV)
//   ? process.env.NODE_ENV!
//   : 'dev'
