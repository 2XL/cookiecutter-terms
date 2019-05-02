# 8zar Makefile
# Useful tooling for complex commands
# Specs: http://www.gnu.org/software/make/manual/make.html

# COLORS
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
RESET  := $(shell tput -Txterm sgr0)

VERSION_FILE=VERSION
VERSION=`cat $(VERSION_FILE)`

TARGET_MAX_CHAR_NUM=25

## Show help
help:
	@echo ''
	@echo 'Usage:'
	@echo '  ${YELLOW}make${RESET} ${GREEN}<target>${RESET}'
	@echo ''
	@echo 'Targets:'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${YELLOW}%-$(TARGET_MAX_CHAR_NUM)s${RESET} ${GREEN}%s${RESET}\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)



## Scripts
## -----------------------------------------
## -----------------------------------------

## Create a "Makefile" pointing to the module of interest

default:
	@echo $(PWD)
	@echo $(dir $(realpath $(firstword $(MAKEFILE_LIST))))


## create react project at ./app
create:
	@cookiecutter . --no-input -f


## clean the generate files
clean:
	@echo "TODO"

## run the app
run:
	@cd app && npm start

## install dev env requirements
dev-dep:
	@cd app && npm install gh-pages --save-dev

## deploy to pages
deploy:
	@cd app && npm run deploy


## get application versions
version:
	@node --version
	@npm --version
	@create-react-app --version
	@sed --version

.PHONY: