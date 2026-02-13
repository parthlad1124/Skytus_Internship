using System;
using System.Collections.Generic;

namespace StudentApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create list to store students
            List<Student> students = new List<Student>();

            // Create multiple student objects
            students.Add(new Student(1, "Parth", "CSE", 3, 85));
            students.Add(new Student(2, "Riya", "IT", 2, 72));
            students.Add(new Student(3, "Aman", "CSE", 4, 90));
            students.Add(new Student(4, "Neha", "ECE", 1, 65));
            students.Add(new Student(5, "Karan", "IT", 3, 78));

           Console.WriteLine("---- All Student Records ----");

foreach (Student s in students)
{
    Console.WriteLine($"ID: {s.StudentId}, Name: {s.Name}, Dept: {s.Department}, Year: {s.Year}, Marks: {s.Marks}");
}

Console.WriteLine("\n---- Students with Marks > 75 ----");

foreach (Student s in students)
{
    if (s.Marks > 75)
    {
        Console.WriteLine($"ID: {s.StudentId}, Name: {s.Name}, Marks: {s.Marks}");
    }
}
Console.WriteLine("\n---- Students Sorted By Marks (Ascending) ----");

// Sort students by marks (ascending)
students.Sort((s1, s2) => s1.Marks.CompareTo(s2.Marks));

foreach (Student s in students)
{
    Console.WriteLine($"ID: {s.StudentId}, Name: {s.Name}, Marks: {s.Marks}");
}
Console.WriteLine("\n---- Top 3 Scorers ----");

// Sort in descending order
students.Sort((s1, s2) => s2.Marks.CompareTo(s1.Marks));

// Display top 3
for (int i = 0; i < 3 && i < students.Count; i++)
{
    Console.WriteLine($"Rank {i + 1}: {students[i].Name} - {students[i].Marks}");
}


        }
    }
}
