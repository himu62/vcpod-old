.PHONY: start stop test build watch shell

start:
	docker-compose pull
	docker-compose up -d

stop:
	docker-compose stop

test:
	@echo not yet

build:
	docker-compose run node /bin/sh -c "cd /vcpod && ./node_modules/.bin/webpack"

watch:
	docker-compose run node /bin/sh -c "cd /vcpod && ./node_modules/.bin/webpack --watch"

shell:
	docker-compose run node /bin/sh
