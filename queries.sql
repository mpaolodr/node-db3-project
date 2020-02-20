-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT p.productname, c.categoryname
FROM Product as p
    JOIN Category as c
    ON p.categoryid = c.id;


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o.id, s.companyname
FROM [Order] as o
    JOIN Shipper as s
    ON o.shipvia = s.id
WHERE o.orderdate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT p.productname, o.quantity
FROM OrderDetail as o
    JOIN Product as p
    ON o.productid = p.id
WHERE o.orderid = 10251
ORDER BY p.productname;


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o.id as [Order ID], c.companyname as [Company Name], e.lastName as [Employee Lastname]
FROM [Order] as o
    JOIN Customer as c
    ON o.customerid = c.id
    JOIN Employee as e
    ON o.employeeid = e.id;


-- STRETCH 

-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.


SELECT c.categoryname, count(p.productid)
FROM Products as p
    JOIN Categories as c
    ON p.categoryid = c.categoryid
group by c.categoryname

-- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT o.orderid as [OrderID], count(od.quantity) as [ItemCount]
FROM [OrderDetails] as od
    JOIN [Orders] as o
    ON o.orderid = od.orderid
GROUP BY od.orderid;