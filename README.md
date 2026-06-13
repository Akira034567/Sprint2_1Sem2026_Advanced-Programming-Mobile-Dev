# Sprint 2 - Frontend Mobile

Aplicativo mobile desenvolvido com React Native e Expo para simular o fluxo de registros industriais usando dados mockados e estado local.

## O que o app faz

- Lista registros industriais mockados.
- Permite cadastrar um novo registro.
- Salva o novo registro no estado local do aplicativo.
- Exibe o registro criado na lista.
- Permite visualizar os detalhes de cada registro.

## Estrutura

```text
src/
  screens/
  components/
  types/
  data/
```

## Dados mockados

Os dados iniciais estao no arquivo `src/data/registros.ts` como um array fixo de `RegistroIndustrial`.

Novos registros sao criados apenas em memoria com `useState`, dentro do `App.tsx`. Nesta sprint nao existe integracao com backend, API externa ou banco de dados.

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o Expo:

```bash
npm start
```

Depois, abra no Expo Go ou execute em uma plataforma especifica:

```bash
npm run android
npm run ios
npm run web
```

## Principais arquivos

- `App.tsx`: controla o estado local e o fluxo entre telas.
- `src/types/RegistroIndustrial.ts`: modelagem TypeScript do dominio.
- `src/data/registros.ts`: mock inicial de dados.
- `src/components/RegistroCard.tsx`: card reutilizavel da lista.
- `src/screens/ListaRegistrosScreen.tsx`: tela de lista.
- `src/screens/CadastroRegistroScreen.tsx`: tela de cadastro.
- `src/screens/DetalheRegistroScreen.tsx`: tela de detalhe.
