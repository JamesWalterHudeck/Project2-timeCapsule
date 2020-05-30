CREATE DATABASE IF NOT timeCapsule;
USE DATABASE timeCapsule;
INSERT INTO timecapsule.users (id, email, password,createdAt, updatedAt)
Values (1, "j@j.com", "123", current_timestamp(), current_timestamp());
USE DATABASE timeCapsule;
INSERT into timecapsule.capsules (id, capsuleName, capsuleCode , note, createdAt, updatedAt, UserId)
Values (1, 'test', '123', 'test', current_timestamp(), current_timestamp(), 1);