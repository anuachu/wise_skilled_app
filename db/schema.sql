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
('Retired Gardener', 'Retired gardener with expertise in lawn maintainence, weed control and roses', 'Salisbury, SA', 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 23.50, '0468344566', 'test'),

('Painter looking for more work', 'Painter looking to slow down and do smaller jobs, have 25 ywears experience acorss all areas.', 'Glenelg, SA', 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 21.25, '0468377898', 'test'),

('Mechanic with some free time.', 'Looking to do a few small jobs while i am semi retired.', 'Glenelg, SA', 'https://images.unsplash.com/photo-1567093322503-341d262ad8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 29.80, '0468370099', 'test');
