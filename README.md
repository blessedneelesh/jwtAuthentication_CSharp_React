## Description: This repository consists of two projects: ASP.NET Core JWT Authentication Web API and React. 

# Overview:
User can register, login, add role, remove role, add users to role, remove users from role, delete users. Some API are protected.

These are APIs that ASP.NET Core C# App will export:

![Admin1](https://github.com/blessedneelesh/jwtAuthentication_CSharp_React/assets/54150796/1884d413-bb07-4614-aeb8-6f08a2c8ffb6)


## Technology

.NET Core 6

MS SQL

Entity Framework Core (Database First Approach)

ASP.NET Identity System

JWT Authentication: AllowAnonymous, Authorize, Authorize(Roles = "r1, r2"), 

IdentityDbContext, IdentityUser, IdentityRole, UserManager, RoleManager, SignInManager, IdentityResult

JWT is a token, which means that the main purpose of its existence is to carry a set of claims from the issuing authority 
to the requestor and from the requestor to the RP


Swagger

## Frontend React
Implemented protected route component for authenticated route.
The front end looks like:

![admin](https://github.com/blessedneelesh/jwtAuthentication_CSharp_React/assets/54150796/55e7054f-c53a-4c65-ac94-7826e469926b)


## Technology

React 18.2.0------> useState, useEffect, useContext

react-router-dom ^6.21.2

axios 1.6.5 



