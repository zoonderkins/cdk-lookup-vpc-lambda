
// import * as cdk from '@aws-cdk/core'
// import * as elbv2 from '@aws-cdk/aws-elasticloadbalancingv2'
// import * as ec2 from '@aws-cdk/aws-ec2'

// export class SygnaVpcInfra extends cdk.Stack {
//   vpc: ec2.Vpc
//   constructor(scope: cdk.Construct, id: string,props?: cdk.StackProps) {
//     super(scope, id, props)

//     this.vpc = new ec2.Vpc(this, `sygna-bridge-VPC`, {
//       cidr: '10.192.0.0/16',
//       maxAzs: 2,
//       natGateways: 1,
//       enableDnsHostnames: true,
//       enableDnsSupport: true,
//     })

//     const nlb = new elbv2.NetworkLoadBalancer(this, `sygna-bridge-ElB`, {
//       vpc:this.vpc,
//     })
//   }
// }
