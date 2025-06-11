#!/usr/bin/env zsh

# The purpose of this script is to wait for both the backend and frontend services to be ready
# before continuing with the Chrome browser launch

echo "Waiting for backend and frontend services to start..."

# Wait for backend to be ready (NestJS)
while ! curl -s http://localhost:3000/v1/agents > /dev/null 2>&1; do
  echo "Waiting for backend to be ready..."
  sleep 2
done
echo "✅ Backend is ready!"

# Wait for frontend to be ready (Vite)
while ! curl -s http://localhost:5173 > /dev/null 2>&1; do
  echo "Waiting for frontend to be ready..."
  sleep 2
done
echo "✅ Frontend is ready!"

echo "Both services are ready! You can now debug your application."

# Pause for a moment to ensure everything is fully initialized
sleep 1
