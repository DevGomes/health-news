# Projeto Health News

Projeto simples de exibição de noticias com Angular 13, Bootstrap 4 e Spring Boot.
As noticias são obtidas através do consumo da API https://newsapi.org/ para isso é usado um back-end próprio em Java.

Apesar de ser totalmente possível consumir essa API diretamente do Front-end, é uma boa prática usar um back-end próprio
para consumo de APIs externas.

# Passos para Rodar o Projeto

# Back-end
1 - Rodar mvn install para instalar as dependências

2 - Configurar a propriedade api.news.key em application.properties com sua API KEY do NEWS API

3 - Rodar a classe principal


# Front-end
1 - Executar o comando npm install para instalar as dependências

2 - Executar o comando ng serve para executar a aplicação



* A API esta configurada para rodar na porta 8081
* A aplicação esta configurada por default para rodar na porta 4200
* Foi usado o node v.12.20 e NPM v.6.14.18

