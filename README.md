# Follower Verification

**Follower Verification** is a simple Node.js project that checks who you follow on GitHub but don't follow you back, and who follows you but you don't follow back.

## Features

- Fetches the list of users you follow on GitHub.
- Fetches the list of users who follow you on GitHub.
- Displays users who follow you but you don't follow back.
- Displays users you follow but don't follow you back.

## Requirements

- **Node.js** version 14.x or higher
- **GitHub Personal Access Token** to authenticate the requests
- **GitHub Username** to check followers and following

## Installation

Follow the steps below to set up and run the project on your local machine.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Keyllian7/Follower-Verification.git
cd Follower-Verification
```

### 2. Install Dependencies

This project uses `axios` for making HTTP requests to the GitHub API and `dotenv` to load environment variables. Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root of the project to store your GitHub username and personal access token.

```bash
touch .env
```

Then, open the `.env` file and add your GitHub username and token like this:

```env
GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=your_personal_access_token
```

To generate a personal access token on GitHub, follow these steps:
1. Go to [GitHub Token Settings](https://github.com/settings/tokens).
2. Click on **Generate new token**.
3. Select the necessary scopes. For this project, the **`repo`** and **`user`** scopes should be enough.
4. Copy the token and add it to the `.env` file.

### 4. Compile TypeScript Code (If Needed)

If you are using TypeScript, you need to compile the `.ts` files to `.js` before running the application.

```bash
npx tsc
```

This will generate JavaScript files in the `dist` directory.

### 5. Run the Script

To check who follows you but you don't follow back, and vice versa, run the script using `ts-node` (for TypeScript) or Node.js (for compiled JavaScript).

- **With `ts-node` (Recommended for TypeScript):**

```bash
npx ts-node src/app.ts
```

- **With compiled JavaScript:**

After running `npx tsc`, you can run the compiled JavaScript using Node.js:

```bash
node dist/app.js
```

### 6. Output

The script will display two lists in the terminal:

1. **Users who follow you but you don't follow back:**
   - A list of GitHub users who follow you but you don't follow them back.

2. **Users you follow but don't follow you back:**
   - A list of GitHub users you follow but they don't follow you back.

## Project Structure

Here's a quick overview of the project structure:

```
/Follower-Verification
    /src
        app.ts          # Main script to run the verification
        github.ts       # Functions for interacting with GitHub API
        .env            # Environment file for storing sensitive data (GitHub token, username)
    /dist               # Compiled JavaScript files (generated after running tsc)
    package.json        # Project configuration and dependencies
    tsconfig.json       # TypeScript configuration
    .gitignore          # Git ignore file to exclude .env and node_modules
    README.md           # This file
```

### Key Files:

- **`src/github.ts`**: Contains functions to fetch the list of users you follow and users who follow you.
- **`src/app.ts`**: Main application file that checks who follows you and who you follow.
- **`.env`**: Stores your GitHub username and personal access token securely.

## Contributing

Feel free to fork this repository and create pull requests with improvements or bug fixes. If you find any issues or have suggestions, please open an issue.

### Steps to Contribute:
1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch for your changes.
4. Make your changes and commit them.
5. Push your changes to your forked repository.
6. Create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License.

## Disclaimer

This tool uses the GitHub API to fetch user data. Make sure to follow GitHub's API rate limits and usage policies. The personal access token you use will have access to the scopes you grant during its creation.

## Contact

If you have any questions or need assistance, feel free to reach out to me via [GitHub Issues](https://github.com/Keyllian7/Follower-Verification/issues).

---

This `README.md` provides detailed information about the project, including setup instructions, usage, file structure, and how others can contribute. Let me know if you need any adjustments or additional details!
