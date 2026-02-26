using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.File("Logs/log-.txt",
                  rollingInterval: RollingInterval.Day,
                  retainedFileCountLimit: 7)
    .CreateLogger();

builder.Host.UseSerilog();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHostedService<BackgroundJobDemo.Services.NotificationBackgroundService>();

builder.Services.Configure<BackgroundJobDemo.Models.EmailSettings>(
    builder.Configuration.GetSection("EmailSettings"));

builder.Services.AddTransient<BackgroundJobDemo.Services.EmailService>();

builder.Services.AddTransient<BackgroundJobDemo.Services.ISmsService, BackgroundJobDemo.Services.MockSmsService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapGet("/", async context =>
{
    var html = @"
    <!DOCTYPE html>
    <html>
    <head>
        <title>Background Job Demo</title>
        <style>
            body {
                font-family: Arial;
                text-align: center;
                margin-top: 100px;
                background-color: #c5d3df
            }
            button {
                padding: 15px 30px;
                font-size: 18px;
                background-color: #28a745;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
            }
            button:hover {
                background-color: #218838;
            }
        </style>
    </head>
    <body>
        <h1>Background Job Demo</h1>
        <p>Click below to open Swagger UI</p>
        <button onclick=""location.href='/swagger'"">Open Swagger</button>
    </body>
    </html>";

    context.Response.ContentType = "text/html";
    await context.Response.WriteAsync(html);
});



app.Run();


