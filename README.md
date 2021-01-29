# Aplicativo

**Screenshots:**
 <a href="https://ibb.co/bJmvdzW"><img src="https://i.ibb.co/cL38TDg/tela-Loading.jpg" alt="tela-Loading" border="0"></a>
<a href="https://ibb.co/nbrcgys"><img src="https://i.ibb.co/XbXs2PZ/tela-Result.jpg" alt="tela-Result" border="0"></a>

**Video:** [LINK YOUTUBE](https://www.youtube.com/watch?v=cvTBzU686OY&ab_channel=ReinaldoNeto)


# Arquitetura

A aplicação deve rodar com os componentes de forma independente e desacoplados uns dos outros, permitindo que caso uma seção da aplicação fique indisponível não pare a aplicação.

## Programação Funcional

A base da programação funcional descreve que *as funções devem se manter isoladas e incapazes de impactar outras partes do sistema.* Funções puras são estáveis, consistentes e previsíveis. A baixo segue um conceito básico sobre programação funcional.<br />

```javascript
// Função não pura:

const PI = 3.14;
const calculateAreaNotPure = (radius) => radius * radius * PI;
calculateAreaNotPure(10); // 314.0
```

```javascript
// Função pura:

const PI = 3.14;
const calculateAreaPure = (radius, pi) => radius * radius * pi;
calculateAreaPure(10, PI); // 314.0
```

<br />

### Imutabilidade

A imutabilidade do código, significa que apos a criação o estado não pode ser alterado. Para alterar um estado imutável, deve se criar um estado com um novo valor.<br />

```javascript
// Imutabilidade:

let list = [1, 2, 3, 4, 5];
let accumulator = 0;

const sum = (list, accumulator) => {
  if (list.length === 0) return accumulator;
  return sum(list.slice(1), accumulator + list[0]);
};

sum(list, accumulator); // 15
list; // [1, 2, 3, 4, 5]
accumulator; // 0
```

<br />

### Transparência referencial

Transparência referencial, a função da uma mesma entrada produzira uma mesma saída. Pode se afirmar que: **funções puras + imutabilidade  = transparência referencial**.<br />

```javascript
// Tranparência referencial:

const square = (n) => n * n;

square(2); // 4
square(4); // 16
square(8); // 64
```

<br />

# Aplicando os conceitos

Este tópico define como os conceitos de arquitetura serão aplicados ao escopo do **React-Native**, detalhes como de como a arquitetura será implementada:

## Dependências

- Node
- React-Native
- React-Navigation
- Styled-Components
- Styled-System
- SWR
- Axios
- Husky
- Lint-Staged
- Prettier
- Eslint
- React Native Geolocation Service

## Estrutura

A ideia é usar o **princípio da separação de preocupações** (principle of separation of concerns) para afastar a lógica de negócios das rotas, no caso as views (screens). A estrutura segue o padrão **VIPER(Views, Interactor, Presenter, Entity, Routes)** com uma adição da *models*, para armazenamento off-line e gerenciamento de dados.

```
 src
  └─ assets				# Estrutura de arquivos locais.
  └─ controller			# Regras de negócio.
  └─ dtos          # Interfaces para Typescript.
  └─ hooks				# Hooks customizados e Context.
  └─ routes				# Definação das rotas.
  └─ themes				# Atomic Design System.
  	 └─ atoms
  	 └─ molecules
  	 └─ organisms
  	 └─ templates
  	 └─ theme.js	    # Definição do tema.
  └─ utils				# Funções necessárias em diversos lugares com seu devido teste unitário.
  └─ views				# Telas da aplicação.
  └─ App.tsx			    # Index do módulo src.
```

<br />
