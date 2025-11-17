#!/bin/bash
# Growing With Grace - Installation & Launch Script

echo "🌸 Growing With Grace - Angular PT Portal Setup"
echo "=================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Starting development server..."
    echo "📍 Application will be available at: http://localhost:4200"
    echo ""
    echo "Demo Credentials:"
    echo "  Username: test"
    echo "  Password: test"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    npm start
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
