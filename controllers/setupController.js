var Todos = require('../models/todoModel');
module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        var starterTodos = [{
                username: 'ali',
                todo: 'homework',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'hesham',
                todo: 'swimming',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'john',
                todo: 'running',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        });
    });
}