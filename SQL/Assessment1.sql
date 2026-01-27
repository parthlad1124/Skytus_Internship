-- create database StudentDB;
use StudentDB;

create table students(
	student_id INT PRIMARY KEY,
	name VARCHAR(50),
	department VARCHAR(30),
	year INT,
	marks INT);

INSERT INTO students VALUES
(1,'Parth','CSE','4','98'),
(2,'Taksh','CSE','4','97'),
(3,'Daksh','CE','2','96'),
(4,'Kirtan','IT','3','95'),
(5,'Harry','IT','4','94'),
(6,'Vishesh','CE','4','93'),
(7,'Ansh','CSE','4','70'),
(8,'Jay','IT','3','65');

-- 1. Display all student records
Select * from students;

-- 2. Display only name and department
select name, department from students;

-- 3. Display students with marks greater then 75
select * from students where marks > 75;

-- 4. Display students from CSE department
select * from students where department = 'CSE';

-- 5. Sort students by marks (Descending)
select * from students order by marks desc;

-- 6. Display Top 3 scorers
select top 3 * from students order by marks desc;