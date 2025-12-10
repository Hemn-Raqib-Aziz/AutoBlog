#!/bin/bash
set -e

echo "Deploying application..."

ssh -i "AutoBlog-key-pairs.pem" -o StrictHostKeyChecking=no ec2-user@$EC2_HOST << 'EOF'
  cd /home/ec2-user/YOUR_REPO
  git pull
  docker-compose down
  docker-compose up -d --build
EOF

echo "Deployment complete."
