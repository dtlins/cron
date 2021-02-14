using CronExpressionDescriptor;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using System;

namespace cron.api
{
    public static class DescribeExpression
    {
        [FunctionName("DescribeExpression")]
        public static IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "DescribeExpression/{expression}")] HttpRequest req, string expression)
        {
            try
            {
                return new OkObjectResult(ExpressionDescriptor.GetDescription(expression));
            }
            catch (FormatException ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
        }
    }
}
