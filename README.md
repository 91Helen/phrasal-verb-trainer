# 📘 English Phrasal Verbs Trainer

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react\&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-RTK-purple?logo=redux\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript\&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Styles-blue?logo=css3\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github\&logoColor=white)

---

## 📘 English Phrasal Verbs Trainer

An interactive SPA for learning English phrasal verbs.  
Built with **React + Redux Toolkit** featuring smooth UI, animations, and progress persistence.

---
## 📸 Screenshot

  <img src="https://github.com/91Helen/phrasal-verb-trainer/blob/main/desktop-app.png?raw=true" alt="Desktop Screenshot" width="450" style="margin-right:10px;"/>


## 🚀 About the Project

The application is developed with a focus on:

* clean and scalable architecture
* modern UI/UX
* readable and maintainable code
* proper state management
* modular structure
* easy future extension

---

## 🧠 Technologies

### 🔹 Frontend

* React 18
* React Hooks
* React Router
* Responsive CSS layout
* CSS animations, custom UI components

### 🔹 State Management

* **Redux Toolkit**
* **Redux Persist** (for saving progress)

### 🔹 Architecture

* Feature-based structure
* Modules: `verbs`, `trainer`, `progress`, `favorites`
* **UI** styles centralized via CSS with variables for colors, shadows, and responsiveness

---

## 🎯 Functionality

### ✔ Training Modes

* multiple-choice translation
* input-based answers
* verb recall exercises
* "Next"/"Previous" buttons
* correct/incorrect answer highlighting
* training completion screen

### ✔ Statistics

Every action records:

* `id` (Date.now)
* `status` ("correct" / "incorrect")
* `createdAt` (ISO timestamp)

### ✔ Favorites

* add verbs to favorites
* train using only favorite verbs

### ✔ Progress Persistence

State restoration using Redux Persist.

---

## 📱 UI & UX

### ✔ Animated Burger Menu

Smooth mobile animation.

### ✔ Responsive Interface

Clean, neat, and user-friendly.

---

## 🏗 Architecture

### 🔹 Folder Structure

```bash
src/
├─ app/
│  └─ store.js                     # Redux store
├─ components/
│  ├─ PhrasalVerbsTrainer.js       # Main app component
│  └─ HomePage.js                  # Home page
├─ data/
│  └─ data.js                       # Initial data (verbs and examples)
├─ features/
│  ├─ favorites/
│  │  ├─ Favorites.js              # Favorites component
│  │  └─ favoritesSlice.js         # Favorites logic
│  ├─ progress/
│  │  ├─ Statistics.js             # Statistics component
│  │  └─ progressSlice.js          # Statistics & history logic
│  ├─ trainer/
│  │  ├─ PhrasalVerbTask.js        # Training task component
│  │  ├─ Trainer.js                # Trainer component
│  │  ├─ TrainerContainer.js       # Trainer container
│  │  └─ trainerSlice.js           # Training logic
│  ├─ verbs/
│  │  ├─ VerbCard.js               # Verb card
│  │  ├─ VerbList.js               # Verbs list
│  │  └─ verbsSlice.js             # Verbs logic
├─ styles/
│  └─ index.css                     # Main styles & responsive
├─ App.js                            # Main routing
└─ index.js                          # App entry point
```

## 📦 Installation

```bash
git clone <repo>
cd english-phrasal-verbs-trainer
npm install
npm start
```

---

## 👩‍💻 Skills Demonstrated

### Hard Skills

* Advanced React
* Redux Toolkit
* Architecture design
* State management
* Clean, scalable code
* UI animations & responsiveness
* Local data persistence

### Soft Skills

* Ability to build projects from scratch
* UX-focused thinking
* Code readability
* Step-by-step project evolution
* Ability to explain logic (important for teamwork)

---

# 🌍 RU

## 📘 English Phrasal Verbs Trainer

Интерактивное приложение-тренажёр для изучения английских фразовых глаголов.
Создано как современное SPA на **React + Redux Toolkit** с плавным UI, анимациями и сохранением прогресса.

---

## 🚀 О проекте

Приложение разработано с акцентом на:

* чистую, масштабируемую архитектуру
* современный UI/UX
* читаемый код
* грамотную работу с состоянием
* модульность
* возможность дальнейшего расширения

---
## 📸 Screenshot
<img src="https://github.com/91Helen/phrasal-verb-trainer/blob/main/mobile-app.png?raw=true" alt="Mobile Screenshot" width="250"/>

## 🧠 Технологии

### 🔹 Frontend

* React 18
* React Hooks
* React Router
* Адаптивная вёрстка CSS
* CSS-анимации, собственные UI-компоненты

### 🔹 Управление состоянием

* **Redux Toolkit**
* **Redux Persist** (сохранение прогресса)

### 🔹 Архитектура

* Feature-based структура
* Модули: `verbs`, `trainer`, `progress`, `favorites`
*  **UI** стили централизованы через CSS с переменными для цветов, теней и адаптивности. 

---

## 🎯 Функционал

### ✔ Режимы тренировки

* выбор перевода
* ввод ответа
* восстановление глагола
* кнопки «вперёд/назад»
* подсветка правильных / неправильных ответов
* экран завершения тренировки

### ✔ Статистика

Каждое действие хранит:

* `id` (Date.now)
* `status` ("correct" / "incorrect")
* `createdAt` (ISO-время ответа)

### ✔ Избранное

* добавление в избранное
* тренировка только избранных глаголов

### ✔ Сохранение прогресса

Восстановление состояния через Redux Persist.

---

## 📱 UI & UX

### ✔ Анимированное бургер-меню

 Плавная мобильная анимация.

### ✔ Адаптивный интерфейс

Красивый, аккуратный, удобный.

---

## 🏗 Архитектура

### 🔹 Структура папок / Folder Structure

```bash
src/
├─ app/
│  └─ store.js                     # Redux store
├─ components/
│  ├─ PhrasalVerbsTrainer.js       # Основной компонент приложения
│  └─ HomePage.js                  # Домашняя страница
├─ data/
│  └─ data.js                       # Исходные данные (глаголы и примеры)
├─ features/
│  ├─ favorites/
│  │  ├─ Favorites.js              # Компонент избранного
│  │  └─ favoritesSlice.js         # Логика избранного
│  ├─ progress/
│  │  ├─ Statistics.js             # Компонент статистики
│  │  └─ progressSlice.js          # Логика статистики и истории
│  ├─ trainer/
│  │  ├─ PhrasalVerbTask.js        # Компонент задания тренажёра
│  │  ├─ Trainer.js                # Компонент тренажёра
│  │  ├─ TrainerContainer.js       # Контейнер тренажёра
│  │  └─ trainerSlice.js           # Логика тренировки
│  ├─ verbs/
│  │  ├─ VerbCard.js               # Карточка глагола
│  │  ├─ VerbList.js               # Список глаголов
│  │  └─ verbsSlice.js             # Логика глаголов
├─ styles/
│  └─ index.css                     # Основные стили и адаптивность
├─ App.js                            # Основной роутинг
└─ index.js                          # Точка входа приложения

```

## 📦 Установка

```bash
git clone <repo>
cd english-phrasal-verbs-trainer
npm install
npm start
```

---

## 👩‍💻 Навыки, демонстрируемые проектом

### Hard skills

* Уверенный React
* Redux Toolkit
* Проектирование архитектуры
* Грамотная работа с глобальным состоянием
* UX/UI дизайн
* Понимание жизненного цикла интерфейса
* Чистый, поддерживаемый код

### Soft skills

* Умение создавать продукт с нуля
* Продуманный UX
* Коммуникабельность (умение объяснять код)
* Внимательность к деталям
* Логичное структурирование кода
