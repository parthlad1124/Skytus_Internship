using System;

namespace StudentApp
{
    public class Student
    {
        // Properties (Encapsulation)
        public int StudentId { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }
        public int Year { get; set; }
        public int Marks { get; set; }

        // Constructor
        public Student(int studentId, string name, string department, int year, int marks)
        {
            StudentId = studentId;
            Name = name;
            Department = department;
            Year = year;
            Marks = marks;
        }
    }
}
