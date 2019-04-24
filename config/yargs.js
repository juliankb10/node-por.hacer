const descripcion = {
    alias: 'd',
    demand: true,
    desc: "Descripcion de la tarea por hacer"
};

const completado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Creer una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}