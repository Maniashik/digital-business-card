#!/bin/sh

echo "Applying Prisma migrations..."
npx prisma migrate deploy

echo "Running seed..."
npx node dist/seed.js

echo "Starting app..."
exec node dist/main.js