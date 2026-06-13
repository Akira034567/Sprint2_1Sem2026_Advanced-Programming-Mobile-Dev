# Sprint 2 - Frontend Mobile

Aplicativo mobile desenvolvido com React Native e Expo para simular o fluxo de registros industriais usando dados mockados e estado local.

## O que o app faz

- Lista registros industriais mockados.
- Permite cadastrar um novo registro.
- Salva o novo registro no estado local do aplicativo e no AsyncStorage.
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

## Dados mockados e persistencia

Os dados iniciais estao no arquivo `src/data/registros.ts` como um array fixo de `RegistroIndustrial`.

Novos registros sao criados no estado local com `useState`, dentro do `App.tsx`, e persistidos com `@react-native-async-storage/async-storage`.

Na primeira execucao, o app usa o array mockado. Depois que houver dados salvos no AsyncStorage, o app carrega esses dados locais. Nesta sprint nao existe integracao com backend, API externa ou banco de dados.

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
- `AsyncStorage`: persiste os registros criados no dispositivo/navegador.
- `src/types/RegistroIndustrial.ts`: modelagem TypeScript do dominio.
- `src/data/registros.ts`: mock inicial de dados.
- `src/components/RegistroCard.tsx`: card reutilizavel da lista.
- `src/screens/ListaRegistrosScreen.tsx`: tela de lista.
- `src/screens/CadastroRegistroScreen.tsx`: tela de cadastro.
- `src/screens/DetalheRegistroScreen.tsx`: tela de detalhe.
