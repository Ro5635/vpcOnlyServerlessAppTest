# VPC Serverless App Test
 
This is a mini project to play around with dragging a serverless app into a VPC entirely. Corona was raging, seemed 
like a thing to do. It was the tool to allow me to write a blog.

Blog that links to this repo: https://medium.com/@robertcurran5635/dragging-serverless-web-apps-into-the-vpc-d97cabd47e79

This repository follows the mono-repo model and holds the service and web-ui.

A [public deployment](https://cakeinc-vpc-app.projects.robertcurran.uk/) of this was made using [public-hosted-demo-template.yaml](https://github.com/Ro5635/vpcOnlyServerlessAppTest/blob/master/service/public-hosted-demo-template.yaml) which contains all of the infrastructure needed for a deployment to a standard CloudFront Distribution and Publicly Accessible API.


## Service
### CakeAPI:

A single node script that responds back with an array of available cakes. Intended to allow the proof of concept that
the web-ui is calling out to the API without leaving the VPC.

The main part of this is the massive unwieldy infrastructure template that defines all of the
infrastructure needed to do this, namely:

- Route53 Hosted Zone for VPN internal DNS
- S3 Bucket for static Angular asetts
- CloudFront Distribution to serve S3 Assets
- CloudFront Origin Access Identity
- CName In Private Hosted Zone for CloudFront Distribution
- VPC
- Public Subnet attached to VPC  
- Private Subnet attached to VPC
- NAT gateway attached to Private Subnet
- Internet Gateway Attached to VPC
- WAF WebACL attached to CloudFront Distribution
- WAF IPBlock For VPC NAT Elastic IP
- Rule On WAF WebACL To Allow Provided IPBlock
- VPC Endpoint For API Gateway 
- API Gateway
- Lambda

Way too much for the single template (WAF is in a separate template as this must be deployed to the N-Virginia region) but as 
this is a SAM template I wanted to keep the deployment simple and keep it as a single stack, maybe I'll reconsider my
transgressions and fix this at some point 😬


## Web-UI

A tiny Angular project that grabs "cakes" from the cake API service and lists them on the page. 
Uses Angular Material for the UI components.  


## Why, What is this for:

At some point I want to take this a little further and in place of accessing this through a VPN I want 
it to be through a zero access network type web portal solution. The tooling to achieve this is not quite there yet, so
I have put this together as a SAM/ Cloud Formation Template so tht I can periodically return to this and quickly spin up 
all of the infrastructure needed. NB, AWS Workspaces was an interesting way of interacting with this as they can be spun up within the VPC
mitigating the need for the theoretical connecting user to have to use a VPN.


