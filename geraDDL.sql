rollback;
begin;

drop table if exists doar;
drop table if exists classificacao;
drop table if exists produto;
drop table if exists pessoa_fisica;
drop table if exists pessoa_juridica;
drop table if exists usuario;
drop table if exists pessoa;
drop table if exists status;
drop table if exists periodo;
drop table if exists turno;

CREATE TABLE usuario 
( 
 id serial PRIMARY KEY,  
 id_pessoa INT,  
 nome_user VARCHAR(50),  
 password VARCHAR(50)  
); 

CREATE TABLE produto 
( 
 id serial PRIMARY KEY,  
 descricao VARCHAR(50)  
); 

CREATE TABLE classificacao 
( 
 id INT PRIMARY KEY,  
 descricao VARCHAR(50)  
); 

CREATE TABLE status 
( 
 id INT PRIMARY KEY,  
 descricao VARCHAR(50)  
); 

CREATE TABLE pessoa 
( 
 id serial PRIMARY KEY,  
 nome VARCHAR(50),  
 telefone VARCHAR(50),  
 celular VARCHAR(50),  
 estado VARCHAR(50),  
 cidade VARCHAR(50),  
 logradouro VARCHAR(50),  
 numero VARCHAR(50)  
); 

CREATE TABLE pessoa_fisica 
( 
 id serial PRIMARY KEY,  
 id_pessoa INT,  
 nome VARCHAR(50),  
 cpf VARCHAR(11),
 dt_nascimento DATE  
); 

CREATE TABLE pessoa_juridica 
( 
 id serial PRIMARY KEY,  
 id_pessoa INT,  
 nome_fantasia VARCHAR(50),  
 cnpj VARCHAR(15)  
); 


CREATE TABLE periodo
( 
 id INT PRIMARY KEY,  
 descricao VARCHAR(50)
); 

CREATE TABLE turno
( 
 id INT PRIMARY KEY,  
 descricao VARCHAR(50)
); 

CREATE TABLE doar 
( 
 id serial PRIMARY KEY,  
 id_produto INT,  
 id_classificacao INT,  
 id_status INT,  
 id_usuario INT,  
 id_periodo INT,
 id_turno INT,
 estado VARCHAR(50),  
 cidade VARCHAR(50),  
 logradouro VARCHAR(50),  
 numero INT,  
 dt_inicio DATE,  
 dt_final DATE,  
 localizacao_geo VARCHAR(50),  
 longitude VARCHAR(50),  
 latitude VARCHAR(50) 
); 

ALTER TABLE doar ADD FOREIGN KEY(id_produto)       REFERENCES produto (id);
ALTER TABLE doar ADD FOREIGN KEY(id_classificacao) REFERENCES classificacao (id);
ALTER TABLE doar ADD FOREIGN KEY(id_status)        REFERENCES status (id);
ALTER TABLE doar ADD FOREIGN KEY(id_usuario)       REFERENCES usuario (id);
ALTER TABLE doar ADD FOREIGN KEY(id_periodo)       REFERENCES periodo (id);
ALTER TABLE doar ADD FOREIGN KEY(id_turno)         REFERENCES turno (id);

ALTER TABLE pessoa_juridica ADD FOREIGN KEY(id_pessoa) REFERENCES pessoa (id);
ALTER TABLE pessoa_fisica   ADD FOREIGN KEY(id_pessoa) REFERENCES pessoa (id);

ALTER TABLE usuario ADD FOREIGN KEY(id_pessoa) REFERENCES pessoa (id);

--rollback;
commit;