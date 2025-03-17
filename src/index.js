import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Подключение глобальных стилей
import App from './App'; // Импорт главного компонента

// Создание корневого элемента React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеринг приложения
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);