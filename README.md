## CDK with VPC split and lambda test POC

In folder `./lib` we have two seperate files.

- File `vpc.ts` will describe how VPC Infra works

- File `bridge-api.ts` will describe how Lambda work with VPC (Availability to reach out to the Internet via VPC)

- File `./bin/bob_bridge_api_vpc.ts` will describe how CDK stack work together within both Lambda and VPC.

## How to ...

1. Once you deploy on new AWS Region, you have to do following steps

```
Step 1.

cdk synth bridgeApi --profile xxxx

Outputs:
SygnaVpcStack.sygnabridgeVPCid = vpc-05abcder0e

Stack ARN:
arn:aws:cloudformation:ap-xxxxx-1:123456789:stack/xxxxStack/dfb123146354760


```

## Working with git

```
…or create a new repository on the command line

echo "# cdk-lookup-vpc-lambda" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:ookangzheng/cdk-lookup-vpc-lambda.git
git push -u origin master

…or push an existing repository from the command line

git remote add origin git@github.com:ookangzheng/cdk-lookup-vpc-lambda.git
git push -u origin master
```
