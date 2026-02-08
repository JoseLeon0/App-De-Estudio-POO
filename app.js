const questions = [
            // Teóricas
            {
                category: 'teoricas',
                question: '¿Qué es el Paradigma Orientado a Objetos?',
                options: [
                    'Un lenguaje de programación específico',
                    'Un modelo mental o forma de pensar para resolver problemas, basado en objetos que tienen atributos y métodos',
                    'Una herramienta de desarrollo',
                    'Un tipo de base de datos'
                ],
                correct: 1
            },
            {
                category: 'teoricas',
                question: '¿Qué es la Programación Orientada a Objetos?',
                options: [
                    'La teoría del paradigma',
                    'Un tipo de algoritmo',
                    'La aplicación práctica del paradigma usando un lenguaje de programación para crear clases y objetos',
                    'Una metodología de diseño'
                ],
                correct: 2
            },
            {
                category: 'teoricas',
                question: '¿Qué es una Clase?',
                options: [
                    'Un objeto específico en memoria',
                    'Una variable global',
                    'Una plantilla o modelo que define los atributos y métodos que tendrán los objetos',
                    'Una función especial'
                ],
                correct: 2
            },
            {
                category: 'teoricas',
                question: '¿Qué es un Objeto?',
                options: [
                    'Una plantilla para crear clases',
                    'Una instancia de una clase; representa algo concreto creado a partir de la clase',
                    'Un método de una clase',
                    'Un tipo de dato primitivo'
                ],
                correct: 1
            },
            {
                category: 'teoricas',
                question: '¿Qué es un Atributo?',
                options: [
                    'Una función dentro de una clase',
                    'Una clase heredada',
                    'Una variable que describe una característica del objeto y representa su estado',
                    'Un tipo de método'
                ],
                correct: 2
            },
            {
                category: 'teoricas',
                question: '¿Qué es un Método?',
                options: [
                    'Una función dentro de una clase que define el comportamiento del objeto',
                    'Una variable de instancia',
                    'Un tipo de clase',
                    'Una propiedad estática'
                ],
                correct: 0
            },
            {
                category: 'teoricas',
                question: '¿Qué es el Encapsulamiento?',
                options: [
                    'Crear múltiples instancias de una clase',
                    'Agrupar datos y métodos en una clase y controlar el acceso para proteger la información',
                    'Heredar de varias clases',
                    'Sobrescribir métodos'
                ],
                correct: 1
            },
            {
                category: 'teoricas',
                question: '¿Qué es la Abstracción?',
                options: [
                    'Crear clases concretas',
                    'Ocultar todos los métodos',
                    'Mostrar solo lo esencial de un objeto y ocultar los detalles internos de cómo funciona',
                    'Eliminar métodos innecesarios'
                ],
                correct: 2
            },
            {
                category: 'teoricas',
                question: '¿Qué es la Herencia?',
                options: [
                    'Copiar código manualmente',
                    'Permite que una clase herede atributos y métodos de otra para reutilizar código',
                    'Crear objetos nuevos',
                    'Definir interfaces'
                ],
                correct: 1
            },
            {
                category: 'teoricas',
                question: '¿Qué es el Polimorfismo?',
                options: [
                    'Tener múltiples clases',
                    'Crear varios objetos',
                    'Permite que un mismo método se comporte de manera diferente según el objeto que lo use',
                    'Heredar de múltiples clases'
                ],
                correct: 2
            },
            // Relación y diferencia
            {
                category: 'relacion',
                question: '¿Cuál es la diferencia entre paradigma OO y programación OO?',
                options: [
                    'No hay diferencia',
                    'El paradigma es la teoría y la programación es la práctica',
                    'El paradigma es más moderno',
                    'La programación es más compleja'
                ],
                correct: 1
            },
            {
                category: 'relacion',
                question: 'Analogía arquitecto y albañil: ¿Qué representa el paradigma y qué la programación?',
                options: [
                    'Ambos son lo mismo',
                    'El paradigma es el albañil y la programación el arquitecto',
                    'El paradigma es el plano (diseño) y la programación es la construcción (código)',
                    'No hay relación'
                ],
                correct: 2
            },
            {
                category: 'relacion',
                question: '¿Cuál es la diferencia entre atributo y método?',
                options: [
                    'No hay diferencia significativa',
                    'El atributo es público y el método privado',
                    'El atributo es una característica; el método es una acción',
                    'El método almacena datos y el atributo ejecuta código'
                ],
                correct: 2
            },
            {
                category: 'relacion',
                question: '¿Qué es la sobrecarga de métodos?',
                options: [
                    'Tener demasiados métodos en una clase',
                    'Mismo método con distintos parámetros',
                    'Heredar métodos de otra clase',
                    'Eliminar métodos innecesarios'
                ],
                correct: 1
            },
            {
                category: 'relacion',
                question: '¿Qué es la sobreescritura de métodos?',
                options: [
                    'Escribir más código del necesario',
                    'Crear un nuevo método',
                    'Modificar un método heredado',
                    'Eliminar un método'
                ],
                correct: 2
            },
            {
                category: 'relacion',
                question: '¿Cuál es la diferencia entre clase e interfaz?',
                options: [
                    'Son exactamente lo mismo',
                    'La clase tiene implementación; la interfaz solo define métodos sin código',
                    'La interfaz es más moderna',
                    'La clase es abstracta y la interfaz concreta'
                ],
                correct: 1
            },
            // Aplicación
            {
                category: 'aplicacion',
                question: 'Si tengo una clase Auto con atributos color y velocidad, y un método acelerar(), ¿qué concepto de POO estoy aplicando?',
                options: [
                    'Herencia',
                    'Encapsulamiento',
                    'Definición de clase con atributos y métodos',
                    'Polimorfismo'
                ],
                correct: 2
            },
            {
                category: 'aplicacion',
                question: 'Si una clase Perro hereda de una clase Animal, ¿qué concepto se está aplicando?',
                options: [
                    'Herencia',
                    'Encapsulamiento',
                    'Abstracción',
                    'Polimorfismo'
                ],
                correct: 0
            },
            {
                category: 'aplicacion',
                question: '¿Cómo se llama la comunicación entre objetos?',
                options: [
                    'Llamada',
                    'Invocación',
                    'Mensaje',
                    'Señal'
                ],
                correct: 2
            },
            {
                category: 'aplicacion',
                question: '¿Para qué sirven los constructores?',
                options: [
                    'Para destruir objetos',
                    'Para inicializar los objetos cuando se crean',
                    'Para copiar objetos',
                    'Para heredar propiedades'
                ],
                correct: 1
            },
            {
                category: 'aplicacion',
                question: '¿Por qué no todos los lenguajes tienen destructores?',
                options: [
                    'Porque no son necesarios',
                    'Porque son muy complejos',
                    'Porque algunos gestionan la memoria automáticamente',
                    'Porque están obsoletos'
                ],
                correct: 2
            },
            // Visibilidad
            {
                category: 'aplicacion',
                question: '¿Qué controla la visibilidad en POO?',
                options: [
                    'El tamaño de las clases',
                    'La velocidad de ejecución',
                    'Quién puede acceder a los atributos y métodos de una clase',
                    'El número de objetos'
                ],
                correct: 2
            },
            {
                category: 'aplicacion',
                question: '¿Qué significa que un atributo sea "public"?',
                options: [
                    'Solo la clase puede acceder',
                    'Acceso desde cualquier lugar',
                    'Solo las subclases pueden acceder',
                    'Nadie puede acceder'
                ],
                correct: 1
            },
            {
                category: 'aplicacion',
                question: '¿Qué significa que un atributo sea "private"?',
                options: [
                    'Acceso desde cualquier lugar',
                    'Solo dentro de la clase',
                    'Solo las subclases',
                    'Solo objetos de la misma clase'
                ],
                correct: 1
            },
            {
                category: 'aplicacion',
                question: '¿Qué significa que un atributo sea "protected"?',
                options: [
                    'Completamente público',
                    'Completamente privado',
                    'La clase y sus subclases',
                    'Solo las interfaces'
                ],
                correct: 2
            },
            {
                category: 'aplicacion',
                question: '¿Es recomendable hacer todos los atributos públicos?',
                options: [
                    'Sí, para facilitar el acceso',
                    'No, porque se pierde el control y la protección de los datos',
                    'Sí, siempre es mejor',
                    'Depende del lenguaje'
                ],
                correct: 1
            },
            // Respuestas cortas
            {
                category: 'relacion',
                question: '¿Qué concepto de POO se usa para reutilizar código?',
                options: [
                    'Encapsulamiento',
                    'Abstracción',
                    'Herencia',
                    'Polimorfismo'
                ],
                correct: 2
            },
            {
                category: 'relacion',
                question: '¿Qué concepto se usa para ocultar detalles?',
                options: [
                    'Herencia',
                    'Abstracción',
                    'Polimorfismo',
                    'Encapsulamiento'
                ],
                correct: 1
            },
            {
                category: 'relacion',
                question: '¿Qué representa el comportamiento de un objeto?',
                options: [
                    'Atributo',
                    'Clase',
                    'Método',
                    'Interfaz'
                ],
                correct: 2
            },
            {
                category: 'relacion',
                question: '¿Qué representa el estado de un objeto?',
                options: [
                    'Método',
                    'Atributo',
                    'Clase',
                    'Constructor'
                ],
                correct: 1
            }
        ];

        let stats = {
            total: 0,
            correct: 0,
            streak: 0,
            mistakes: []
        };

        let currentQuiz = {
            questions: [],
            currentIndex: 0,
            answered: 0
        };

        function updateStats() {
            document.getElementById('totalQuestions').textContent = stats.total;
            document.getElementById('correctAnswers').textContent = stats.correct;
            const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            document.getElementById('accuracy').textContent = accuracy + '%';
            document.getElementById('streak').textContent = stats.streak;
            document.getElementById('mistakeCount').textContent = stats.mistakes.length + ' pendientes';
        }

        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        function startQuiz(category) {
            document.getElementById('mainMenu').style.display = 'none';
            document.getElementById('quizContainer').classList.add('active');

            let filteredQuestions = category === 'all' 
                ? questions 
                : questions.filter(q => q.category === category);

            currentQuiz.questions = shuffleArray(filteredQuestions);
            currentQuiz.currentIndex = 0;
            currentQuiz.answered = 0;

            showQuestion();
        }

        function showQuestion() {
            const container = document.getElementById('quizContainer');
            const q = currentQuiz.questions[currentQuiz.currentIndex];
            const progress = ((currentQuiz.currentIndex) / currentQuiz.questions.length) * 100;

            const categoryNames = {
                'teoricas': '📖 Teóricas',
                'relacion': '🔍 Relación y Diferencia',
                'aplicacion': '⚙️ Aplicación'
            };

            container.innerHTML = `
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="question-card">
                    <div class="question-number">Pregunta ${currentQuiz.currentIndex + 1} de ${currentQuiz.questions.length}</div>
                    <div class="category-badge">${categoryNames[q.category]}</div>
                    <div class="question-text">${q.question}</div>
                    <div class="options">
                        ${q.options.map((opt, idx) => `
                            <button class="option-button" onclick="selectAnswer(${idx})">${opt}</button>
                        `).join('')}
                    </div>
                    <div class="answer-reveal" id="answerReveal">
                        <strong>Respuesta correcta:</strong> ${q.options[q.correct]}
                    </div>
                </div>
                <div class="controls">
                    <button class="btn btn-secondary" onclick="backToMenu()">🏠 Menú Principal</button>
                    <button class="btn btn-primary" id="nextBtn" style="display:none;" onclick="nextQuestion()">Siguiente →</button>
                </div>
            `;
        }

        function selectAnswer(selected) {
            const q = currentQuiz.questions[currentQuiz.currentIndex];
            const buttons = document.querySelectorAll('.option-button');
            
            buttons.forEach((btn, idx) => {
                btn.disabled = true;
                if (idx === q.correct) {
                    btn.classList.add('correct');
                }
                if (idx === selected && selected !== q.correct) {
                    btn.classList.add('incorrect');
                }
            });

            document.getElementById('answerReveal').classList.add('show');
            document.getElementById('nextBtn').style.display = 'inline-block';

            stats.total++;
            if (selected === q.correct) {
                stats.correct++;
                stats.streak++;
            } else {
                stats.streak = 0;
                if (!stats.mistakes.some(m => m.question === q.question)) {
                    stats.mistakes.push({...q, userAnswer: selected});
                }
            }

            updateStats();
        }

        function nextQuestion() {
            currentQuiz.currentIndex++;
            if (currentQuiz.currentIndex < currentQuiz.questions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            const container = document.getElementById('quizContainer');
            const correct = currentQuiz.questions.filter((q, idx) => {
                // This is simplified - in real app track answers
                return true;
            }).length;

            const percentage = Math.round((stats.correct / stats.total) * 100);
            let message = '';
            if (percentage >= 90) message = '🌟 ¡Excelente! Dominas el tema';
            else if (percentage >= 70) message = '👍 ¡Muy bien! Sigue practicando';
            else if (percentage >= 50) message = '📚 Bien, pero necesitas repasar más';
            else message = '💪 Sigue estudiando, ¡tú puedes!';

            container.innerHTML = `
                <div class="result-card">
                    <h2>¡Quiz Completado!</h2>
                    <div class="result-score">${percentage}%</div>
                    <div class="result-message">${message}</div>
                    <p>Respondiste correctamente ${stats.correct} de ${stats.total} preguntas</p>
                </div>
                <div class="controls">
                    <button class="btn btn-primary" onclick="backToMenu()">🏠 Menú Principal</button>
                    <button class="btn btn-success" onclick="startQuiz('all')">🔄 Otro Quiz</button>
                    ${stats.mistakes.length > 0 ? '<button class="btn btn-secondary" onclick="reviewMistakes()">⚠️ Repasar Errores</button>' : ''}
                </div>
            `;
        }

        function reviewMistakes() {
            if (stats.mistakes.length === 0) {
                alert('¡No tienes errores pendientes! 🎉');
                return;
            }

            document.getElementById('mainMenu').style.display = 'none';
            document.getElementById('quizContainer').classList.add('active');

            currentQuiz.questions = shuffleArray(stats.mistakes);
            currentQuiz.currentIndex = 0;

            showQuestion();
        }

        function startFlashcards() {
            document.getElementById('mainMenu').style.display = 'none';
            document.getElementById('flashcardContainer').classList.add('active');

            const flashcardData = [
                { term: 'Paradigma OO', definition: 'Modelo mental o forma de pensar para resolver problemas, basado en objetos que tienen atributos y métodos' },
                { term: 'Programación OO', definition: 'Aplicación práctica del paradigma usando un lenguaje de programación' },
                { term: 'Clase', definition: 'Plantilla o modelo que define los atributos y métodos que tendrán los objetos' },
                { term: 'Objeto', definition: 'Instancia de una clase; representa algo concreto creado a partir de la clase' },
                { term: 'Atributo', definition: 'Variable que describe una característica del objeto y representa su estado' },
                { term: 'Método', definition: 'Función dentro de una clase que define el comportamiento del objeto' },
                { term: 'Encapsulamiento', definition: 'Agrupar datos y métodos en una clase y controlar el acceso para proteger la información' },
                { term: 'Abstracción', definition: 'Mostrar solo lo esencial de un objeto y ocultar los detalles internos' },
                { term: 'Herencia', definition: 'Permite que una clase herede atributos y métodos de otra para reutilizar código' },
                { term: 'Polimorfismo', definition: 'Permite que un mismo método se comporte de manera diferente según el objeto que lo use' }
            ];

            let currentCard = 0;
            let isFlipped = false;

            function showFlashcard() {
                const card = flashcardData[currentCard];
                const container = document.getElementById('flashcardContainer');
                
                container.innerHTML = `
                    <div class="question-number">Tarjeta ${currentCard + 1} de ${flashcardData.length}</div>
                    <div class="flashcard" id="flashcard" onclick="flipCard()">
                        <div class="flashcard-front">
                            <div class="flashcard-term">${card.term}</div>
                            <p style="color: #999; margin-top: 20px;">Click para ver la definición</p>
                        </div>
                    </div>
                    <div class="controls" style="margin-top: 30px;">
                        <button class="btn btn-secondary" onclick="backToMenu()">🏠 Menú</button>
                        <button class="btn btn-primary" onclick="prevCard()" ${currentCard === 0 ? 'disabled' : ''}>← Anterior</button>
                        <button class="btn btn-primary" onclick="nextCard()" ${currentCard === flashcardData.length - 1 ? 'disabled' : ''}>Siguiente →</button>
                    </div>
                `;
                isFlipped = false;
            }

            window.flipCard = function() {
                const flashcard = document.getElementById('flashcard');
                const card = flashcardData[currentCard];
                
                if (!isFlipped) {
                    flashcard.innerHTML = `
                        <div class="flashcard-back">
                            <div class="flashcard-term" style="color: #28a745;">${card.term}</div>
                            <div class="flashcard-definition">${card.definition}</div>
                            <p style="color: #999; margin-top: 20px;">Click para volver</p>
                        </div>
                    `;
                    isFlipped = true;
                } else {
                    flashcard.innerHTML = `
                        <div class="flashcard-front">
                            <div class="flashcard-term">${card.term}</div>
                            <p style="color: #999; margin-top: 20px;">Click para ver la definición</p>
                        </div>
                    `;
                    isFlipped = false;
                }
            };

            window.nextCard = function() {
                if (currentCard < flashcardData.length - 1) {
                    currentCard++;
                    showFlashcard();
                }
            };

            window.prevCard = function() {
                if (currentCard > 0) {
                    currentCard--;
                    showFlashcard();
                }
            };

            showFlashcard();
        }

        function backToMenu() {
            document.getElementById('mainMenu').style.display = 'grid';
            document.getElementById('quizContainer').classList.remove('active');
            document.getElementById('flashcardContainer').classList.remove('active');
            document.getElementById('quizContainer').innerHTML = '';
            document.getElementById('flashcardContainer').innerHTML = '';
        }

        // Initialize
        updateStats();