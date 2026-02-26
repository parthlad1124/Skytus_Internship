using Microsoft.AspNetCore.Mvc;

namespace LoggingExceptionDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FileController : ControllerBase
    {
        private readonly ILogger<FileController> _logger;
        private readonly IWebHostEnvironment _environment;

        public FileController(ILogger<FileController> logger,
                              IWebHostEnvironment environment)
        {
            _logger = logger;
            _environment = environment;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                _logger.LogWarning("File upload attempted with no file.");
                return BadRequest("No file uploaded.");
            }

            // Validate file size (Max 5MB)
            if (file.Length > 5 * 1024 * 1024)
            {
                _logger.LogWarning("File size exceeded limit.");
                return BadRequest("File size cannot exceed 5MB.");
            }

            var uploadsPath = Path.Combine(_environment.ContentRootPath, "Uploads");

            if (!Directory.Exists(uploadsPath))
                Directory.CreateDirectory(uploadsPath);

            var filePath = Path.Combine(uploadsPath, file.FileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            _logger.LogInformation("File uploaded successfully: {FileName}", file.FileName);

            return Ok(new
            {
                Message = "File uploaded successfully",
                FileName = file.FileName
            });
        }

        [HttpGet("download/{fileName}")]
        public IActionResult DownloadFile(string fileName)
        {
            var uploadsPath = Path.Combine(_environment.ContentRootPath, "Uploads");
            var filePath = Path.Combine(uploadsPath, fileName);

            if (!System.IO.File.Exists(filePath))
            {
                _logger.LogWarning("Download attempted for non-existing file: {FileName}", fileName);
                return NotFound("File not found.");
            }

            var fileBytes = System.IO.File.ReadAllBytes(filePath);

            _logger.LogInformation("File downloaded successfully: {FileName}", fileName);

            return File(fileBytes, "application/octet-stream", fileName);
        }
    }
}