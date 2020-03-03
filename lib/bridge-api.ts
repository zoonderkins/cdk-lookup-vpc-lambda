import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import * as ec2 from '@aws-cdk/aws-ec2'

export class BridgeApiStack extends cdk.Stack {
  // vpc: ec2.Vpc;
  constructor(
    scope: cdk.Construct,
    id: string,
    props?: cdk.StackProps,
  ) {
    super(scope, id, props)

    const vpc = ec2.Vpc.fromLookup(this, 'sygna-referenced-vpc', {
      
      vpcId: 'vpc-05ea963ada8ce530e'
    })

    const api = new lambda.Function(this, 'api', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.AssetCode.fromAsset('lambda'),
      handler: 'index.handler',
      vpc: vpc,
      memorySize: 128,
      timeout: cdk.Duration.seconds(30),
    })
  }
}
