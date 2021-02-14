using CronExpressionDescriptor;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;

namespace cron.api
{
    public static class DescribeExpression
    {
        [FunctionName("DescribeExpression")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "DescribeExpression")] HttpRequest req)
        {
            return new OkObjectResult(ExpressionDescriptor.GetDescription(req.Query["expression"], new Options
            {
                ThrowExceptionOnParseError = false
            }));
        }
    }
}
