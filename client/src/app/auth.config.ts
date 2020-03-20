import { AuthConfig } from 'angular-oauth2-oidc';

export const DiscoveryDocumentConfig = {
    url: "https://codingfreaksdaken.b2clogin.com/codingfreaksdaken.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1A_signup_signin_tenant"
}

export const authConfig: AuthConfig = {
    redirectUri: window.location.origin,
    responseType: 'token id_token',
    issuer: 'https://codingfreaksdaken.b2clogin.com/c489b3f5-294b-4838-894c-04e860a2af09/v2.0/',
    strictDiscoveryDocumentValidation: false,
    tokenEndpoint: 'https://codingfreaksdaken.b2clogin.com/codingfreaksdaken.onmicrosoft.com/oauth2/v2.0/token?p=B2C_1A_signup_signin_tenant',
    loginUrl: 'https://codingfreaksdaken.b2clogin.com/codingfreaksdaken.onmicrosoft.com/oauth2/v2.0/token?p=B2C_1A_signup_signin_tenant',
    clientId: 'c21ceda9-3252-4894-83bc-4c46ee105a64',
    scope: 'openid profile https://codingfreaksdaken.onmicrosoft.com/api/user_impersonation',
    skipIssuerCheck: true,
    clearHashAfterLogin: true,
    oidc: true,
}
