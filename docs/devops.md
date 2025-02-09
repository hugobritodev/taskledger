<!-- File: docs/devops.md -->
# 🚀 Práticas de DevOps

## 📌 Objetivo do Documento
Definir processos e ferramentas para **automação de deploy, CI/CD e monitoramento**.

## 🔹 Automação CI/CD
✔ **GitHub Actions**: Pipeline de build, testes e deploy  
✔ **Docker e Kubernetes**: Containerização e orquestração  
✔ **Monitoramento**: Prometheus + Grafana  

### 🔹 **Fluxo de CI/CD**
1. O código é enviado para o GitHub (`git push`).  
2. O pipeline CI/CD executa **testes automatizados**.  
3. Se aprovado, a imagem Docker é gerada e enviada para o **GCP**.  
4. O Kubernetes aplica as novas versões automaticamente.  

📚 Consulte [`docs/architecture.md`](architecture.md) para detalhes sobre a estrutura.