using System;
using System.Text;
using CronExpressionDescriptor;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;

namespace cron.api
{
    public static class DescribeExpression
    {
        [FunctionName("DescribeExpression")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get",
             Route = "DescribeExpression/{expression}")] HttpRequest req,
             string expression,
             ILogger log)
        {
            expression = Encoding.UTF8.GetString(Convert.FromBase64String(expression));
            log.LogInformation($"expression: {expression}");
            return new OkObjectResult(ExpressionDescriptor.GetDescription(expression, new Options
            {
                ThrowExceptionOnParseError = false
            }));
        }
    }
}
