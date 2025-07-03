<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">TELEGRAM-BOT-SERVER</h1></p>
<p align="center">
	<em>Empowering weather updates with seamless interactions.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/NageshMandal/telegram-bot-server?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/NageshMandal/telegram-bot-server?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/NageshMandal/telegram-bot-server?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/NageshMandal/telegram-bot-server?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

**Overview:

**Telegram Bot Server** simplifies the creation of Telegram bots for weather updates. It offers seamless user management, weather notifications, and uplifting quotes. Ideal for developers building weather-focused bots, it streamlines bot settings, user interactions, and weather data retrieval, enhancing user engagement and experience.

---

## 👾 Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Modular architecture using **Express** for server and **Telegraf** for Telegram bot</li><li>Utilizes **Mongoose** for MongoDB integration</li><li>Separation of concerns with distinct routes for user and bot settings</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Follows best practices for **Node.js** development</li><li>Consistent code style and formatting</li><li>Utilizes **dotenv** for environment configuration</li></ul> |
| 📄 | **Documentation** | <ul><li>Comprehensive documentation in **JavaScript** with **JSON** for configuration</li><li>Includes detailed setup instructions and usage guidelines</li><li>Well-commented codebase for easy understanding</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with **OpenWeatherMap API** for weather data</li><li>Uses **jsonwebtoken** for authentication and security</li><li>Incorporates **axios** for HTTP requests</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Separate modules for bot settings, user management, and weather services</li><li>Encapsulates functionality within distinct files for maintainability</li><li>Encourages code reusability and scalability</li></ul> |
| 🧪 | **Testing**       | <ul><li>Includes testing setup using **npm** scripts</li><li>Implements unit tests for critical functions and services</li><li>Ensures code reliability through test-driven development practices</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized data retrieval and processing for efficient weather updates</li><li>Utilizes **node-cron** for scheduled tasks to enhance performance</li><li>Minimizes response times for user interactions</li></ul> |
| 🛡️ | **Security**      | <ul><li>Implements **CORS** for secure cross-origin resource sharing</li><li>Utilizes **jsonwebtoken** for token-based authentication</li><li>Ensures data privacy and integrity through secure API endpoints</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Manages dependencies using **npm** with detailed **package.json** and **package-lock.json**</li><li>Includes essential packages like **cors**, **mongoose**, and **telegraf**</li><li>Ensures version consistency for stability</li></ul> |

---

## 📁 Project Structure

```sh
└── telegram-bot-server/
    ├── README.md
    ├── bot
    │   ├── index.js
    │   ├── services
    │   └── utils
    ├── models
    │   ├── BotSetting.js
    │   └── User.js
    ├── package-lock.json
    ├── package.json
    └── server
        ├── index.js
        └── routes
```


### 📂 Project Index
<details open>
	<summary><b><code>TELEGRAM-BOT-SERVER/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file in the `weather-telegram-bot` project manages dependencies such as axios, cors, dotenv, express, jsonwebtoken, and mongoose<br>- It ensures that the project uses specific versions of these dependencies to maintain stability and consistency in the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/package.json'>package.json</a></b></td>
				<td>- Orchestrates concurrent execution of bot and server scripts using Node.js<br>- Manages dependencies for Axios, Express, Mongoose, and more<br>- Designed for a weather Telegram bot project with a modular architecture.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- models Submodule -->
		<summary><b>models</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/models/BotSetting.js'>BotSetting.js</a></b></td>
				<td>- Defines a schema for bot settings in the project, ensuring a single document always exists<br>- The schema includes fields for name, bot URL, and weather token<br>- The static method retrieves the existing document or creates a new one with default values if none exists<br>- This file plays a crucial role in managing and maintaining bot settings within the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/models/User.js'>User.js</a></b></td>
				<td>- Defines a user schema for MongoDB using Mongoose, capturing essential user details like chat ID, username, full name, subscription status, and location<br>- The schema ensures data integrity and uniqueness, forming a crucial part of the project's data model.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- server Submodule -->
		<summary><b>server</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/server/index.js'>index.js</a></b></td>
				<td>- Establishes an Express server handling user and bot settings routes, connecting to a MongoDB database named "weather." Utilizes CORS for security and JSON parsing<br>- The server listens on a specified port, providing API endpoints for user and bot settings interactions.</td>
			</tr>
			</table>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/server/routes/botSettings.js'>botSettings.js</a></b></td>
						<td>- Handles fetching and updating bot settings, connecting to the database to retrieve and modify configuration data<br>- The code defines routes for retrieving and updating bot settings, ensuring seamless communication between the frontend and backend systems.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/server/routes/users.js'>users.js</a></b></td>
						<td>- Defines routes for user management operations like fetching, updating, blocking, and deleting users<br>- Handles requests to interact with the User model, providing endpoints for common user actions such as viewing, modifying, and removing user data<br>- Facilitates seamless communication between the frontend and backend systems for efficient user management within the application.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- bot Submodule -->
		<summary><b>bot</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/bot/index.js'>index.js</a></b></td>
				<td>- The code in the provided file orchestrates a Telegram bot that enables users to subscribe to weather updates, manage their location settings, and receive periodic weather notifications<br>- It leverages MongoDB for data storage, integrates with external weather APIs, and utilizes cron jobs for automated updates<br>- The bot interacts with users through commands and text inputs, ensuring a seamless experience for weather enthusiasts.</td>
			</tr>
			</table>
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/bot/utils/quotes.js'>quotes.js</a></b></td>
						<td>- Generates weather-related quotes based on the current weather condition to provide uplifting messages to users<br>- The code file 'quotes.js' contains a function that selects a random quote corresponding to the weather condition provided<br>- This feature enhances user experience by adding a personalized touch to the bot's responses.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/NageshMandal/telegram-bot-server/blob/master/bot/services/weatherService.js'>weatherService.js</a></b></td>
						<td>- Implements a weather service function that fetches weather data based on city coordinates using the OpenWeatherMap API<br>- Handles data retrieval, parsing, and error management to provide a formatted weather report including location, temperature, humidity, and description.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with telegram-bot-server, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


### ⚙️ Installation

Install telegram-bot-server using one of the following methods:

**Build from source:**

1. Clone the telegram-bot-server repository:
```sh
❯ git clone https://github.com/NageshMandal/telegram-bot-server
```

2. Navigate to the project directory:
```sh
❯ cd telegram-bot-server
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run telegram-bot-server using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/NageshMandal/telegram-bot-server/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/NageshMandal/telegram-bot-server/issues)**: Submit bugs found or log feature requests for the `telegram-bot-server` project.
- **💡 [Submit Pull Requests](https://github.com/NageshMandal/telegram-bot-server/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/NageshMandal/telegram-bot-server
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/NageshMandal/telegram-bot-server/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=NageshMandal/telegram-bot-server">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
