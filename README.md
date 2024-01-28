# E-commerce Backend

This project is a backend application for a simple e-commerce platform built using TypeScript, PostgreSQL for data storage, TypeORM for database interactions, and NestJS as the framework. It implements an MVC architecture for managing products and their variants.

## Getting Started

These instructions will help you set up a local development environment for this project.

### Prerequisites

Before you begin, ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 20.11 or above)
- [pnpm](https://pnpm.io/) (or npm, if you prefer)
- [PostgreSQL](https://www.postgresql.org/) (version 14.10 or above)

### Installing

Follow these steps to set up your development environment:

1. Clone the repository:

   ```bash
   git clone git@github.com:Gilxhon001/e-commerce-backend.git
   cd e-commerce-backend
   
2. Install dependencies:

   ```bash
   pnpm install

3. Set up your environment variables: 
 - Copy the .env.example file to a new file named .env and fill in your database connection details and any other environment-specific variables.

4. Start the development server:

   ```bash
   pnpm run start:dev

### Running the tests
To run automated tests for this system, use the following command:

  ```bash
   pnpm run start:dev
  ```
### API Usage
Below are examples of how to use the API, including endpoints, request examples, and response examples:

- Get All Products
  - Endpoint: GET /products
  - Response: 
    ```json 
    [
    {
      "id": 1,
      "name": "Product Name",
      "description": "Product Description",
      "price": 100.00,
      "inventory": 10
    }
    ]
    ```
- Add a New Product
  - Endpoint: POST /products
  - Request Body:
    ```json 
    {
    "name": "New Product",
    "description": "Description of the new product",
    "price": 150.00,
    "inventory": 20
    }
    ```
  - Response:
    ```json 
    {
    "id": 2,
    "name": "New Product",
    "description": "Description of the new product",
    "price": 150.00,
    "inventory": 20
    }
    ```

- Update a Product
    - Endpoint: PUT /products/:id
    - Request Body:
      ```json 
      {
      "name": "Updated Product Name",
      "description": "Updated product description",
      "price": 200.00,
      "inventory": 15
      }
      ```
    - Response:
      ```json 
      {
      "id": 2,
      "name": "Updated Product Name",
      "description": "Updated product description",
      "price": 200.00,
      "inventory": 15
      }
      ```
- Delete a Product
  - Endpoint: DELETE /products/:id
  - Response:
    ```json 
    {
    "message": "Product with ID 2 has been deleted successfully."
    }
    ```


### Built With
- NestJS - The framework used
- PostgreSQL - Database
- TypeORM - ORM used
    (TypeORM simplifies database interactions in our e-commerce app by letting us use TypeScript classes to represent database tables. This eliminates the need for manual SQL queries, making CRUD operations more straightforward and code cleaner.)







