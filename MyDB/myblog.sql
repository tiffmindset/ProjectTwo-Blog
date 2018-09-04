create database myblog;
use myblog;
create table blog(pdate DATE, title VARCHAR(256) CHARACTER SET utf8, content VARCHAR(5000) CHARACTER SET utf8);

select * from blog;

insert into blog (pdate, title, content) values ('2018-08-18', 'my first blog', 'my first blog content');
commit;

use myblog;
drop table blog;
create table blog(id int primary key auto_increment, pdate DATE, title VARCHAR(256) CHARACTER SET utf8, content VARCHAR(5000) CHARACTER SET utf8);
