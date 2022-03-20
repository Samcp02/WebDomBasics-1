// La siguiente función es empleada por el método sort de un array.
// Informate sobre los requisitos que ha de cumplir la función.
export function compareRunners (a, b) {
    // el Array runners como objeto llama a su propiedad time
   return a.time - b.time
}