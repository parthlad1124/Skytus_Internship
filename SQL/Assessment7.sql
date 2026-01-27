create database EcommerceDB;
use EcommerceDB;

-- CUSTOMERS TABLE
create table customers (
customer_id int primary key,
name varchar(50),
city varchar(50)
);

-- ORDERS TABLE
create table orders(
order_id int primary key,
customer_id int,
order_date DATE,
amount Decimal(10,2),
foreign key (customer_id) 
references customers(customer_id)
);

-- PRODUCTS TABLE
create table products(
product_id int primary key,
product_name varchar(100),
price decimal(10,2)
);

-- ORDER_ITEMS TABLE
create table order_items(
order_id int,
product_id int,
quantity int,
primary key (order_id, product_id),
foreign key (order_id) references orders(order_id),
foreign key (product_id) references products(product_id)
);

insert into customers values
(1,'Parth','Navsari'),
(2,'Harry','Valsad'),
(3,'Daksh','Surat'),
(4,'Ansh','Vadodara'),
(5,'Het','Valsad');


insert into products values
(101,'Laptop',95000),
(102,'Mobile',60000),
(103,'Smart Watch',15000),
(104,'Headphones',5000),
(105,'Keyboard',1000);

insert into orders values
(1001,1,'2026-01-11',95000),
(1002,2,'2025-12-01',60000),
(1003,1,'2026-01-13',15000),
(1004,3,'2025-11-01',10000),
(1005,4,'2026-01-15',60000);
select *from orders;
insert into order_items values
(1001,101,1),
(1001,102,1),
(1002,102,1),
(1003,103,1),
(1004,101,1),
(1005,104,1);


-- Total orders per customer
select c.customer_id,
c.name,
count(o.order_id) as total_orders
from customers c
left join orders o
on c.customer_id = o.customer_id
group by c.customer_id, c.name;

-- Customer who never places an order
select c.customer_id,
c.name
from customers c
left join orders o
on c.customer_id = o.customer_id
where o.order_id is NULL;

-- Highest selling product
select top 1 p.product_name,
sum(oi.quantity) as total_sold
from products p
join order_items oi
on p.product_id = oi.product_id
group by p.product_name 
order by total_sold desc;

-- Monthly sales report
select year(order_date) as year,
month(order_date) as month,
sum(amount) as total_sales
from orders
group by year(order_date),
month(order_date)
order by year, month;

--Customer with total purchase
select c.name,
sum(o.amount) as total_purchase
from customers c
join orders o
on c.customer_id = o.customer_id
group by c.name
having sum(o.amount) > 50000;

-- Top 3 cities by revenue
select top 3 c.city,
sum(o.amount) as total_revenue
from customers c
join orders o
on c.customer_id = o.customer_id
group by c.city
order by total_revenue desc;