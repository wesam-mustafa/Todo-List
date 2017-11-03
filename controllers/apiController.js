var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
var jsonParser = bodyParser.json();
module.exports = function (app) {
    app.use(jsonParser);
    app.use(urlencodedParser);
    app.get('/api/todos/:uname', function (req, res) {
        Todos.find({
            username: req.params.uname
        }, function (err, todos) {
            if (err) throw err;
            res.send(todos);
        });
    });

    app.get('/api/todo/:id', function (req, res) {
        Todos.findById({
            _id: req.params.id
        }, function (err, todo) {
            if (err) throw err;
            res.send(todo);
        });
    });
    app.post('/api/todo', function (req, res) {
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function (err, todo) {
                if (err) throw err;
                res.send('success');
            });
        } else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function (err) {
                if (err) throw err;
                res.send('succes');
            });
        }
    });
    app.delete('/api/todo', function (req, res) {
        Todos.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('success');
        });
    });
}