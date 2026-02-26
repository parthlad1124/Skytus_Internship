using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace BackgroundJobDemo.Services
{
    public class NotificationBackgroundService : BackgroundService
    {
        private readonly ILogger<NotificationBackgroundService> _logger;
        private readonly EmailService _emailService;
        private readonly ISmsService _smsService;

        public NotificationBackgroundService(ILogger<NotificationBackgroundService> logger,  EmailService emailService,  ISmsService smsService)
        {
            _logger = logger;
            _emailService = emailService;
            _smsService = smsService;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("Notification Background Service Started.");

            while (!stoppingToken.IsCancellationRequested)
            {
                var startTime = DateTime.UtcNow;

                _logger.LogInformation("Background Job Triggered at: {Time}", startTime);

                try
                {
                    // -------- EMAIL BLOCK --------
                    try
                    {
                        await _emailService.SendEmailAsync(
                            "yourgmail@gmail.com",
                            "Background Job Notification",
                            $"Job executed at {DateTime.Now}"
                        );

                        _logger.LogInformation("Email sent successfully at {Time}", DateTime.UtcNow);
                    }
                    catch (Exception emailEx)
                    {
                        _logger.LogError(emailEx, "Email sending failed.");
                    }

                    // -------- SMS BLOCK --------
                    try
                    {
                        await _smsService.SendSmsAsync(
                            "+919999999999",
                            $"Background job executed at {DateTime.Now}"
                        );

                        _logger.LogInformation("SMS sent successfully at {Time}", DateTime.UtcNow);
                    }
                    catch (Exception smsEx)
                    {
                        _logger.LogError(smsEx, "SMS sending failed.");
                    }

                    var endTime = DateTime.UtcNow;
                    var duration = endTime - startTime;

                    _logger.LogInformation("Background Job Completed in {Duration} ms",
                        duration.TotalMilliseconds);
                }
                catch (Exception ex)
                {
                    _logger.LogCritical(ex, "Unexpected error in background job.");
                }

                await Task.Delay(TimeSpan.FromSeconds(10), stoppingToken); // change back to 1 min later
            }

            _logger.LogInformation("Notification Background Service Stopped.");
        }
    }
}