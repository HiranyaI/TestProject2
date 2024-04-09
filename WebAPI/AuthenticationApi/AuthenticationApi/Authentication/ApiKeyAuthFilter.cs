﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace AuthenticationApi.Authentication
{
    public class ApiKeyAuthFilter : IAuthorizationFilter
    {
        private readonly IConfiguration _configuration;

        public ApiKeyAuthFilter(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {

            if (!context.HttpContext.Request.Headers.TryGetValue(AuthConstants.ApiKeyHeaderName, out
                var extractedApiKey))
            {
                context.Result = new UnauthorizedObjectResult("Api Key missing");
                return;
            }

            var apiKey = _configuration.GetValue<string>(AuthConstants.ApiKeySectionName);
            /*if (!apiKey.Equals(extractedApiKey))
            {
                context.Result = new UnauthorizedObjectResult("Invalid Api Key");
                return;
            }*/
            if (apiKey == null)
            {
                context.Result = new UnauthorizedObjectResult("API key is not configured");
                return;
            }

            if ( !apiKey.Equals(extractedApiKey))
            {
                context.Result = new UnauthorizedObjectResult("Invalid Api Key");
                return;
            }

        }


    }
}
