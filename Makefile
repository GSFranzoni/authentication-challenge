#!/usr/bin/make

.DEFAULT_GOAL := help

help:  ## Display all commands
	@echo "Help"
	@echo "Available commands:"
	@echo "make init: Start a new develop environment"
	@echo "make up: Start containers detached"
	@echo "make down: Stop containers"
	@echo "make purge: Stop and remove containers and volumes"
	@echo "make logs: Show the output logs"
	@echo "make log: Open the logs and follow the news"
	@echo "make restart: Restart the app container"
	@echo "make build: Rebuild the app container"
	@echo "make ps: List containers"
	@echo "make bash: Start nginx bash"
	@echo "make nginx: Start nginx bash"
	@echo "make mysql: Start mysql bash"
	@echo "make node: Start node sh"
	@echo "make migration: Create migration file"
	@echo "make migrate: Perform migrations"
	@echo "make fresh: Perform fresh migrations"
	@echo "make rollback: Rollback migration"
	@echo "make install: Install dependencies"
	@echo "make autoload: Generate autoload"
	@echo "make queue: Start queue"
	@echo "make permissions: Grant permissions to storage"
	@echo "make link: Create symbolic link to storage"

##@ Initialize work

init: ## Start a new develop environment
	$(MAKE) up
	$(MAKE) install
	$(MAKE) keys
	$(MAKE) fresh
	$(MAKE) permissions

keys: ## Generate secret keys
	docker exec app-nginx bash -c "su -c 'php artisan key:generate' application"

##@ Docker actions

up: ## Start containers detached
	docker-compose -f docker-compose.yml up -d

down: ## Stop containers
	docker-compose -f docker-compose.yml down

purge: ## Stop containers and remove volumes
	docker-compose -f docker-compose.yml down -v

build: ## Build containers
	docker-compose -f docker-compose.yml up -d --build

logs: ## Show the output logs
	docker-compose -f docker-compose.yml logs

log: ## Open the logs and follow the news
	docker-compose logs --follow

restart: ## Restart the app container
	docker-compose restart app-nginx

ps: ## List containers
	docker-compose -f docker-compose.yml ps

##@ Bash controls

bash: ## Start nginx bash
	docker exec -it app-nginx bash

nginx: ## Start nginx bash
	docker exec -it app-nginx bash

mysql: ## Start mysql bash
	docker exec -it app-mysql bash

node: ## Start mysql bash
	docker exec -it app-node sh

##@ Database tools

migration: ## Create migration file
	docker exec app-nginx bash -c "su -c 'php artisan make:migration $(name)' application"

migrate: ## Perform migrations
	docker exec app-nginx bash -c "su -c 'php artisan migrate' application"

fresh: ## Perform fresh migrations
	docker exec app-nginx bash -c "su -c 'php artisan migrate:fresh' application"

rollback: ## Rollback migration
	docker exec app-nginx bash -c "su -c 'php artisan migrate:rollback' application"

##@ Composer

install: ## Composer install dependencies
	docker exec app-nginx bash -c "su -c 'composer install' application"

autoload: ## Run the composer dump
	docker exec app-nginx bash -c "su -c 'composer dump-autoload' application"

require: ## Run the composer require
	docker exec app-nginx bash -c "su -c 'composer require $(package)' application"

##@ Queue

queue: ## Listen queue
	docker exec app-nginx bash -c "su -c 'php artisan queue:listen' application"

##@ Permissions

permissions: ## Set permissions
	docker exec -it app-nginx chmod -R 777 storage

##@ Storage Link

link: ## Set permissions
	docker exec app-nginx bash -c "su -c 'php artisan storage:link' application"

##@ Eloquent

model: ## Create model
	docker exec app-nginx bash -c "su -c 'php artisan make:model $(name) --migration' application"

controller: ## Create controller
	docker exec app-nginx bash -c "su -c 'php artisan make:controller $(name)' application"

request: ## Create request
	docker exec app-nginx bash -c "su -c 'php artisan make:request $(name)' application"
