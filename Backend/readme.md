# User Registration Endpoint Documentation

## Endpoint
**POST /user/register**

## Description
Registers a new user by validating the input data. On successful registration, it returns a JSON containing a token and the user object.

## Request Body
- **fullname**: An object with:
  - **firstname**: string (minimum 3 characters)
  - **lastname**: string (optional, minimum 3 characters if provided)
- **email**: string (a valid email)
- **password**: string (minimum 6 characters)

## Responses
- **201 Created**
  - Response Body: 
    ```json
    {
      "token": "string",
      "user": { ... }
    }
    ```
- **400 Bad Request**
  - Response Body:
    ```json
    {
      "errors": [ ... ]
    }
    ```

# User Login Endpoint Documentation

## Endpoint
**POST /user/login**

## Description
Logs in an existing user by verifying the provided email and password. Returns a JSON containing a token and the user object on successful authentication.

## Request Body
- **email**: string (a valid email)
- **password**: string (minimum 6 characters)

## Responses
- **200 OK**
  - Response Body:
    ```json
    {
      "token": "string",
      "user": { ... }
    }
    ```
- **400 Bad Request**
  - Response Body:
    ```json
    {
      "errors": [ ... ]
    }
    ```

# User Profile Endpoint Documentation

## Endpoint
**GET /user/profile**

## Description
Returns the profile of the authenticated user.

## Headers
- **Authorization**: Bearer token

## Responses
- **200 OK**
  - Response Body:
    ```json
    {
      "user": { ... }
    }
    ```

# User Logout Endpoint Documentation

## Endpoint
**GET /user/logout**

## Description
Logs out the current user by clearing the authentication cookie and blacklisting the token.

## Responses
- **200 OK**
  - Response Body:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
