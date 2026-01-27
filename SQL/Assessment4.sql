use company_db

-- emp earning more than avg salary
select emp_name, salary from employees
where salary > (select avg(salary) from employees);

-- find dept with highest total salary
select top 1 d.dept_name, sum(e.salary) as total_salary from employees e
join departments d
on e.dept_id = d.dept_id
group by d.dept_name
order by total_salary desc;

-- Display employee with 2nd highest salary
Select emp_name, salary from employees
order by salary desc
offset 1 rows
fetch next 1 rows only;

-- Display emp working in same dept as 'Amit'
select emp_name from employees
where dept_id = (
select dept_id from employees where emp_name = 'Amit');