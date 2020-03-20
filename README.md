# To run

- Server: dotnet run
- Client: npm start

# Configuration explain

## Azure AD B2C
- Create a new B2C tenant: here is codingfreaksdaken.b2clogin.com
- Create a new application in the B2C tenant: here is clientId = c21ceda9-3252-4894-83bc-4c46ee105a64
- Create a new scope in the application: here is https://codingfreaksdaken.onmicrosoft.com/api/user_impersonation
- Create a new sign up and sign in policy in the B2C tenant: here is B2C_1A_signup_signin_tenant

## ASP.NET Core
- dotnet add package Microsoft.AspNetCore.Authentication.AzureADB2C.UI
- Add Authentication and config CORS in Startup.cs
- Config appsettings.json

## Angular
- npm i angular-oauth2-oidc --save
- Create a new class implements AuthConfig, in file auth0.config.ts
- Config module to include the access token in the request, in file app.module.ts
- Example in file app.component.ts

# Read more
- https://about-azure.com/using-azure-ad-b2c-with-angular-8
