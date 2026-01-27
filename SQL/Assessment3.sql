create database company_db;
use company_db;

create table employees(
emp_id int primary key,
emp_name varchar(50),
dept_id int,
salary int);

create table departments(
dept_id int primary key,
dept_name varchar(50));

insert into departments values
(1, 'HR'),
(2, 'IT'),
(3, 'Finance');

insert into employees values
(101, 'Parth', 2, 70000),
(102, 'Harry', 2, 65000),
(103, 'Daksh', 1, 35000),
(104, 'Vishesh', 3, 40000),
(105, 'Ansh', 3, 52000),
(106, 'Jenish', 1, 56000),
(107, 'Ved', 2, 50000),
(108, 'Keval', NULL, 69000);


-- Display emp name with dept name
select e.emp_name, d.dept_name
from employees e
inner join departments d
on e.dept_id = d.dept_id;

-- Display emp earning more than 50k
select emp_name, salary from employees where salary > 50000;

-- Display dept-wise total salary
select d.dept_name, sum(e.salary) as total_salary
from employees e
inner join departments d
on d.dept_id = e.dept_id
group by d.dept_name;

-- display departments with more than 2 employees
select d.dept_name, count(e.emp_id) as total_emp 
from employees e
inner join departments d
on e.dept_id  = d.dept_id
group by d.dept_name
having count(e.emp_id) > 2;

-- display employees without a department
select emp_name from employees
where dept_id is NULL;



