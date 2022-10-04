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
  contact, TEXT
)