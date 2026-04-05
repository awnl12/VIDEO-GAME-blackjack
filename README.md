# ♠️♦️ Blackjack - Web App (Vanilla JS) ♣️♥️

Un simulador del clásico juego de casino "21", desarrollado desde cero. Este proyecto no es solo un juego interactivo, sino una demostración práctica de fundamentos de programación, manipulación eficiente del DOM y arquitectura segura utilizando JavaScript puro.

## 🚀 Puntos Fuertes del Proyecto (Highlights Técnicos)

* **Encapsulamiento y Seguridad (Patrón Módulo):** El motor del juego está estructurado dentro de una Función Invocada Inmediatamente (IIFE) operando bajo modo estricto (`'use strict'`). Esto blinda la lógica interna, impidiendo que el estado del juego (cartas, barajas, turnos) sea manipulado de forma global desde la consola del navegador.
* **Toma de Decisiones Automatizada (CPU):** Se implementó un algoritmo para el turno de la computadora que evalúa el puntaje del jugador y toma cartas de forma iterativa hasta igualarlo, superarlo o pasarse del límite de 21.
* **Gestión Dinámica del Estado:** Manejo eficiente de arreglos y selectores múltiples (`querySelectorAll`) para reiniciar la partida al instante. Se logra limpiar el DOM, resetear marcadores y generar una nueva baraja sin necesidad de recargar la página.
* **Generación y Mezcla de Baraja:** Creación dinámica de un *deck* combinando arreglos de palos y cartas especiales, aplicando algoritmos de aleatoriedad (apoyado en Underscore.js) para garantizar partidas justas.

## 🛠️ Stack Tecnológico

* **Core:** JavaScript Vanilla (ES6+) - *Uso intensivo de Arrow Functions, manipulación de arreglos y operadores ternarios.*
* **Maquetación y Estilos:** HTML5, CSS3, Bootstrap 4.4.
* **Librerías de Utilidad:** Underscore.js.

## 📸 Captura de Pantalla
<img width="1782" height="932" alt="juegoempiza" src="https://github.com/user-attachments/assets/8e6bf96e-1cdd-467d-b0e8-7dbde2928e75" />


<img width="1863" height="933" alt="blackjack" src="https://github.com/user-attachments/assets/52a8fe36-84d3-462a-873d-a7f80ccad79a" />


![compug](https://github.com/user-attachments/assets/15f63494-5d5a-4818-b032-db435d5fa294)


## 🎮 Juega en tu equipo

Desplegar este proyecto localmente es totalmente directo. Al no depender de Node.js ni bases de datos, no requiere configuraciones complejas.

1. Clona este repositorio:
2. git clone https://github.com/awnl12/VIDEO-GAME-blackjack.git
