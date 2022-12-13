import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/* 
Decorator - acompla um funcionamento dentro de outra váriavel, classe, função, etc
exemplo de decorator @
Controllers - arquivos que são pontos de entrada na aplicação, por exemplo que lidam com chamadas de html, irá controlar as rotas
Services - define uma classe e funcionalidades, tem um conceito mais genérico
Inversão de Dependência - classe que recebe como parametro quando é instânciado ao invés de buscar a depêndencia por importação
Injeção de Dependência - Automatiza a inserção das dependências quando as classes são instânciadas
NestJS utiliza inversão e injeção, por ajudar com os testes
Abstract Class - 
Prisma - é um ORM
*/
