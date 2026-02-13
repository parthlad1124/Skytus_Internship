using Microsoft.AspNetCore.Mvc;
using MVCBasicApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace MVCBasicApp.Controllers
{
    public class StudentController : Controller
    {
        private List<Student> students = new List<Student>
        {
            new Student { Id = 1, Name = "Parth", Course = "CSE", Marks = 85 },
            new Student { Id = 2, Name = "Rahul", Course = "IT", Marks = 90 },
            new Student { Id = 3, Name = "Sneha", Course = "CSE", Marks = 88 }
        };

        // Display all students
        public IActionResult Index()
        {
            return View(students);
        }

        // Display single student by Id
        public IActionResult Details(int id)
        {
            var student = students.FirstOrDefault(s => s.Id == id);

            if (student == null)
                return NotFound();

            return View(student);
        }

        // Display top students (Marks > 85)
        public IActionResult TopStudents()
        {
            var topStudents = students.Where(s => s.Marks > 85).ToList();
            return View(topStudents);
        }
    }
}
