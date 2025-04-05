-- Author: Ruth Shepard
-- CS 341 - HW5: Cheesecake Ordering Database Setup

-- Create database
CREATE DATABASE IF NOT EXISTS shepardr25_db;
USE shepardr25_db;

-- Create toppings table
CREATE TABLE toppings (
    t_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price FLOAT
);

-- Insert initial topping values
INSERT INTO toppings (name, price) VALUES
('plain', 9.99),
('vegan', 11.50),
('chocolate', 12.10),
('cherry', 14.95);

-- Create orders table
CREATE TABLE orders (
    o_id INT AUTO_INCREMENT PRIMARY KEY,
    t_id INT,
    quantity INT,
    notes VARCHAR(3000),
    month INT,
    year INT,
    FOREIGN KEY (t_id) REFERENCES toppings(t_id)
);

-- Insert initial order values
INSERT INTO orders (t_id, quantity, notes, month, year) VALUES
(1, 2, 'extra sprinkles', 1, 2023),
(2, 1, 'no sprinkles', 2, 2023),
(3, 3, 'extra chocolate', 3, 2023),
(1, 4, 'no sprinkles', 4, 2023),
(2, 5, 'extra sprinkles', 5, 2023),
(3, 6, 'no sprinkles', 6, 2023);
