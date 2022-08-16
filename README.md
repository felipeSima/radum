## Radum App

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)


## Descrição
O maior app de contribuição

**Table of Contents**

- [Flash App](#flash-app)
- [Descrição](#descri--o)
- [Detalhes do projeto](#detalhes-do-projeto)
- [Modularização](#modulariza--o)
    + [**📈 Prós**](#-----pr-s--)
    + [**📉 Contras**](#-----contras--)
- [Arquitetura](#arquitetura)
    + [Dados](#dados)
    + [Domínio](#dom-nio)
    + [Apresentação](#apresenta--o)
- [Instalando e rodando o projeto](#instalando-e-rodando-o-projeto)
- [Contribuição](#contribui--o)
      - [Criando uma Feature Branch](#criando-uma-feature-branch)
      - [Abrindo uma Pull request](#abrindo-uma-pull-request)
      - [Acompanhando o deploy da Branch](#acompanhando-o-deploy-da-branch)
- [Publicação de Versões](#publica--o-de-vers-es)
- [Leituras adicionais](#leituras-adicionais)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## Detalhes do projeto
Esse projeto foi estruturado utilizando react native como principal framework de desenvolvimento.

## Modularização
A modularização de projeto nada mais é do que um padrão de software adotado para separar uma grande aplicação em pequenas aplicações conectadas através de dependências.

#### **📈 Prós**
---
- Build time mais performático
- Produtividade entre equipes de engenharia
- Facilidade de testes
- Reutilização de base de código
- Eficiência

#### **📉 Contras**
---
- Gerenciamento dos módulos
- Curva de aprendizado
- Padronização de bibliotecas core
- Percepção

## Arquitetura
Estruturado com base na arquitetura Clean e no padrão de design MVVM. Esta escolha permitiu uma maior facilidade no uso de interoperabilidade entre frameworks nativos e híbridos como também uma maior segurança nos processos de manutenção, refatoração e testabilidade.

Como a arquitetura limpa sugere, este projeto é construído em 3 pilares: 
As camadas de dados, domínio e apresentação.

#### Dados
A camada de dados foi projetada para lidar com todas as solicitações de fontes de dados (remotos ou locais). Então aqui é o local onde serão implementadas as chamadas de API, queries de GraphQl e estruturações dos modelos de dados.

#### Domínio
A Camada de Domínio foi projetada para gerenciar toda a lógica de negócios de um recurso específico como também servir de interface para decisão de onde deve vir os dados. É também aqui que o ResponseModel é convertido em uma Estrutura de Dados mais adequada conhecida como Entidade.

#### Apresentação
A camada de apresentação foi projetada para ter todos os arquivos necessários para construir a renderização das telas. É aqui que vão se encontrar os arquivos de construção de telas, estilização e criação de componentes como também recursos exclusívos de cada feature. 

## Instalando e rodando o projeto
Para inicializar o projeto basta ir até a raiz do mesmo e rodar comando:
				
	yarn
Ele será responsável por baixar e instalar todas as dependências utilizadas pelo mesmo.
Quando o comando for finalizado basta então rodar o comando:
				
	 // Para rodar num emulador android
	 yarn android
ou
				
	// Para rodar num simulador ios 
	yarn ios 
PS: Para rodar num simulador de iphone é necessário estar utilizando um mac.

## Contribuição
Para contribuir com o projeto é necessário primeiramente fazer a criação de uma nova branch a partir da Dev.

##### Criando uma Feature Branch

##### Abrindo uma Pull request

##### Acompanhando o deploy da Branch

## Publicação de Versões
O flashapp faz uso de um CI/CD que roda pipelines de publicação. De maneira trivial o fluxo a ser seguido é:


## Leituras adicionais
Para informações mais detalhadas a respeito de alguns dos padrões e documentações a respeito do projeto, segue uma lista de acesso exclusivo para emails flash cadastrados no notion da empresa. 

[Modularização de Projeto](https://www.notion.so/flashapp/FlashApp-M-dulo-e80f4c2130ed49c4a5c9533057605bdd)
[Arquitetura](https://www.notion.so/flashapp/EX-Employee-Experience-48018ee7fbd84656af5d84650f1db74f?p=070c102875c94d3c9490f35a9adac750&pm=s)
[Localização](https://www.notion.so/flashapp/FlashApp-Localization-e3d833e7f97e4fc5ae0ee85190beef12)
[Injeção de dependência](https://www.notion.so/flashapp/FlashApp-Inje-o-de-depend-ncia-1471f39ba9f14757b7a45ea3f583aaa9)
