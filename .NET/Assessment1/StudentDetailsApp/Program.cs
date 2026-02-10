using System;
using System.Collections.Generic;

class StudentDetails
{
    public int StudentId;
    public string Name;
    public string Department;
    public int Marks;
}

class Program
{
    static void Main()
    {
        List<StudentDetails> students = new List<StudentDetails>();

        // STEP 1: Accept student details
        Console.Write("Enter number of students: ");
        int count = Convert.ToInt32(Console.ReadLine());

        for (int i = 0; i < count; i++)
        {
            Console.WriteLine($"\nEnter details for Student {i + 1}");

            StudentDetails student = new StudentDetails();

            Console.Write("Student ID: ");
            student.StudentId = Convert.ToInt32(Console.ReadLine());

            Console.Write("Name: ");
            student.Name = Console.ReadLine();

            Console.Write("Department: ");
            student.Department = Console.ReadLine();

            Console.Write("Marks: ");
            student.Marks = Convert.ToInt32(Console.ReadLine());

            students.Add(student);
        }

        int choice;

        do
        {
            Console.WriteLine("\n========= MENU =========");
            Console.WriteLine("1. Display all student records");
            Console.WriteLine("2. Display only Name and Department");
            Console.WriteLine("3. Display students with marks > 75");
            Console.WriteLine("4. Display students from specific department");
            Console.WriteLine("5. Sort students by marks (Descending)");
            Console.WriteLine("6. Display Top Scorer");
            Console.WriteLine("7. Exit");
            Console.Write("Enter your choice: ");

            choice = Convert.ToInt32(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    Console.WriteLine("\n--- All Student Records ---");
                    foreach (var s in students)
                    {
                        Console.WriteLine(
                            $"ID: {s.StudentId}, Name: {s.Name}, Department: {s.Department}, Marks: {s.Marks}");
                    }
                    break;

                case 2:
                    Console.WriteLine("\n--- Name and Department ---");
                    foreach (var s in students)
                    {
                        Console.WriteLine($"Name: {s.Name}, Department: {s.Department}");
                    }
                    break;

                case 3:
                    Console.WriteLine("\n--- Students with Marks > 75 ---");
                    bool found = false;
                    foreach (var s in students)
                    {
                        if (s.Marks > 75)
                        {
                            Console.WriteLine($"Name: {s.Name}, Marks: {s.Marks}");
                            found = true;
                        }
                    }
                    if (!found)
                        Console.WriteLine("No students found.");
                    break;

                case 4:
                    Console.Write("\nEnter department: ");
                    string dept = Console.ReadLine();
                    bool deptFound = false;

                    Console.WriteLine($"\n--- Students from {dept} Department ---");
                    foreach (var s in students)
                    {
                        if (s.Department.Equals(dept, StringComparison.OrdinalIgnoreCase))
                        {
                            Console.WriteLine($"Name: {s.Name}, Marks: {s.Marks}");
                            deptFound = true;
                        }
                    }
                    if (!deptFound)
                        Console.WriteLine("No students found in this department.");
                    break;

                case 5:
                    Console.WriteLine("\n--- Sorted by Marks (Descending) ---");
                    List<StudentDetails> sortedStudents = new List<StudentDetails>(students);
                    sortedStudents.Sort((a, b) => b.Marks.CompareTo(a.Marks));

                    foreach (var s in sortedStudents)
                    {
                        Console.WriteLine($"Name: {s.Name}, Marks: {s.Marks}");
                    }
                    break;

                case 6:
                    Console.WriteLine("\n--- Top Scorer ---");
                    StudentDetails top = students[0];
                    foreach (var s in students)
                    {
                        if (s.Marks > top.Marks)
                            top = s;
                    }
                    Console.WriteLine(
                        $"ID: {top.StudentId}, Name: {top.Name}, Department: {top.Department}, Marks: {top.Marks}");
                    break;

                case 7:
                    Console.WriteLine("Exited program...");
                    break;

                default:
                    Console.WriteLine("Invalid choice! Try again.");
                    break;
            }

        } while (choice != 7);
    }
}
