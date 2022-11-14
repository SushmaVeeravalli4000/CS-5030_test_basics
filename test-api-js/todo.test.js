

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("add_todos", () => {
        var testData = {
            "todo": [{
                "title": "Tom",
                "description": "D1",
                "done": false
            }, {
                "title": "Brad",
                "description": "D1",
                "done": false
            }]

        }
        expect(todo_service.add_todo(testData).todo.length).toEqual(2);
    });

    
//delete method
    test("delete_todos", () => {
        expect(todo_service.delete_todo("Brad").todo[0].title).toEqual("Tom");
    });

    // update method
    test("update_todos", () => {
        var data = {
            "title": "Brad",
            "description": "Testing",
            "done": true
        }
        expect(todo_service.update_todo("Tom", data).todo[0].description).toEqual("Testing");
    });

});