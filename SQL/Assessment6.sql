create table accounts(
acc_id int,
acc_holder_name varchar(50),
balance decimal(10,2));

insert into accounts values
(101,'Parth', 59000),
(102, 'Amit', 60000),
(103,'Sanjay',55000),
(104, 'Darshan',45000);

-- Start Transaction
begin transaction;

--Insert records into Accounts
insert into accounts values
(105,'Ansh',40000);

--Rollback Changes
rollback;

-- Commit valid transactions
begin transaction;
insert into accounts values
(105,'Ansh',50000);
commit;

-- Demonstrate money transfer using Transaction
Begin Transaction;
Update accounts
set balance = balance - 5000
where acc_id = 103;

update accounts
set balance = balance + 5000
where acc_id = 102;

commit;

select * from accounts;