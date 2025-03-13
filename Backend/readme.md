# User Registration Endpoint Documentation

## Endpoint
**POST /user/register**

## Description
Registers a new user by validating the input data. On successful registration, it returns a JSON containing a token and the user object.

## Request Body
```json
{
  "fullname": {
    "firstname": "John", // string, minimum 3 characters
    "lastname": "Doe"    // string, optional, if provided, minimum 3 characters
  },
  "email": "user@example.com", // must be a valid email
  "password": "secret1"        // string, minimum 6 characters
}
```

## Responses
- **201 Created**
```json
{
  "token": "jwt-token-string", // JWT token valid for 24h
  "user": { /* user details as per schema */ }
}
```
- **400 Bad Request**
```json
{
  "errors": [ /* array of error messages with validation constraints comments */ ]
}
```

# User Login Endpoint Documentation

## Endpoint
**POST /user/login**

## Description
Logs in an existing user by verifying the provided email and password. On successful authentication, returns a JSON containing a token and the user object.

## Request Body
```json
{
  "email": "user@example.com", // must be a valid email
  "password": "secret1"        // string, minimum 6 characters
}
```

## Responses
- **200 OK**
```json
{
  "token": "jwt-token-string", // JWT token valid for 24h
  "user": { /* user details as per schema */ }
}
```
- **400 Bad Request**
```json
{
  "errors": [ /* array of error messages with validation constraints comments */ ]
}
```

# User Profile Endpoint Documentation

## Endpoint
**GET /user/profile**

## Description
Returns the profile of the authenticated user.

## Headers
- **Authorization**: Bearer token

## Response
- **200 OK**
```json
{
  "user": { /* user details as per schema */ }
}
```

# User Logout Endpoint Documentation

## Endpoint
**GET /user/logout**

## Description
Logs out the current user by clearing the authentication cookie and blacklisting the token.

## Responses
- **200 OK**
```json
{
  "message": "Logged out successfully" // indicates successful logout
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
    "lastname": "Doe"              // optional: if provided, at least 3 characters
  },
  "vehicle": {
    "color": "blue",               // at least 3 characters
    "plate": "XYZ123",             // at least 3 characters
    "capacity": 4,                 // numeric, minimum value is 1
    "type": "car"                  // allowed values: "motorcycle", "auto", "car"
  }
}
```

### Responses
- **201 Created**
```json
{
  "token": "jwt-token-string", // JWT valid for 24h
  "captain": { /* captain details as per schema */ }
}
```
- **400 Bad Request**
```json
{
  "errors": [ 
    /* array of error details with constraints */ 
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
  "token": "jwt-token-string", // JWT token string valid for 24h
  "captain": { /* captain details as per schema */ }
}
```
- **400 Bad Request**
```json
{
  "errors": [ 
    /* array of error details with constraints */ 
  ]
}
```

# Captain Profile Endpoint Documentation

### Endpoint
**GET /captains/profile**

### Description
Returns the profile of the authenticated captain.

### Headers
- **Authorization**: Bearer token

### Response
- **200 OK**
```json
{
  "captain": { /* captain object with profile details */ }
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
