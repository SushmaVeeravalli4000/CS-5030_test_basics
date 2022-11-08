class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo) {
        return this.todos = todo;
    }


    delete_todo(id) {
        var data = this.todos;
        for (var i in data.todo) {
            if (data.todo[i].title === id) {
                delete data.todo[i];
            }
        }
        return data;
    }

    update_todo(id, todo) {
        var data = this.todos;
        for (var i in data.todo) {
            if (data.todo[i].title === id) {
                data.todo[i] = todo;
            }
        }
        return data;
    }

}


module.exports= todoservice;