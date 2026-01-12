# 🌦️ Clima App

Aplicação web de previsão do tempo desenvolvida em **HTML, CSS e JavaScript puro**, que permite buscar o clima atual e a previsão dos **próximos 7 dias** a partir do nome de uma cidade. O projeto utiliza a **API Open-Meteo**, possui **modo claro/escuro**, efeitos visuais com *glassmorphism* e ícones inspirados no **Apple Weather**.

---

## 📸 Visão Geral

- Busca de clima por cidade
- Exibição do clima atual (cidade, temperatura e ícone climático)
- Previsão do tempo para os próximos 7 dias
- Alteração dinâmica de fundo conforme o clima
- Modo **Light / Dark**
- Interface moderna, responsiva e minimalista

---

## 🚀 Funcionalidades

- 🔍 **Busca por cidade** usando geocodificação
- ☀️ **Ícones SVG no padrão Apple Weather**
- 🖼️ **Background dinâmico** de acordo com o clima
- 🌙 **Dark Mode** com alternância manual
- 📆 **Forecast semanal** com scroll horizontal
- 🧪 **Testes manuais simples** para validação da API

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura da aplicação
- **CSS3** — layout, glassmorphism e temas
- **JavaScript (ES Modules)** — lógica e integração
- **Open-Meteo API** — dados climáticos

---

## 📁 Estrutura de Pastas

```text
clima-app/
│
├── index.html              # Página principal da aplicação
├── testes.html             # Página para execução dos testes manuais
│
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos globais, dark mode e layout
│   │
│   └── js/
│       ├── main.js         # Controle principal (eventos e fluxo)
│       ├── api.js          # Comunicação com a API Open-Meteo
│       └── ui.js           # Renderização da interface e SVGs
│
├── api.test.js             # Testes manuais da função de API
└── README.md               # Documentação do projeto
```

---

## 🔄 Fluxo da Aplicação

1. O usuário digita o nome da cidade
2. Ao clicar em **Buscar**:
   - `main.js` chama `getWeatherByCity()`
   - `api.js` consulta a API de geocoding e previsão do tempo
3. Os dados retornados são enviados para `renderWeather()`
4. `ui.js`:
   - Define o fundo conforme o clima
   - Renderiza o clima atual
   - Renderiza a previsão dos próximos 7 dias
5. O usuário pode alternar entre **Light/Dark Mode** a qualquer momento

---

## ▶️ Como Executar o Projeto

### Opção 1 — Servidor local (recomendado)

> Necessário para evitar problemas de CORS com ES Modules

```bash
# Usando VS Code
Extensão: Live Server
```

Ou:

```bash
# Usando Node
npx serve
```

Depois, acesse:
```
http://localhost:3000
```

---

## 🧪 Testes Manuais

O projeto inclui testes simples para validação da API:

- `api.test.js`
- `testes.html`

### Como rodar os testes:

1. Abra o arquivo `testes.html` em um servidor local
2. Abra o console do navegador
3. Verifique as mensagens:

- ✅ Cidade válida passou
- ✅ Cidade inválida passou

---

## 🎨 Design & UX

- Glassmorphism com `backdrop-filter`
- Ícones SVG vetoriais (Apple Weather style)
- Layout responsivo para mobile
- Transições suaves de fundo

---

## 📌 Possíveis Melhorias Futuras

- 📍 Geolocalização automática do usuário
- ⏳ Indicador de carregamento (loading)
- 🌡️ Sensação térmica e umidade
- 🧪 Testes automatizados (Jest / Cypress)
- 📱 PWA (instalável)

---

## 👤 Autor

Projeto desenvolvido para fins de **estudo, portfólio e prática em JavaScript**, consumo de APIs e UI moderna.

---

## 📄 Licença

Este projeto é livre para uso educacional e pessoal.

