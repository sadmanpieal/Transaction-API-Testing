# Transaction API Testing

This repository contains automated tests for the Transaction API. The tests are crafted using Postman and executed with Newman, ensuring comprehensive coverage and reliability of the API endpoints.

## Table of Contents
- [Overview](#overview)
- [API Endpoints Covered](#api-endpoints-covered)
- [Tools Used](#tools-used)
- [Setup Instructions](#setup-instructions)
- [Running the Tests](#running-the-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Transaction API provides a set of endpoints for managing financial transactions, including creating, updating, retrieving, and deleting transactions. This project automates the testing of these endpoints to ensure the API's functionality, reliability, and consistency.

## API Endpoints Covered

The following API endpoints are covered in the automation:

### Transactions
- `GET /transactions`: Retrieve a list of all transactions.
- `GET /transactions/:id`: Retrieve the details of a specific transaction.
- `POST /transactions`: Create a new transaction.
- `PUT /transactions/:id`: Update an existing transaction.
- `DELETE /transactions/:id`: Delete a transaction.

For detailed API documentation, refer to the Postman documentation [here](https://documenter.getpostman.com/view/37031452/2sA3rwLZSM).

## Tools Used

- **Postman**: Used for creating, organizing, and running the API test cases.
- **Newman**: A command-line tool used to run Postman collections in various environments and integrate them into CI/CD pipelines.

## Setup Instructions

### Prerequisites
- **Node.js** installed on your machine.
- **Newman** installed globally:
  ```bash
  npm install -g newman
  ```
- **Postman** installed for running and modifying the collections.

### Cloning the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/sadmanpieal/Transaction-API-Testing.git
cd Transaction-API-Testing
```

## Running the Tests

To run the tests using Newman, use the following command:

```bash
newman run Transaction-API.postman_collection.json
```

This command will execute the entire suite of tests against the Transaction API.

### Running with HTML Report

If you wish to generate an HTML report after running the tests, use:

```bash
newman run Transaction-API.postman_collection.json -r html --reporter-html-export newman-report.html
```

The report will be saved as `newman-report.html`.

![Screenshot 2024-08-02 195447](https://github.com/user-attachments/assets/9e3eb57b-b6cb-4310-97aa-8dfeff808d91)

##Test Report https://docs.google.com/spreadsheets/d/1E29MZSOyZaeVR97Q3cnHiEBf8x-GJHDQ/edit?gid=1581453724#gid=1581453724

##Bug Report 
https://docs.google.com/spreadsheets/d/1Jb6S90nTIfhPxPG23Om_8bcPWzQ7DUso/edit?gid=1600159292#gid=1600159292


## Project Structure

The repository is structured as follows:

```
Transaction-API-Testing/
│
├── Transaction-API.postman_collection.json   # Postman collection file containing all API requests and tests.
├── newman/                                   # Folder containing Newman reports and other artifacts (if applicable).
└── README.md                                 # Project documentation (this file).
```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. All contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

