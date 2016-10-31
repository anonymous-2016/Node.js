# codeschool SQL

http://campus.codeschool.com/courses/the-sequel-to-sql/


*********************************************************************************
*********************************************************************************

select count(*) from Actors;
select count(*) from Actors WHERE "country"="USA";


SQL, Null column will not be count!

http://campus.codeschool.com/courses/the-sequel-to-sql/level/1/section/1/counting-valid-actors

select sum(salary) from Actors;


select avg(salary) from Actors;


select max(salary) from Actors;
select min(salary) from Actors;

<!-- select max(salary) and min(salary)from Actors; -->

select max(salary), min(salary) from Actors;

Aggregates Within Clauses

select sum(salary), country from Actors GROUP BY country;

select sum(salary), country from Actors GROUP BY country HAVING count(*) >1 ;


SELECT sum(salary), country FROM Actors  WHERE "role" = "supporting" GROUP BY country HAVING count(*) >1 ;


*********************************************************************************
*********************************************************************************