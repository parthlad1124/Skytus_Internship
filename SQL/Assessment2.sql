use StudentDB

-- Total number of Students
Select count(*) as total_students from students;

-- Average marks of Students
Select avg(marks) as average_marks from students;

-- Find Highest and Lowest marks
select max(marks) as highest_marks, 
min(marks) as lowest_marks from students;

-- Find dept-wise avg marks
select department, avg(marks) as avg_marks from students 
group by department;

-- Display dept where avg marks is > 70
select department, avg(marks) as avg_marks from students 
group by department 
having avg(marks) > 70;