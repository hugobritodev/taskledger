<!-- File: docs/architecture.md -->
# 🏛️ Detalhes da Arquitetura

## 📌 Objetivo do Documento
Este documento fornece detalhes sobre a arquitetura do projeto, incluindo diagramas e explicações sobre a escolha de tecnologias e padrões de design.

## 🔍 Visão Geral da Arquitetura
TaskLedger segue **princípios modernos de arquitetura** para garantir escalabilidade e manutenção eficiente.  
A organização do código foi planejada para facilitar **integração com IA para manutenções evolutivas**.

### 🔹 **Camadas**
✔ **Front-End**: React + TailwindCSS + Shadcn  
✔ **Back-End**: NestJS + TypeORM  
✔ **Banco de Dados**: PostgreSQL  
✔ **Infraestrutura**: Docker + Kubernetes (GKE)  

### 🔹 **Princípios e Padrões**
✔ **Arquitetura Hexagonal** (separação de domínio, aplicação e infraestrutura)  
✔ **SOLID e Clean Code**  
✔ **Modularização e reuso**  

📚 Consulte [`docs/devops.md`](devops.md) para detalhes sobre **deploy e infraestrutura**.