
# Amazing-Mart
🚀 **Core Functionalities**
This is a web application built with **React** and **TypeScript**, designed to provide a comprehensive e-commerce experience. It features robust product and category management, secure user and account handling, and a flexible authentication system.

## Product and Category Management
This section details the functionalities for managing products and their respective categories, with clear distinctions between public and administrator access.

### Public Access (All Users)
Users without administrative privileges can perform the following read-only operations:
* **Get all products**: Retrieve a complete list of all available products.
* **Get product by ID**: Access detailed information for a specific product using its unique identifier.
* **Get all categories**: Obtain a list of all defined product categories.
* **Get category by ID**: View detailed information for a specific category using its unique identifier.

### Administrator Access
Users with administrator privileges have full control over product and category data:
* **Create new products**: Add new products to the system with their relevant details.
* **Update product by ID**: Modify existing product information using its unique identifier.
* **Delete product by ID**: Remove products from the system using their unique identifier.
* **Create new categories**: Define and add new product categories.
* **Update category by ID**: Modify existing category information using its unique identifier.
* **Delete category by ID**: Remove categories from the system using their unique identifier.

---

## User and Account Management
This section outlines the functionalities for managing user accounts, with distinct permissions for authenticated users and administrators.

### Authenticated User Access
Logged-in users can manage their own account information:
* **Get own account information**: Retrieve details about their personal user account.
* **Edit own account information**: Update their personal account details, such as name, email, or password.
* **Remove own account**: Delete their user account from the system.

### Administrator Access
Administrators have comprehensive control over all user accounts:
* **Get all users**: Retrieve a complete list of all registered users.
* **Get user by ID**: Access detailed information for a specific user using their unique identifier.
* **Create new users**: Register new user accounts in the system.
* **Update user by ID**: Modify existing user account information using their unique identifier.
* **Delete user by ID**: Remove user accounts from the system using their unique identifier.

---

## User Authentication
Secure authentication is a fundamental aspect of this web application, ensuring data integrity and authorized access.
* **Registration**: Allows new users to create an account by providing necessary information through a secure signup process.
* **Login**: Enables registered users to authenticate their identity and obtain access tokens required for securely interacting with the application's API.
* **Token Refresh**: Provides a mechanism to renew an expired access token using a refresh token, ensuring continuous secure access to the application without requiring repeated logins.
