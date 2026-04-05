# 🃏 Blackjack Game - Web App

Un juego de Blackjack interactivo creado para el navegador, donde el jugador se enfrenta a la computadora. Este proyecto fue desarrollado para practicar manipulación del DOM, lógica de programación y estructuración de código con JavaScript Vanilla.

> 🚧 **Estado del Proyecto:** En desarrollo (WIP). El juego es funcional, pero se le irán implementando optimizaciones y mejoras de código en el futuro.

## 🚀 Características Actuales

* **Juego Funcional:** Permite pedir cartas, sumar puntos y determinar un ganador (Jugador vs. Computadora).
* **Lógica de Baraja:** Generación dinámica de la baraja y mezcla aleatoria.
* **Turno de la Computadora:** Lógica automatizada para que la computadora juegue su turno una vez que el jugador se detiene o se pasa de 21.
* **Reinicio:** Opción para resetear el tablero y comenzar un nuevo juego sin recargar la página.

## 🛠️ Tecnologías Utilizadas

* **HTML5**
* **CSS3** (Diseño básico con el clásico tapete verde de casino)
* **JavaScript (Vanilla)**
* **Bootstrap 4.4** (Para un sistema de grillas rápido y estilos de botones)
* **Underscore.js** (Utilizado específicamente para la función `_.shuffle` y mezclar el deck)

## 📸 Captura de Pantalla

<img width="1863" height="933" alt="blackjack" src="https://github.com/user-attachments/assets/52a8fe36-84d3-462a-873d-a7f80ccad79a" />

## 🔧 Próximas Optimizaciones (To-Do)

* [ ] Refactorizar el código JavaScript utilizando el patrón módulo para mayor seguridad y evitar variables globales.
* [ ] Mejorar la interfaz gráfica (UI) y las animaciones al repartir las cartas.
* [ ] Optimizar la lógica de la carta "As" (A) para que valga 1 u 11 dependiendo de la conveniencia del jugador.
* [ ] Manejo de apuestas y sistema de puntaje acumulativo.
