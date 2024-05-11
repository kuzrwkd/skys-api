#!make
include envfile

##
# build dev image
#
build-dev-api:
	docker build --no-cache -t dev-skys-api -f docker/dev.dockerfile .

##
# clean dev image
#
clean-dev-api:
	docker rmi dev-skys-api

##
# build and ecr push
#
prd-build-and-push-api:
	./docker_build.sh ${AWS_ACCOUNT_ID} ${AWS_DEFAULT_REGION} prd-skys-api skys-prd-cdk

##
# clean prd image
#
prd-clean-api:
	docker rmi prd-skys-api
