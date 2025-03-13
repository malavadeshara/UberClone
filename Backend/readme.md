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

# Captain Registration Endpoint Documentation

### Endpoint
**POST /captains/register**

### Description
Registers a new captain. On successful registration, returns a JSON containing a token and the captain object.

### Request Body
```json
{
  "email": "captain@example.com", // must be a valid email address
  "password": "secret1",           // minimum 6 characters
  "fullname": {
    "firstname": "John",           // minimum 3 characters
    "lastname": "Doe"              // minimum 3 characters
  },
  "vehicle": {
    "color": "blue",               // at least 3 characters
    "plate": "XYZ123",             // at least 3 characters
    "capacity": 4,                 // numeric, minimum 1
    "type": "car"                  // one of: "motorcycle", "auto", "car"
  }
}
```

### Responses
- **201 Created**
```json
{
  "token": "jwt-token-string",    // JWT valid for 24h
  "captain": { ... }              // captain object with properties
}
```
- **400 Bad Request**
```json
{
  "errors": [ 
    /* array of error details */ 
  ]
}
```

# Captain Login Endpoint Documentation

### Endpoint
**POST /captains/login**

### Description
Logs in an existing captain and returns a token with the captain object.

### Request Body
```json
{
  "email": "captain@example.com", // must be a valid email address
  "password": "secret1"           // minimum 6 characters
}
```

### Responses
- **200 OK**
```json
{
  "token": "jwt-token-string",    // JWT token string
  "captain": { ... }              // captain object
}
```
- **400 Bad Request**
```json
{
  "errors": [ 
    /* array of error details */ 
  ]
}
```

# Captain Profile Endpoint Documentation

### Endpoint
**GET /captains/profile**

### Description
Returns the profile of the authenticated captain.  
**Headers:**  
- Authorization: Bearer token

### Response
- **200 OK**
```json
{
  "captain": { ... }              // captain object with profile details
}
```

# Captain Logout Endpoint Documentation

### Endpoint
**GET /captains/logout**

### Description
Logs out the captain by blacklisting the token and clearing the cookie.

### Response
- **200 OK**
```json
{
  "message": "Logged out successfully" // indicates successful logout
}
```
