-- Add index to improve search on orders.customer_id
create index idx_orders_customer_id
on orders(customer_id);

-- Use explain to analyze a query

select * from orders
where customer_id = 1;

-- Optimize a slow join query

create index idx_customers_city
on customers(city);

select c.name, o.amount
from customers c
join orders o
on c.customer_id = o.customer_id
where c.city = 'Surat';

-- When index Should not be used
select *
from orders
where order_date between '2025-01-01' and '2025-12-31';

select *
from customers
where city in ('Surat', 'Vadodara');

