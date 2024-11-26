//Manejo de variables de entorno para toda la aplicación
let envDeveloment = {
    mode: 'development',
    url: "https://d6e0-200-110-173-134.ngrok-free.app/api/"
};

let envProduction = {
    mode: 'production',
    url: "https://d6e0-200-110-173-134.ngrok-free.app/api/"
};

export default (import.meta.env.MODE === 'development') ? envDeveloment : envProduction;