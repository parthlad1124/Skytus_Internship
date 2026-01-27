-- create table users - primary key, unique email, not null password
create table users(
user_id int primary key,
name varchar(50),
email varchar(50) unique,
password varchar(100) not null);

-- Add foreign key btw orders and users
create table orders(
order_id int primary key,
user_id int,
order_amount int,
order_date DATE,
foreign key (user_id) references users(user_id));

insert into users (user_id, name, email, password) values
(1, 'Parth',  'parth@gmail.com',  'parth@123'),
(2, 'Amit', 'amit@gmail.com', 'amit@123'),
(3, 'Harry',  'harry@gmail.com',  'harry@123'),
(4, 'Joy',  'joy@gmail.com',  'joy@123');


insert into orders (order_id, user_id, order_amount, order_date) values
(101, 1, 2500, '2026-01-10'),
(102, 4, 1800, '2026-01-15'),
(103, 2, 5000, '2026-01-20'),
(104, 3, 3200, '2026-01-25'),
(105, 3, 1500, '2026-01-28');


-- create index on email column
create index idx_users_email
on users(email);

-- create view to display user order summary
create view user_order_summary as 
	select u.user_id, u.name, u.email, 
	count(o.order_id) as total_orders,
	sum(o.order_amount) as total_amount
from users u
left join orders o
on u.user_id = o.user_id
group by u.user_id, u.name, u.email;

select * from user_order_summary;