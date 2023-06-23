__React__ se ejecuta en el entorno de ejecución de JavaScript proporcionado por __Node.js.__
React utiliza Node.js para realizar tareas como la compilación del código fuente, la gestión de dependencias _(paquetes npm)_ y la ejecución del servidor de desarrollo._(`npm run dev`)

1. Configuración del entorno de desarrollo: 
   - Instalación de `Node.js` y `npm` _(Node Package Manager, para instalar y administrar dependencias, incluido React)_.
   `npm init`

2. Creación de un proyecto: 
    - Proyecto de React (Create React App) 
    `npx create-react-app nombre-proyecto` 
    o un proyecto Vite: `npm create vite@latest nombre-proyecto`

3. Componentes: React se basa en el concepto de componentes reutilizables. Encapsulan la lógica y la interfaz de usuario.
Crear componentes: 
    - Mediante la definición de clases (componentes de clase) 
    - mediante funciones (componentes funcionales). 
    Los componentes encapsulan la lógica y la interfaz de usuario de una parte específica de la aplicación.

JSX: React utiliza JSX (JavaScript XML) como una extensión de sintaxis que combina JavaScript y HTML. Con JSX, puedes escribir código similar a HTML dentro de tus componentes de React, lo que facilita la creación de la interfaz de usuario.

Renderizado: Para mostrar los componentes en la interfaz de usuario, debes renderizarlos dentro del DOM. React proporciona el método ReactDOM.render() para insertar un componente en un elemento específico del DOM.

Estado y propiedades: React utiliza el estado y las propiedades para manejar los datos de la aplicación. El estado representa los datos que pueden cambiar durante la ejecución de la aplicación y se puede acceder y modificar mediante this.state en componentes de clase o mediante los hooks en componentes funcionales. Las propiedades son datos pasados a un componente desde su componente padre y se acceden mediante this.props en componentes de clase o como parámetros en componentes funcionales.

Manipulación de eventos: En React, puedes manejar eventos, como hacer clic en un botón o enviar un formulario, utilizando sintaxis similar a la de JavaScript. Puedes agregar manejadores de eventos a elementos JSX utilizando atributos especiales, como onClick o onChange, y proporcionar una función que se ejecutará cuando ocurra el evento.

Ciclo de vida del componente: Los componentes de clase en React tienen un ciclo de vida que consta de diferentes métodos, como componentDidMount o componentDidUpdate, que se ejecutan en diferentes etapas del ciclo de vida del componente. Estos métodos te permiten realizar acciones específicas, como hacer solicitudes a una API o actualizar el estado, en momentos específicos del ciclo de vida.

Gestión del estado y efectos: En versiones más recientes de React, se introdujeron los hooks, que permiten a los componentes funcionales tener su propio estado interno y realizar efectos secundarios, sin necesidad de utilizar componentes de clase. Los hooks, como useState o useEffect, proporcionan una forma más sencilla y declarativa de gestionar el estado y realizar operaciones asincrónicas.

Construcción y despliegue: Una vez que hayas desarrollado tu aplicación de React, puedes utilizar herramientas de construcción como webpack o Parcel para empaquetar