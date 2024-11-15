# Create project directory and navigate into it
mkdir douga-backend
cd douga-backend

# Initialize npm project
npm init -y

# Install core dependencies
npm install express dotenv cors helmet mongoose bcryptjs jsonwebtoken morgan express-validator multer

# Install development dependencies
npm install -D nodemon typescript ts-node @types/express @types/node @types/cors @types/morgan @types/multer @types/bcryptjs @types/jsonwebtoken

# Create TypeScript configuration
npx tsc --init

# Create the directory structure
mkdir -p src/{config,controllers,middlewares,models,routes,services,utils} tests/{unit,integration,e2e} scripts

# Create basic config files
touch .env .env.example .gitignore README.md
touch src/app.ts
touch src/config/database.ts
touch src/config/auth.ts