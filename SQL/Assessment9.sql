use company_db;

create table employees1(
emp_id int primary key,
emp_name varchar(50) NOT NULL,
dept_id int,
salary int,
hire_date DATE
);

insert into employees1 values
(101,'Parth',2,70000,'2025-11-12'),
(102,'Harry',2,65000,'2025-12-12'),
(103,'Daksh',1,35000,'2023-12-05'),
(104,'Vishesh',3,40000,'2024-10-20'),
(105,'Ansh',3,52000,'2025-01-05'),
(106,'Jenish',1,56000,'2024-08-18'),
(107,'Amit',2,50000,'2025-02-01'),
(108,'Keval',NULL,69000,'2024-07-12');

exec sp_rename 'dbo.emloyees1','employees1'; -- I have written table name wrongly so this query renames table correctly.

select * from employees1;

-- Find Nth Highest Salary

Declare @N int = 2; -- Change N from here
select salary from (
select salary, dense_rank() over (
order by salary desc) as rnk
from employees1
)t
where rnk = @N;

-- Remove duplicate records
with cte as(
select *, row_number() over (
partition by emp_name, dept_id, salary order by emp_id
) as rn
from employees1
)
delete from cte
where rn > 1;

-- Find employees hired in last 6 months
select * from employees1
where hire_date >= DATEADD(month, -6, GETDATE());

-- Find continuous Duplicate Salaries
select * from(
select *,lag(salary) over(order by emp_id) as prev_salary
from employees1
)t
where salary = prev_salary;

