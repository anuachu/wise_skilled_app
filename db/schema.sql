CREATE DATABASE wise_skills_db;
\c wise_skills_db

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);

CREATE TABLE profiles(
  id SERIAL PRIMARY KEY,
  headline TEXT,
  skills_summary TEXT,
  location TEXT,
  profile_img TEXT,
  rate REAL,
  contact TEXT,
  author TEXT
);


INSERT INTO profiles(headline, skills_summary, location, profile_img, rate, contact, author)
VALUES
('Sewing Teacher', 'I am specialist in Restoring wood furniture, Wood polishes, conditioners, and refinishing products can revitalize a tired, faded wood surface.
', 'Salisbury, SA', 'https://plus.unsplash.com/premium_photo-1661495472526-2b9430880690?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 30, '0468344566', 'DemoUser'),

('Furniture restorer', 'am specialist in Restoring wood furniture, Wood polishes, conditioners, and refinishing products can revitalize a tired, faded wood surface', 'Glenelg, SA', 'https://images.unsplash.com/photo-1567615882203-818c7a0508e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80', 30, '0468377898', 'DemoUser');

