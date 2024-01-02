#!make
include envfile

##
# build and ecr push
#
prd-build-and-push-api:
	./docker_build.sh ${AWS_ACCOUNT_ID} ${AWS_DEFAULT_REGION} prd-skys-api skys-prd-cdk

##
# clean
#
prd-clean-api:
	docker rmi prd-skys-api
