# VPC CloudFront Test 🥦

This project creates a VPC and serverless app which is exposed only to the VPC, this involves putting a WAF in front of 
the CloudFront Distribution, and a private API. I wanted a project to be able to play with some of the networking "things"
within AWS and this allowed me to do that exploration on my own personal AWS account :)  

Uses AWS SAM for all the template stuffs as I prefer the developer experience of this compared to bog standard CloudFormation
when working on non-production type stuffs.

I have made no effort to uncouple this from my AWS account, the `npm package` and `npm deploy` commands are tied 
to my exact setup, see script source in package.json...  

Built from https://github.com/Ro5635/bareminimumJSLambda as a start point.

Build and lint:
```
npm run build
```

Package:
```
sam package --s3-bucket your-cf-bucket  --output-template-file packaged.yaml
```

Deploy:
```
 sam deploy --template-file /FULL/PATH/TO/packaged.yaml --stack-name YOUR_STACK_NAME --region eu-west-1 --capabilities CAPABILITY_IAM
```
