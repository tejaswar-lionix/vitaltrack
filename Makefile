install:
	npm install
	npx prisma generate

dev:
	npm run dev

build:
	npm run build

test:
	npm test

docker:
	docker compose up --build -d

clean:
	rm -rf .next node_modules
