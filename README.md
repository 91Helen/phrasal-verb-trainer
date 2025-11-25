# 📘 English Phrasal Verbs Trainer

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react\&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-RTK-purple?logo=redux\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript\&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Styles-blue?logo=css3\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github\&logoColor=white)

---

# 🇬🇧 English Version

## 📘 English Phrasal Verbs Trainer

An interactive training application for learning English phrasal verbs.
Built as a modern SPA using **React + Redux Toolkit**, with smooth UI/UX, animations, and persistent saved progress.

---

## 🚀 About the Project

**English Phrasal Verbs Trainer** is an educational tool designed with a focus on:

* Clean, scalable architecture
* Smooth UX
* Maintainable, readable code
* Modern React practices
* Persistent user progress
* Modularity and easy future expansion

---

## 🧠 Tech Stack

### 🔹 Frontend

* React 18
* React Hooks (useState, useEffect, useCallback, useMemo, useRef)
* React Router
* Adaptive UI (CSS, Flexbox/Grid)
* Custom components & CSS animations

### 🔹 State Management

* **Redux Toolkit**
* **Redux Persist** for saving user progress

### 🔹 Architecture

* Feature-based folder structure
* Modules: `verbs`, `trainer`, `progress`, `favorites`, `ui`

---

## 🎯 Core Features

### ✔ Training Modes

* Multiple question types:

  * choose correct translation
  * input your answer
  * reconstruct the phrasal verb
* Previous/Next navigation
* Highlighted correct/incorrect answers
* Training completion screen

### ✔ Progress Tracking

Each answer stores:

* `id` (Date.now)
* `status` (“correct” / “incorrect”)
* `createdAt` (ISO timestamp)

### ✔ Favorites

* Add verbs to favorites
* Train only favorite verbs

### ✔ Persisted Progress

Redux Persist restores training, statistics, and favorite verbs.

---

## 📱 UI & UX

### ✔ Animated Burger Menu

* Top line → rotate 45°
* Middle line → fade out
* Bottom line → rotate –45°
* Smooth mobile animation, static desktop menu

### ✔ Fully Responsive Layout

From 320px mobile to large screens.

---

## 🏗 Architecture Overview

### 📌 TrainerContainer

Handles:

* start training
* answer processing
* navigation
* training reset
* passes data into `<Trainer />`

```jsx
<Trainer
  verbs={trainingVerbs}
  currentIndex={currentVerbIndex}
  onAnswer={handleAnswer}
/>
```

### 📌 Redux Logic

**trainerSlice** manages:
`trainingVerbs`, `currentVerbIndex`, `correctCount`, `incorrectCount`, `finished`

**progressSlice** manages:
history of completed verbs, total solved

---

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

* React (Middle level)
* Redux Toolkit (pro level)
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

# 🇷🇺 Русская версия

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
* - **UI** стили централизованы через CSS с переменными для цветов, теней и адаптивности. 

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

* плавная мобильная анимация

### ✔ Адаптивный интерфейс

Красивый, аккуратный, удобный.

---

## 🏗 Архитектура

### 📌 Компонент TrainerContainer

Отвечает за:

* запуск тренировки
* обработку ответов
* переключение глаголов
* завершение
* передачу данных в Trainer


### 📌 Redux

**trainerSlice** 🏋️ — логика тренировки &nbsp;&nbsp;|&nbsp;&nbsp; **progressSlice** 📊 — статистика и история



### 🔹 Структура папок / Folder Structure

```bash
src/
├─ components/         # Общие компоненты (баннер, шаги, цитаты) / Common components (banner, steps, quotes)
├─ features/
│  ├─ verbs/           # Список глаголов / Verbs list
│  ├─ trainer/         # Логика тренажёра / Trainer logic
│  ├─ favorites/       # Избранные глаголы / Favorite verbs
│  ├─ progress/        # Статистика / Progress tracking
├─ styles/             # Основные стили и адаптивность / Main styles & responsive
└─ App.js              # Основной роутинг / Main routing
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
