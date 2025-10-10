#!/bin/bash
# Halloween App Startup Script
# This script starts the React app with polling to avoid file watcher issues

echo "🎃 Starting Halloween App..."
echo "📱 The app will be available at: http://localhost:3000"
echo "🔄 Using polling mode to avoid file watcher limits..."

# Kill any existing processes on port 3000
fuser -k 3000/tcp 2>/dev/null || true

# Set environment variables to avoid file watcher issues
export CHOKIDAR_USEPOLLING=true
export WATCHPACK_POLLING=true
export FAST_REFRESH=false

# Start the app
npm start
