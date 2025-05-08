const todos = [
    {
        id: 1,
        description: "Estuding programming",
        isComplited: false,
    
    },
    {
        id: 2,
        description: "Reading books",
        isComplited: true,    
    },
    {
        id: 3,
        description: "Training",
        isComplited: false,    
    }
    ];
    
    
    console.log(todos[2]); // { id: 3, description: 'Going to the gym', isComplited: false }
    console.log(todos[2].description); // 'Going to the gym'
    
    const descriptionOfLastTodo = todos[todos.length - 1].description;
    console.log(descriptionOfLastTodo); // 'Going to the gym'
    
    
    const todosJASON = JSON.stringify(todos);// Convert the array of objects to a JSON string
    
    console.log(todosJASON); // '[{"id":1,"description":"Estuding programming","isComplited":false},{"id":2,"description":"Reading books","isComplited":true},{"id":3,"description":"Training","isComplited":false}]'
    
    const todoList = JSON.parse(todosJASON); // Convert the JSON string back to an array of objects
    console.log(todoList); // [ { id: 1, description: 'Estuding programming', isComplited: false }, { id: 2, description: 'Reading books', isComplited: true }, { id: 3, description: 'Training', isComplited: false } ]
    