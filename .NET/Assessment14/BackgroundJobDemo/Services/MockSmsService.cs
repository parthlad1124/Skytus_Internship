using Microsoft.Extensions.Logging;

namespace BackgroundJobDemo.Services
{
    public class MockSmsService : ISmsService
    {
        private readonly ILogger<MockSmsService> _logger;

        public MockSmsService(ILogger<MockSmsService> logger)
        {
            _logger = logger;
        }

        public Task SendSmsAsync(string phoneNumber, string message)
        {
            // Simulating SMS sending
            _logger.LogInformation("SMS sent to {phoneNumber}: {message}", phoneNumber, message);

            return Task.CompletedTask;
        }
    }
}