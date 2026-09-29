#!/usr/bin/env sh
set -eu

cd "$(dirname "$0")/.."

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required. Install Node.js 18 or newer first." >&2
  exit 1
fi

if [ ! -d node_modules ]; then
  npm install
fi

echo "Starting Riverbend Civic Archive..."
echo "Open http://localhost:${PORT:-4173}"
npm start
