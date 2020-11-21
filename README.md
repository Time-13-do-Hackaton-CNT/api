# Rest Api Coletar com NodeJS

O objetivo da criação desta api é o recebimento dos dados coletados pelo app "Coletar", e integração com o sistema interno da CNT responsável por gerar o resultado da Pesquisa CNT de Rodovias, além de distribuição pública dos dados para desenvolvimento de soluções específicas. Além disso a API conta com um algoritmo específico utilizando conceitos de "mudança de estados" e "estrutura de navegação em árvore" para simplificar a coleta de dados do App e possibilitar integrações futuras usando tecnologias com modelos de Machine Learning e com sensores físicos que poderão fornecer esses mesmos dados de forma automatizada.

#### Tecnologias aplicadas

- Node.js
- Express.js
- SQLite
- TypeScript
- Yup
- Multer
- TypeORM

#### Instruções

1. yarn
2. yarn typeorm migration:run
3. yarn dev