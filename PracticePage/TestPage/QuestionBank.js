const Question_Bank = {
    cs1: [
        {
            type: "multiple-choice",
            question: "In C++, which is the correct way to declare a integer variable?",
            options: [
                "a = 5;",
                "int a = 'c';",
                "int a = 5",
                "int a = 10;"
            ],
            answer: 3
        },

        {
            type: "multiple-choice",
            question: "What data type is this?: 'X'",
            options: [
                "String",
                "Char",
                "Bool",
                "Float"
            ],
            answer: 1
        },

        {
            type: "true-false",
            question: "True or False, a variable can be used before declaration.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False? A string is a collection of characters.",
            answer: true
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A block of code that can be invoked during runtime to perform a task is called a _______?",
            answer: "function"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A technique where a function will call itself is called _________?",
            answer: "recursion"
        },

        {
            type: "matching",
            question: "Match each data type with the correct value.",
            left: [
                "int",
                "double",
                "string",
                "char",
                "bool"
            ],
            right: [
                "true",
                "'R'",
                "3.14",
                "\"This is cool!\"",
                "74"
            ],

            answer: [4, 2, 3, 1, 0]
        },

        {
            type: "matching",
            question: "Match each of the logical operators to their names.",
            left: [
                "||",
                "!",
                "&&"
            ],
            right: [
                "NOT",
                "OR",
                "AND"
            ],

            answer: [1, 0, 2]
        },

        {
            type: "multiple-choice",
            question: "In C++, how would an array that takes the data type double and has a size of 10 be declared as?",
            options: [
                "double nums(10);",
                "double nums[] 10;",
                "10 nums[double];",
                "double nums[10];"
            ],
            answer: 3
        },

        {
            type: "multiple-choice",
            question: "Which data type should be used to store a value like 45.987?",
            options: [
                "int",
                "char",
                "bool",
                "double"
            ],

            answer: 3
        },

        {
            type: "multiple-choice",
            question: "What is the correct way to store a single character in C++?",
            options: [
                "\"a\"",
                "char letter = 'a'",
                "a",
                "char letter = a;"
            ],

            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which boolean expression evaluates to true?",
            options: [
                "5 == 10",
                "3 > 9",
                "7 != 7",
                "4 <= 4"
            ],

            answer: 3
        },

        {
            type: "multiple-choice",
            question: "Which keyword is used to return a value from a function?",
            options: [
                "send",
                "giveback",
                "return",
                "output"
            ],

            answer: 2
        },

        {
            type: "multiple-choice",
            question: "What is the index of the first element in a C++ array?",
            options: [
                "1",
                "0",
                "-1",
                "It depends on the array size"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which statement correctly calls a void function named run() with no parameters?",
            options: [
                "run;",
                "run();",
                "void run();",
                "call run();"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which sorting algorithm compares adjacent elements and swaps them if needed?",
            options: [
                "Merge Sort",
                "Selection Sort",
                "Bubble Sort",
                "Binary Sort"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which searching algorithm requires the list to be sorted first?",
            options: [
                "Linear Search",
                "Binary Search",
                "Random Search",
                "Hash Search"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "What is recursion mainly used for?",
            options: [
                "Repeating code without loops",
                "Storing many values",
                "Sorting arrays",
                "Saving memory"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Which of the following is a linear data structure?",
            options: [
                "Tree",
                "Graph",
                "Stack",
                "Hash Table"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which operator is used for logical AND in C++?",
            options: [
                "&",
                "and",
                "&&",
                "||"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "What is the size of an array defined as int nums[5]?",
            options: [
                "4",
                "5",
                "6",
                "Depends on values stored"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which option correctly initializes a string with the text Hello?",
            options: [
                "string s = \"Hello\";",
                "string s = Hello;",
                "string s = 'Hello';",
                "string s = (Hello);"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Which function header correctly returns an integer and takes two integer parameters?",
            options: [
                "int func(int x, int y)",
                "func int(x, y)",
                "void func(int x, y)",
                "int func(x int, y int)"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Which statement is TRUE about arrays?",
            options: [
                "All elements must be the same data type",
                "Array size can grow automatically",
                "You can access elements using negative indexes",
                "They store values in random memory locations"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "What happens when you try to access something outside an array?",
            options: [
                "It accesses the element",
                "Out-of-bounds error",
                "It will access a random element in array",
                "Nothing happens"
            ],
            answer: 1
        },

        {
            type: "true-false",
            question: "True or False: Bubble sort, selection sort and merge sort are all types of algorithms to use to arrange elements in a specific order.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or false: Nonlinear and unary search are methods for search algorithms.",
            answer: false
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Examples of linear structures include arrays, linked lists, stacks and ______.",
            answer: "queues"
        },

        {
            type: "fill-in-the-blank",
            question: "Create a function called 'add' that has no return type and takes an integer called 'num': __________",
            answer: "void add(int num);"
        },

        {
            type: "matching",
            question: "Match each type of loop with what it does.",
            left: [
                "For Loop",
                "Do-While Loop",
                "While Loop"
            ],
            right: [
                "Repeats a certain number of times.",
                "Executes body at least once.",
                "Repeats while condition is true."
            ],

            answer: [0, 1, 2]
        },

        {
            type: "multiple-choice",
            question: "What C++ object allows users to type input and have it saved in a variable?",
            options: [
                "cout",
                "input",
                "cin",
                "Grab"
            ],
            answer: 2
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A variable that cannot be changed after it is assigned is called a ______.",
            answer: "constant"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The data type used to store true or false is called ______.",
            answer: "bool"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The operator used to compare two values for equality is ______.",
            answer: "=="
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A function that does not return a value uses the keyword ______.",
            answer: "void"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Accessing the third element of array nums is written as nums[______].",
            answer: "2"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A function calling itself repeatedly is known as ______.",
            answer: "recursion"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A loop that continues as long as a condition is true is called a ______ loop.",
            answer: "while"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A collection of characters in C++ is stored using the ______ data type.",
            answer: "string"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The process of arranging items in ascending or descending order is called ______.",
            answer: "sorting"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Searching an array one element at a time is known as ______ search.",
            answer: "linear"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A structure where elements are connected in a hierarchy is called a ______.",
            answer: "tree"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The keyword used to create a variable that takes regular numbers with no decimals in C++ is ______.",
            answer: "int"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The term used for a list of elements stored next to each other in memory is ______.",
            answer: "array"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A function's input values are known as ______.",
            answer: "parameters"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A recursive function must have a ______ case to prevent infinite calls.",
            answer: "base"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A data structure where elements follow the First-In-First-Out order is called a ______.",
            answer: "queue"
        },
        
        {
            type: "true-false",
            question: "True or False: A char can store more than one character at a time.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: A float can store decimal values.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: A function can have zero parameters.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Arrays in C++ can grow or shrink at runtime.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Binary search works on both sorted and unsorted arrays.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: A recursion example can include fibonacci.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: A while loop may never execute even once.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: A double has more precision than a float.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: A stack is a linear sequence.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Strings are stored as a sequence of integers.",
            answer: false
        },
        
        {
            type: "true-false",
            question: "True or False: Selection sort repeatedly finds the smallest value and moves it to the front.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Functions cannot return boolean values.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: A variable must be declared before it is used.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Graphs are an example of a non-linear data structure.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: The OR logical operator (||) returns true if at least one condition is true.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Accessing array elements uses parentheses.",
            answer: false
        },

        {
            type: "matching",
            question: "Match each data type to an example value.",
            left: 
            [
                "bool", 
                "float", 
                "string", 
                "int"
            ],
            right: [
                "42", 
                "\"CS1\"", 
                "false", 
                "9.81"
            ],

            answer: [2, 3, 1, 0]
        },

        {
            type: "matching",
            question: "Match the algorithm type to its example.",
            left: [
                "Searching",
                "Sorting", 
                "Recursion"
            ],
            right: [
                "Function calling itself",
                "Finding an element",
                "Arranging elements"
            ],
            answer: [1, 2, 0]
        },

        {
            type: "matching",
            question: "Match each real life example to its data structure.",
            left: [
                "Folder system", 
                "Browser back button",
                "Waiting line"
            ],
            right: [
                "Queue",
                "Tree",
                "Stack"
            ],
            answer: [1, 2, 0]
        },

        {
            type: "matching",
            question: "Match each term to the correct category (some categories can be matched to more than one term).",
            left: [
                    "Graph", 
                    "Queue", 
                    "Stack", 
                    "Tree"
                ],
            right: [
                "Linear",
                "Non-linear"
            ],
            answer: [1, 0, 0, 1]
        },


        {
            type: "matching",
            question: "Match each code example to the correct data type.",
            left: [
                "72.5", 
                "'1'", 
                "\"Hello\"", 
                "9"
            ],
            right: [
                "char",
                "int",
                "double",
                "String"
            ],
            answer: [2, 0, 3, 1]
        },

        {
            type: "matching",
            question: "Match the recursion term to its meaning.",
            left: ["Base Case", "Recursive Case"],
            right: [
                "Condition where recursion ends.",
                "Condition where the function calls itself."
            ],
            answer: [0, 1]
        },

        {
            type: "matching",
            question: "Match the data structure to its common use.",
            left: ["Queue", "Tree", "Array"],
            right: [
                "Hierarchical storage.",
                "First-come-first-served processing.",
                "Index-based access."
            ],
            answer: [1, 0, 2]
        },

        {
            type: "matching",
            question: "Match each return type keyword to its purpose.",
            left: ["int", "void", "bool", "char"],
            right: [
                "Returns a single character.",
                "Returns a true/false statement.",
                "Returns a whole number.",
                "Returns no value."
            ],
            answer: [2, 3, 1, 0]
        },

        {
            type: "matching",
            question: "Match each function-related term.",
            left: ["Parameter", "Return Value", "Function Call"],
            right: [
                "Triggers the function to run.",
                "Data sent into the function.",
                "Output produced by the function."
            ],
            answer: [1, 2, 0]
        },

        {
            type: "matching",
            question: "Match terms to the correct concept.",
            left: ["Stack", "Queue", "Array"],
            right: [
                "Stores items FIFO.",
                "Stores items LIFO.",
                "Stores items in a fixed-size container."
            ],
            answer: [1, 0, 2]
        },

        {
            type: "matching",
            question: "Match each sorting algorithm to its description.",
            left: ["Bubble Sort", "Merge Sort", "Selection Sort"],
            right: [
                "Divides the list then merges.",
                "Repeatedly swaps neighbors.",
                "Finds smallest element each round."
            ],
            answer: [1, 0, 2]
        },

        {
            type: "matching",
            question: "Match each search algorithm to its requirement.",
            left: ["Linear Search", "Binary Search"],
            right: [
                "Requires sorted data.",
                "Does not require sorted data."
            ],
            answer: [1, 0]
        },

        {
            type: "matching",
            question: "Match each structure to its category (catagories can be matched to multiple structures).",
            left: ["Tree", "Stack", "Linked List", "Graph"],
            right: [
                "Non-linear",
                "Linear"
            ],
            answer: [0, 1, 1, 0]
        },

        {
            type: "matching",
            question: "Match each relational operator to it's usage.",
            left: ["==", ">=", "<=", "!="],
            right: [
                "Greater than or equal to.",
                "Equal to",
                "Not equal to.",
                "Less than or equal to."
            ],
            answer: [1, 0, 3, 2]
        },

        {
            type: "matching",
            question: "Match each term to its definition.",
            left: ["Variable", "Function", "Array", "Data Type"],
            right: [
                "Stores multiple elements in a sequence.",
                "A storage location for a value.",
                "Stores a value depending on it's type.",
                "A block of reusable code."
            ],
            answer: [1, 3, 0, 2]
        },

        {
            type: "matching",
            question: "Match each C++ term to its operation.",
            left: ["cout", "cin", "std", "endl"],
            right: [
                "Standard namespace that contains C++ features.",
                "Allows user input.",
                "Indicates that a string has ended and to put future ones on another line.",
                "Outputs text or values."
            ],
            answer: [3, 1, 0, 2]
        },

        {
            type: "matching",
            question: "Match each variable/function and determine if it's syntax is correct.",
            left: ["void myFunc();", "char c = 'AB';", "addFunc int(int a, int b);", "double b = 4.7;"],
            right: [
                "Correct",
                "Incorrect"
            ],
            answer: [0, 1, 1, 0]
        }
    ],

    cs2: [
        {
            type: "multiple-choice",
            question: "Which description best matches an Abstract Data Type (ADT)?",
            options: [
                "A data type that only stores integers.",
                "A type defined entirely by its behavior and operations.",
                "A data type that stores memory addresses.",
                "A type that cannot be inherited."
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which keyword allows access to class members from anywhere?",
            options: ["private", "protected", "internal", "public"],
            answer: 3
        },

        {
            type: "multiple-choice",
            question: "What does the * operator do when used with a pointer?",
            options: [
                "It gets the memory address.",
                "It dereferences the pointer.",
                "It sets the pointer to null.",
                "It multiplies two values."
            ],
            answer: 1
        },
        
        {
            type: "multiple-choice",
            question: "What is stored inside a pointer variable?",
            options: [
                "A copy of a value.",
                "A function.",
                "A memory address.",
                "An uninitialized integer."
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which keyword is used to dynamically allocate an array?",
            options: ["malloc", "new", "alloc", "create"],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "What happens if you dereference a nullptr?",
            options: [
                "The pointer becomes valid.",
                "Undefined behavior.",
                "The system allocates memory automatically.",
                "Nothing happens and program compiles."
            ],
            answer: 1
        },
        {
            type: "multiple-choice",
            question: "Which of the following creates a class template?",
            options: [
                "template<class T> class Box{};",
                "template(T) class Box{};",
                "class<T> Box{};",
                "template<typename Box{}>;"
            ],
            answer: 0
        },
        {
            type: "multiple-choice",
            question: "Which operation is NOT part of a stack?",
            options: ["push()", "front()", "pop()", "top()"],
            answer: 1
        },
        {
            type: "multiple-choice",
            question: "A queue typically uses which ordering?",
            options: ["FILO", "LIFO", "FIFO", "LILO"],
            answer: 2
        },
        {
            type: "multiple-choice",
            question: "In a linked list, each node contains:",
            options: [
                "Only data.",
                "Only a pointer.",
                "Data and a pointer to the next node.",
                "Multiple unrelated objects."
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "A double linked list node contains:",
            options: [
                "Only a next pointer.",
                "A next and previous pointer.",
                "Only a previous pointer.",
                "None of these."
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "A tree is considered a: ",
            options: [
                "Linear structure.",
                "Non-linear structure.",
                "Stack-based structure.",
                "Dynamic array."
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which iterator allows read and write operations?",
            options: [
                "const_iterator",
                "input_iterator",
                "mutable_iterator",
                "iterator"
            ],
            answer: 3
        },
        {
            type: "multiple-choice",
            question: "Which class relationship describes inheritance?",
            options: [
                "is-a",
                "has-a",
                "contains-a",
                "creates-a"
            ],
            answer: 0
        },
        {
            type: "multiple-choice",
            question: "Which inheritance type involves two base classes?",
            options: [
                "Hierarchical inheritance",
                "Single inheritance",
                "Multiple inheritance",
                "Protected inheritance"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which symbol is used to access class members through a pointer?",
            options: ["@", ".", "->", ">"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which is a dynamic array?",
            options: [
                "An array with fixed size.",
                "An array allocated with new[].",
                "A pointer that stores a single integer.",
                "A linked list variant."
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Function templates allow:",
            options: [
                "Only integer operations.",
                "Generic functions for many data types.",
                "Automatic memory management.",
                "Fastest program execution."
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which class member is inherited by derived classes?",
            options: [
                "Private members only.",
                "Public and protected members.",
                "Protected only.",
                "None of these."
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which correctly declares a pointer to an int?",
            options: [
                "int ptr;",
                "pointer<int> ptr;",
                "int& ptr;",
                "int* ptr;"
            ],
            answer: 3
        },

        {
            type: "true-false",
            question: "True or False: A class is a blueprint for creating objects.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Private members of a class are accessible outside the class.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: A pointer variable stores a memory address.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: nullptr is used to indicate a pointer that points to nothing.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: A queue uses First In, First Out ordering.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: A stack allows accessing any element at any time.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Linked lists are stored in contiguous memory.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: A tree is a linear data structure.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Templates allow code reusability for multiple data types.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Multiple inheritance allows a class to derive from two or more base classes.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Using delete on a pointer frees allocated memory.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Dereferencing a nullptr safely returns zero.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: An iterator allows walking through a container without exposing internal structure.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Double linked lists allow traversal in one direction only.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: A derived class automatically inherits constructors.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: The & operator retrieves the address of a variable.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Templates reduce the need for function overloading.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: A dynamic array can change its size after creation.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Protected members are accessible in derived classes.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: A queue always removes items from the back.",
            answer: false
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A class instance is known as an ______.",
            answer: "object"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The operator used to get the address of a variable is ______.",
            answer: "&"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A pointer that stores no address uses the value ______.",
            answer: "nullptr"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A stack uses the ordering known as ______.",
            answer: "LIFO"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A queue processes items in ______ order.",
            answer: "FIFO"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A node in a linked list stores data and a ______ to the next node.",
            answer: "pointer"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A class that inherits from another is called a ______ class.",
            answer: "derived"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A tree structure contains parent and ______ nodes.",
            answer: "child"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The template keyword used to define generic functions is ______.",
            answer: "template"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Dereferencing a pointer uses the ______ operator.",
            answer: "*"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The type of inheritance where a class inherits from one base is called ______ inheritance.",
            answer: "single"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A double linked list uses both next and ______ pointers.",
            answer: "previous"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: In a class, ______ members are accessible only within the class.",
            answer: "private"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Iterators allow ______ a container without modifying it.",
            answer: "traversing"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A dynamic array is allocated using the keyword ______.",
            answer: "new"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Templates allow writing ______ code that works for multiple types.",
            answer: "generic"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The top element of a stack is accessed using ______.",
            answer: "top()"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A class defines data and ______ together.",
            answer: "functions"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Removing memory allocated with new uses the keyword ______.",
            answer: "delete"
        },
        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A pointer to an array's first element is equivalent to the array’s ______.",
            answer: "name"
        },

        {
            type: "matching",
            question: "Match each pointer operator to its purpose.",
            left: ["&", "*", "nullptr"],
            right: [
                "Represents an empty pointer.",
                "Dereferences a pointer.",
                "Gets the address of a variable."
            ],
            answer: [2, 1, 0]
        },

        {
            type: "matching",
            question: "Match each class-related term to its description.",
            left: ["Class", "Object", "Access Specifier"],
            right: [
                "Controls visibility of members.",
                "A user-defined data blueprint.",
                "An instance created from a class."
            ],
            answer: [1, 2, 0]
        },

        {
            type: "matching",
            question: "Match each ADT to its behavior.",
            left: ["Stack", "Queue", "Tree", "Linked List"],
            right: [
                "Hierarchical structure.",
                "Sequential nodes connected by pointers.",
                "FIFO operations.",
                "LIFO operations."
            ],
            answer: [3, 2, 0, 1]
        },

        {
            type: "matching",
            question: "Match each pointer concept with its meaning.",
            left: ["Pointer", "Dereference", "Address-of"],
            right: [
                "Access the value at a memory location.",
                "A variable storing a memory address.",
                "Retrieve the memory address of a variable."
            ],
            answer: [1, 0, 2]
        },

        {
            type: "matching",
            question: "Match each container to its feature.",
            left: ["Array", "List", "Stack", "Queue"],
            right: [
                "FIFO",
                "Indexed access",
                "Sequential nodes",
                "LIFO"
            ],
            answer: [1, 2, 3, 0]
        },

        {
            type: "matching",
            question: "Match each inheritance term to its definition.",
            left: ["Base Class", "Derived Class", "Single Inheritance", "Multiple Inheritance"],
            right: [
                "Class inheriting from more than one base.",
                "A class that another class extends.",
                "A class created from a base class.",
                "Class inheriting from one base class."
            ],
            answer: [1, 2, 3, 0]
        },

        {
            type: "matching",
            question: "Match each list type to its description.",
            left: ["Linked List", "Double Linked List"],
            right: [
                "Nodes with next and previous pointers.",
                "Nodes with only next pointers."
            ],
            answer: [1, 0]
        },

        {
            type: "matching",
            question: "Match each template concept.",
            left: ["Function Template", "Class Template"],
            right: [
                "Generic class blueprint.",
                "Generic function blueprint."
            ],
            answer: [1, 0]
        },

        {
            type: "matching",
            question: "Match operations to the ADT.",
            left: ["push()", "pop()", "front()", "top()"],
            right: [
                "Returns first element in container.",
                "Returns the most recent element added to stack.",
                "Removes from stack.",
                "Adds to stack."
            ],
            answer: [3, 2, 0, 1]
        },

        {
            type: "matching",
            question: "Match specific pointer operators to operation symbol.",
            left: ["Dereference", "Address-of"],
            right: [
                "&",
                "*"
            ],
            answer: [1, 0]
        },

        {
            type: "matching",
            question: "Match each tree term.",
            left: ["Root", "Leaf", "Child"],
            right: [
                "A node connected to a parent.",
                "Top node of the tree.",
                "Node with no children."
            ],
            answer: [1, 2, 0]
        },

        {
            type: "matching",
            question: "Match iterator type to functionality.",
            left: ["iterator", "const_iterator"],
            right: [
                "Allows reading only.",
                "Allows reading and writing."
            ],
            answer: [1, 0]
        },

        {
            type: "matching",
            question: "Match each memory concept.",
            left: ["Heap Memory", "Stack Memory"],
            right: [
                "Used for dynamic allocation.",
                "Stores local variables."
            ],
            answer: [0, 1]
        },

        {
            type: "matching",
            question: "Match dynamic array operations.",
            left: ["new[]", "delete[]"],
            right: [
                "Deallocates memory.",
                "Allocates a dynamic array."
            ],
            answer: [1, 0]
        },

        {
            type: "matching",
            question: "Match pointer scenarios.",
            left: ["Dangling pointer", "Null pointer", "Memory Leak", "Double Free"],
            right: [
                "Deallocates block of memory more than once.",
                "Pointer that doesn't point to anything.",
                "When memory goes out of scope due to being deallocated.",
                "Memory is deallocated but never deleted and freed."
            ],
            answer: [2, 1, 3, 0]
        },

        {
            type: "matching",
            question: "Match each term to its structure.",
            left: ["Queue", "Stack", "Tree"],
            right: [
                "Parent-child relationships.",
                "FIFO structure.",
                "LIFO structure."
            ],
            answer: [1, 2, 0]
        },

        {
            type: "matching",
            question: "Match access specifier to visibility.",
            left: ["Public", "Private", "Protected"],
            right: [
                "Accessible from anywhere.",
                "Accessible in derived classes only.",
                "Accessible only inside the class."
            ],
            answer: [0, 2, 1]
        },

        {
            type: "matching",
            question: "Match each data structure with the appropriate function (some functions can be used in both structures).",
            left: [
                "front()",  
                "top()", 
                "pop()", 
                "back()",
                "push()"
            ],
            right: [
                "Queue", 
                "Stack", 
                "Both"
            ],

            answer: [0, 1, 2, 0, 2]
        },

        {
            type: "matching",
            question: "Match ADT to real-world example.",
            left: ["Linked List", "Double Linked List", "Tree", "Queue", "Stack"],
            right: [
                "Decision with multiple branching paths.",
                "Plates on top of one another.",
                "Server Request.",
                "Song Playlist.",
                "Fast forward and rewind on a remote"
            ],
            answer: [2, 4, 3, 0, 1]
        },

        {
            type: "matching",
            question: "Match defintion with term.",
            left: ["Container", "Iterator"],
            right: [
                "Holds a bunch pf elements, a vector or queue.",
                "Used to access elements that are stored in a special structure."
            ],
            answer: [0, 1]
        },

        {
            type: "matching",
            question: "Match the type of template to it's proper declaration.",
            left: ["Function Template", "Class Template"],
            right: ["template <typename T>", "template <class myClass> myClass{}"],
            answer: [0, 1]
        }
    ],

    cs3: [
        {
            type: "multiple-choice",
            question: "What does a Map store in C++?",
            options: ["Only keys", "Only values", "Key-value pairs", "Only integers"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which associative container allows multiple identical keys?",
            options: [
                "Map",
                "Set",
                "Multimap",
                "Unordered_Set"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which container guarantees elements are unique and sorted?",
            options: [
                "Vector",
                "Set",
                "Deque",
                "Unordered_Map"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which associative container does NOT maintain any specific order?",
            options: [
                "Map",
                "Multiset",
                "Unordered_Map",
                "Multimap"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "What does lower_bound return?",
            options: [
                "Iterator to last element less than key",
                "Iterator to first element no smaller than key",
                "Iterator to first element equal to key",
                "Iterator to smallest element"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which container is memory transparent and supports reserve()?",
            options: [
                "Vector",
                "Deque",
                "List",
                "Multiset"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Which container allows insertion at both front and back efficiently?",
            options: [
                "Vector",
                "List",
                "Set",
                "Deque"
            ],
            answer: 3
        },

        {
            type: "multiple-choice",
            question: "Which container supports operations such as splice(), merge(), and reverse()?",
            options: [
                "Vector",
                "List",
                "Set",
                "Deque"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "What is iterator invalidation?",
            options: [
                "When an iterator goes out of scope due to container modification",
                "When an iterator gets a new type",
                "When you increment an interator",
                "None of these"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Which value category represents an object near the end of its lifetime?",
            options: ["Lvalue", "Rvalue", "Xvalue", "PRvalue"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which algorithm executes a callback for every element?",
            options: ["accumulate", "for_each", "generate", "find"],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "What does accumulate do?",
            options: [
                "Searches for a value",
                "Counts elements",
                "Aggregates data",
                "Transforms elements"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which C++ concept lets objects act like functions?",
            options: [
                "Functors",
                "Lambda expressions",
                "Binders",
                "Function pointers"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Which cast is considered unsafe and converts any pointer type to another?",
            options: ["static_cast", "dynamic_cast", "const_cast", "reinterpret_cast"],
            answer: 3
        },

        {
            type: "multiple-choice",
            question: "Which design pattern decouples interface from implementation?",
            options: ["Bridge", "Observer", "Adapter", "Composite"],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Which pattern stores object state for undo functionality?",
            options: ["State", "Command", "Memento", "Adapter"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which pattern uses handlers to pass requests depending on what they are allowed to do?",
            options: [
                "Visitor",
                "Chain of Responsibility",
                "Flyweight",
                "Composite"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which pattern allows new operations without modifying existing structures?",
            options: ["Decorator", "Visitor", "State", "Adapter"],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which pattern minimizes memory by sharing intrinsic state?",
            options: ["Singleton", "Adapter", "Flyweight", "Prototype"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Who participates in Visitor Design?",
            options: ["Visitor", "Element", "Both", "None of these"],
            answer: 2
        },

        {
            type: "true-false",
            question: "True or False: Sets store identical elements in it.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Unordered containers use hash maps.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: upper_bound() is often used in range-based for loops.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Vector allow for insertion at the front.", 
            answer: false,
        },

        {
            type: "true-false",
            question: "True or False: Deque allows insertion and deletion at both ends.", 
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: List is a random access container.", 
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Deque is memory transparent and can use splice().",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: GLvalues can also be Xvalues.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: For Lambda, using [=] allows capture by reference.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Function pointers hold the address of the first line of a function.", 
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Container Adapters can use iterators and indexing.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: static_cast performs conversions at compile time.", 
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: dynamic_cast may return nullptr on failure.", 
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Observer Design uses subjects that publish any state changes to the observer.",
            answer: true
        },

        {
            type: "true-false",
            question: "Composite pattern when paired with Visitor Design handles processing individual elements.", 
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: For Prototype Design, in order to create a new object without making it from scratch, clone() must be used.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Flyweight Design can use extrinsic where the state is shared.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Emplace allocates a place inside a container then invokes a constructor.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: To declare Functor use operator().",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Command and Memento can be used together just like how Composite and Visitor can.",
            answer: true
        },

        {
            type: "fill-in-the-blank",
            question: "A ______ stores key-value pairs with unique keys.", 
            answer: "map" 
        },

        {
            type: "fill-in-the-blank",
            question: "A container that stores unique elements with no specific order is ______.", 
            answer: "unordered_Set" 
        },

        {
            type: "fill-in-the-blank",
            question: "A container that allows duplicate elements in sorted order is a ______.", 
            answer: "multiset" 
        },

        {
            type: "fill-in-the-blank",
            question: "The container that supports splice() and merge() is ______.", 
            answer: "list" 
        },

        {
            type: "fill-in-the-blank",
            question: "Vector is considered a ______ access container.", 
            answer: "random" 
        },

        {
            type: "fill-in-the-blank",
            question: "The value category that represents temporary objects is an ______.", 
            answer: "Rvalue" 
        },

        {
            type: "fill-in-the-blank",
            question: "The algorithm that counts elements based on a predicate is ______.", 
            answer: "count_if" 
        },

        {
            type: "fill-in-the-blank",
            question: "The algorithm that fills elements using a callback is ______.", 
            answer: "generate" 

        },

        {
            type: "fill-in-the-blank",
            question: "Objects that overload operator() are called ______.", 
            answer: "functors" 

        },

        {
            type: "fill-in-the-blank",
            question: "The cast used to add or remove const-ness is ______.", 
            answer: "const_cast" 

        },

        {
            type: "fill-in-the-blank",
            question: "Decoupling abstraction from implementation is done with the ______ design pattern.", 
            answer: "bridge" 
        },

        {
            type: "fill-in-the-blank",
            question: "Objects composed into tree structures belong to the ______ design pattern.", 
            answer: "composite"
        },

        {
            type: "fill-in-the-blank",
            question: "Encapsulating a request as an object describes the ______ design pattern.", 
            answer: "command" 
        },

        {
            type: "fill-in-the-blank",
            question: "In Observer pattern, ______ subscribe to subjects.", 
            answer: "observers"
        },

        {
            type: "fill-in-the-blank",
            question: "The design pattern that stores intrinsic and extrinsic state separately is ______.", 
            answer: "flyweight"
        },

        {
            type: "fill-in-the-blank",
            question: "Creating objects using clone() belongs to the ______ design pattern.", 
            answer: "prototype"
        },

        {
            type: "fill-in-the-blank",
            question: "State pattern stores behavior logic in separate ______.", 
            answer: "states" 

        },

        {
            type: "fill-in-the-blank",
            question: "The pattern that adds behavior dynamically is the ______ design pattern.", 
            answer: "decorator" 

        },

        {
            type: "fill-in-the-blank",
            question: "The pattern enabling runtime dispatch based on two objects is ______.", 
            answer: "double dispatch" 

        },

        {
            type: "fill-in-the-blank",
            question: "The unsafe cast that does not check types is ______.", 
            answer: "reinterpret_cast" 

        },

        {
            type: "matching",
            question: "Match each associative container concept with its correct description.",
            left: ["Map", "Unordered_Map", "Multiset", "Pairs"],
            right: [
                "stores elements in pairs with sorted keys",
                "stores key-value pairs with no guaranteed order",
                "allows multiple instances of the same element",
                "aggregates two values and is often used with maps"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each set-type container with the correct description.",
            left: ["Set", "Unordered_Set", "Multimap", "Multiset"],
            right: [
                "stores unique elements in sorted order",
                "stores unique elements with no specific ordering",
                "allows multiple values per key while maintaining order",
                "allows duplicates but maintains sorted order"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each range lookup operation with its correct behavior.",
            left: ["Lower_Bound", "Upper_Bound", "Map", "Unordered_Set"],
            right: [
                "first element no smaller than key",
                "first element greater than key",
                "stores ordered key-value pairs",
                "constant-average-time lookup with no ordering"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each sequential container with its main characteristic.",
            left: ["Vector", "Deque", "List", "Iterator Invalidation"],
            right: [
                "random access and memory transparent",
                "random access and memory opaque",
                "linear access with flexible insertion anywhere",
                "occurs when structure-modifying operations invalidate iterators"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each value-category concept with its definition.",
            left: ["Lvalue", "Rvalue", "Xvalue", "GLvalue"],
            right: [
                "has persistent memory address and returns by reference",
                "temporary object that can be moved from",
                "value near end of lifetime that can be moved",
                "refers to an object with persistent address and includes lvalue/xvalue"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each move-related feature with its purpose.",
            left: ["Move Semantics", "std::move", "Emplace", "Deque"],
            right: [
                "transfers resources from temporary objects",
                "casts to rvalue reference to enable movement",
                "constructs objects in place with efficient resource usage",
                "supports insertion/removal at both ends"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each container adapter description with the correct concept.",
            left: ["Container Adapters", "Vector", "Deque", "List"],
            right: [
                "restricts underlying container to special-purpose behavior",
                "supports capacity() and reserve() functions",
                "supports fast front/back insertions",
                "supports operations like splice(), merge(), unique()"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each STL algorithm with its correct description.",
            left: ["Find", "Find_If", "Count_if", "For_Each"],
            right: [
                "searches for a specific value",
                "searches for first element satisfying predicate",
                "counts elements meeting condition",
                "executes a function on each element"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each functional concept with its definition.",
            left: ["Function Pointers", "Lambda Expressions", "Functors", "Std::function"],
            right: [
                "stores address of function code",
                "anonymous functions that can capture variables",
                "objects behaving as functions via operator()",
                "can store lambdas, functors, and pointers"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each predefined algorithm category with its examples.",
            left: ["Non-modifying", "Modifying", "Accumulate", "Generate"],
            right: [
                "equal, mismatch, lexicographical_compare",
                "replace(), reverse(), transform()",
                "accumulates values with or without callback",
                "fills elements using callback return value"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each singleton concept to its correct definition.",
            left: ["Singleton Pattern", "Meyer's Singleton", "Classic Singleton", "Static Local Instance"],
            right: [
                "ensures only one instance exists",
                "thread-safe initialization via static local variable",
                "uses static pointer and manual memory management",
                "created inside function and persists across calls"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match abstract/concrete class concepts to their definitions.",
            left: ["Abstract Class", "Concrete Class", "Pure Virtual Function", "Derived Class"],
            right: [
                "provides abstract functions for a pattern",
                "implements all required functionality and can instantiate",
                "forces derived classes to provide implementation",
                "inherits from base and provides implementations"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match each C++ cast type to its description.",
            left: ["Static_Cast", "Dynamic_Cast", "Const_Cast", "Reinterpret_Cast"],
            right: [
                "compile-time conversion between related types",
                "runtime-checked cast that may return nullptr",
                "adds or removes const-ness",
                "unsafe conversion allowing unrelated pointer types"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match bridge pattern concepts with their roles.",
            left: ["Bridge Pattern", "Delegation", "Delegatee", "Abstraction"],
            right: [
                "decouples interface from implementation",
                "one object relying on another for functionality",
                "object that performs actual implementation",
                "interface hierarchy independent from implementation"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match composite pattern components to their meanings.",
            left: ["Component", "Leaf", "Composite", "Traversal"],
            right: [
                "uniform interface for all items",
                "primitive object in tree structure",
                "collection of children items",
                "movement across component hierarchy"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match command pattern roles to their responsibilities.",
            left: ["Command", "Concrete Command", "Receiver", "Invoker"],
            right: [
                "declares execute() interface",
                "implements execute() and calls receiver actions",
                "performs actual business operations",
                "requests command execution"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match mediator pattern roles with descriptions.",
            left: ["Mediator Pattern", "Concrete Mediator", "Colleague", "God Object"],
            right: [
                "centralizes communication between objects",
                "coordinates colleague behavior",
                "communicates only through mediator",
                "anti-pattern with too many responsibilities"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match memento pattern concepts to their correct function.",
            left: ["Memento Pattern", "Originator", "Memento", "Caretaker"],
            right: [
                "captures and restores object state",
                "creates and restores its state",
                "stores internal state safely",
                "keeps mementos but never opens them"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match state pattern roles to their function.",
            left: ["State Pattern", "Context", "State", "Behavior Change"],
            right: [
                "changes behavior based on internal state",
                "object whose behavior depends on state",
                "abstract operations for each state",
                "appears to change class when state changes"
            ],
            answer: [0, 1, 2, 3]
        },

        {
            type: "matching",
            question: "Match visitor pattern concepts to their definitions.",
            left: ["Visitor Pattern", "Element", "Visitor", "Double Dispatch"],
            right: [
                "separates algorithm from object structure",
                "declares accept(visitor)",
                "defines visit(elementType)",
                "runtime selection based on multiple objects"
            ],
            answer: [0, 1, 2, 3]
        }
    ],

    "computer-communication-networks": [
        {
            type: "multiple-choice",
            question: "What feature of TCP ensures that lost packets are retransmitted reliably?",
            options: [
                "Checksum-only delivery",
                "Three-way handshake and retransmission logic",
                "Broadcast-based delivery",
                "Stateless connection setup"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which protocol is connectionless and does NOT guarantee delivery?",
            options: [
                "TCP",
                "UDP",
                "IP",
                "Selective Repeat"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "IP primarily handles:",
            options: [
                "Reliable acknowledgement processes",
                "Window size negotiation",
                "Addressing and routing of packets",
                "Retransmission of errors"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Go-Back-In requires the sender to:",
            options: [
                "Retransmit only the corrupted packet",
                "Retransmit the lost packet and all packets after it",
                "Wait for a full window reset",
                "Restart the connection"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Selective Repeat is more efficient than Go-Back-In because it:",
            options: [
                "Uses smaller headers",
                "Retransmits only the lost packet",
                "Does not use ACKs",
                "Does not require a receiver window"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Flow control prevents:",
            options: [
                "The sender from overwhelming the receiver",
                "Routers from dropping packets due to congestion",
                "Duplicate ACKs",
                "Checksum failures"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Congestion control uses which growth method before loss occurs?",
            options: [
                "Multiplicative increase",
                "Exponential burst",
                "Additive increase",
                "Instantaneous doubling"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "UDP is preferred in which scenario?",
            options: [
                "Video streaming",
                "Banking transactions",
                "File transfer",
                "Password authentication"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Which protocol is responsible for routing packets on the internet?",
            options: [
                "TCP",
                "UDP",
                "IP",
                "ARP"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "The TCP three-way handshake process starts with:",
            options: [
                "ACK → SYN → FIN",
                "SYN → ACK → SYN-ACK",
                "SYN → SYN-ACK → ACK",
                "FIN → ACK → FIN-ACK"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "What happens in Multiplicative Decrease?",
            options: [
                "Window size doubles",
                "Transmission rate increases by 1",
                "Transmission rate is cut in half",
                "All packets are resent"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Selective Repeat requires:",
            options: [
                "Sender window is larger than receiver window",
                "Receiver window equals sender window",
                "Windows are disabled",
                "Packets are reordered randomly"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which protocol is most likely to drop packets silently?",
            options: [
                "TCP",
                "UDP",
                "IP",
                "Selective Repeat"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "TCP ensures error handling through:",
            options: [
                "Timed broadcast retries",
                "Out-of-band control lines",
                "Reliable acknowledgements and retransmission",
                "Hidden hardware flags"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "What type of control prevents routers from overflowing with packets?",
            options: [
                "Bit-rate control",
                "Flow control",
                "Congestion control",
                "Header validation"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which is TRUE about UDP?",
            options: [
                "Ensures ordered delivery",
                "Has connection setup",
                "Is faster than TCP",
                "Guarantees all packets arrive"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "IP belongs to which OSI layer function?",
            options: [
                "Link layer",
                "Transport layer",
                "Network layer",
                "Session layer"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Go-Back-In becomes inefficient when:",
            options: [
                "Loss rate is high",
                "Packets are small",
                "Receiver is slow",
                "Router queues are empty"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Selective Repeat requires storing:",
            options: [
                "All past packets forever",
                "Only corrupted headers",
                "Packets that arrive out of order",
                "No duplicates"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which statement describes flow control?",
            options: [
                "Ensures packets are routed globally",
                "Controls throughput between sender and receiver",
                "Adjusts packet time-to-live values",
                "Changes addressing format"
            ],
            answer: 1
        },

        {
            type: "true-false",
            question: "TCP provides guaranteed delivery through acknowledgements.",
            answer: true
        },

        {
            type: "true-false",
            question: "UDP requires a three-way handshake.",
            answer: false
        },

        {
            type: "true-false",
            question: "IP is responsible for routing packets between networks.",
            answer: true
        },

        {
            type: "true-false",
            question: "Go-Back-In retransmits only the lost packet.",
            answer: false
        },

        {
            type: "true-false",
            question: "Selective Repeat allows packets to be accepted out of order.",
            answer: true
        },

        {
            type: "true-false",
            question: "Flow control prevents the receiver from being overwhelmed.",
            answer: true
        },

        {
            type: "true-false",
            question: "Congestion control reduces transmission speed when packet loss occurs.",
            answer: true
        },

        {
            type: "true-false",
            question: "UDP guarantees that all packets arrive in the correct order.",
            answer: false
        },

        {
            type: "true-false",
            question: "IP operates above the transport layer.",
            answer: false
        },

        {
            type: "true-false",
            question: "TCP uses a connection-oriented model.",
            answer: true
        },

        {
            type: "true-false",
            question: "UDP is often used for applications requiring low latency.",
            answer: true
        },

        {
            type: "true-false",
            question: "Congestion control and flow control solve the same type of problem.",
            answer: false
        },

        {
            type: "true-false",
            question: "Selective Repeat requires larger memory than Go-Back-In.",
            answer: true
        },

        {
            type: "true-false",
            question: "TCP uses sequence numbers to keep data ordered.",
            answer: true
        },

        {
            type: "true-false",
            question: "Go-Back-In is more efficient than Selective Repeat.",
            answer: false
        },

        {
            type: "true-false",
            question: "IP addresses allow devices to communicate across networks.",
            answer: true
        },

        {
            type: "true-false",
            question: "UDP includes built-in packet recovery.",
            answer: false
        },

        {
            type: "true-false",
            question: "Congestion control uses multiplicative decrease after loss.",
            answer: true
        },

        {
            type: "true-false",
            question: "TCP does not guarantee ordering of packets.",
            answer: false
        },

        {
            type: "true-false",
            question: "Flow control is a transport-layer mechanism.",
            answer: true
        },

        {
            type: "fill-in-the-blank",
            question: "TCP uses a __________ handshake to establish a connection.",
            answer: "three-way"
        },

        {
            type: "fill-in-the-blank",
            question: "UDP is considered a __________ protocol because it does not require a connection.",
            answer: "connectionless"
        },

        {
            type: "fill-in-the-blank",
            question: "IP handles packet __________ and routing across networks.",
            answer: "addressing"
        },

        {
            type: "fill-in-the-blank",
            question: "In Go-Back-In, the sender retransmits all packets after a packet is __________.",
            answer: "lost"
        },

        {
            type: "fill-in-the-blank",
            question: "Selective Repeat retransmits only the packet that was __________.",
            answer: "lost"
        },

        {
            type: "fill-in-the-blank",
            question: "Flow control prevents the receiver from being __________ with data.",
            answer: "overwhelmed"
        },

        {
            type: "fill-in-the-blank",
            question: "Congestion control uses __________ increase before loss occurs.",
            answer: "additive"
        },

        {
            type: "fill-in-the-blank",
            question: "UDP does not guarantee packet __________.",
            answer: "delivery"
        },

        {
            type: "fill-in-the-blank",
            question: "IP is short for __________ Protocol.",
            answer: "Internet"
        },

        {
            type: "fill-in-the-blank",
            question: "TCP ensures packets are delivered in the correct order using __________ numbers.",
            answer: "sequence"
        },

        {
            type: "fill-in-the-blank",
            question: "The opposite of additive increase in congestion control is __________ decrease.",
            answer: "multiplicative"
        },

        {
            type: "fill-in-the-blank",
            question: "Selective Repeat requires that the receiver window size matches the __________ window size.",
            answer: "sender"
        },

        {
            type: "fill-in-the-blank",
            question: "UDP is often used in applications requiring low __________.",
            answer: "latency"
        },

        {
            type: "fill-in-the-blank",
            question: "Flow control operates at the __________ layer.",
            answer: "transport"
        },

        {
            type: "fill-in-the-blank",
            question: "In TCP, __________ occur when packets are delivered incorrectly or not at all.",
            answer: "loss"
        },

        {
            type: "fill-in-the-blank",
            question: "IP works alongside the DNS to handle host __________.",
            answer: "addressing"
        },

        {
            type: "fill-in-the-blank",
            question: "UDP trades reliability for improved __________.",
            answer: "speed"
        },

        {
            type: "fill-in-the-blank",
            question: "TCP ensures reliable delivery using __________ acknowledgements.",
            answer: "positive"
        },

        {
            type: "fill-in-the-blank",
            question: "Selective Repeat stores out-of-order packets in a __________.",
            answer: "buffer"
        },

        {
            type: "fill-in-the-blank",
            question: "Congestion control prevents __________ overload on the network.",
            answer: "traffic"
        },

        {
            type: "matching",
            question: "Match the transport protocol to its characteristic.",
            left: [
                "TCP",
                "UDP",
                "IP",
                "Selective Repeat"
            ],
            right: [
                "Ensures reliable, ordered delivery",
                "Fast, no guarantee of delivery",
                "Routes packets between networks",
                "Retransmits only missing packets"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match the process to its description.",
            left: [
                "Additive Increase",
                "Multiplicative Decrease",
                "Three-Way Handshake",
                "Flow Control"
            ],
            right: [
                "Slowly increases transmission speed",
                "Cuts speed in half on packet loss",
                "Used to establish TCP connection",
                "Prevents receiver overload"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match the retransmission strategy to its behavior.",
            left: [
                "Go-Back-In",
                "Selective Repeat",
                "Lost Packet",
                "Receiver Window"
            ],
            right: [
                "Resend all packets after error",
                "Resend only the missing packet",
                "Triggers retransmission",
                "Buffers incoming packets"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match the term to its protocol layer.",
            left: [
                "TCP",
                "UDP",
                "IP",
                "DNS"
            ],
            right: [
                "Transport layer reliable protocol",
                "Transport layer fast protocol",
                "Network layer routing",
                "Resolves hostnames"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match the concept with its reason for use.",
            left: [
                "Sequence Numbers",
                "ACKs",
                "Timeouts",
                "Sender Window"
            ],
            right: [
                "Ensure data ordering",
                "Confirm delivery",
                "Trigger retransmission",
                "Limit outstanding packets"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match the protocol to the scenario.",
            left: [
                "TCP",
                "UDP",
                "IP",
                "Go-Back-In"
            ],
            right: [
                "Used for reliable file transfer",
                "Used for gaming and voice calls",
                "Used for routing packets",
                "Used for retransmitting all packets after loss"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each mechanism to what it prevents.",
            left: [
                "Flow Control",
                "Congestion Control",
                "Selective Repeat",
                "UDP"
            ],
            right: [
                "Receiver overload",
                "Network overload",
                "Full-window retransmission",
                "Reliability overhead"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each TCP component to its role.",
            left: [
                "SYN",
                "ACK",
                "FIN",
                "Window Size"
            ],
            right: [
                "Request to start connection",
                "Confirm receipt",
                "Request to close connection",
                "Controls flow of packets"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match the feature to the correct protocol.",
            left: [
                "Fast but unreliable",
                "Reliable with ordering",
                "Routing and addressing",
                "Retransmits missing packets only"
            ],
            right: [
                "UDP",
                "TCP",
                "IP",
                "Selective Repeat"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match the behavior to the correct term.",
            left: [
                "Packet Loss",
                "Timeout",
                "Additive Increase",
                "Receiver Window Full"
            ],
            right: [
                "Triggers retransmission",
                "Means no ACK arrived in time",
                "Slowly increases data rate",
                "Stops sender from transmitting"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each concept to the layer it belongs to.",
            left: [
                "Flow Control",
                "Congestion Control",
                "IP Addressing",
                "UDP Segments"
            ],
            right: [
                "Transport layer receiver control",
                "Transport layer network load control",
                "Network layer",
                "Transport layer unreliable delivery"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each retransmission concept to its purpose.",
            left: [
                "Selective Repeat Buffer",
                "Go-Back-In Window Reset",
                "ACK Packet",
                "Timeout Trigger"
            ],
            right: [
                "Stores out-of-order frames",
                "Resend all after loss",
                "Confirms packet received",
                "Signal to retransmit"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each term to what it describes.",
            left: [
                "Connectionless",
                "Reliable Delivery",
                "Routing",
                "Retransmission"
            ],
            right: [
                "UDP",
                "TCP",
                "IP",
                "Go-Back-In"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each mechanism to how it reacts to packet loss.",
            left: [
                "TCP",
                "UDP",
                "Go-Back-In",
                "Selective Repeat"
            ],
            right: [
                "Retransmits based on ACKs",
                "Does not retransmit",
                "Resends entire sequence",
                "Resends only missing packet"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each scenario to the ideal protocol.",
            left: [
                "Video streaming",
                "Email transfer",
                "Routing packets",
                "Recovering only lost frames"
            ],
            right: [
                "UDP",
                "TCP",
                "IP",
                "Selective Repeat"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match the control method to its focus.",
            left: [
                "Flow Control",
                "Congestion Control",
                "Timeout",
                "Sequence Number"
            ],
            right: [
                "Receiver ability",
                "Network capacity",
                "Packet not acknowledged in time",
                "Packet ordering"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match the key term to what it affects.",
            left: [
                "Window Size",
                "ACK",
                "Routing",
                "Retransmission Strategy"
            ],
            right: [
                "Amount of unacknowledged data allowed",
                "Confirms packet receipt",
                "Determines next hop",
                "Defines how errors are corrected"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each transport-layer concept with its function.",
            left: [
                "Reliable Stream",
                "Unreliable Datagram",
                "Sender Window",
                "Receiver Buffer"
            ],
            right: [
                "TCP",
                "UDP",
                "Limits outstanding packets",
                "Stores packets temporarily"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each packet behavior to its consequence.",
            left: [
                "Out-of-order packets",
                "Packet drop",
                "Timeout",
                "Window full"
            ],
            right: [
                "Buffered in Selective Repeat",
                "Triggers retransmission",
                "Indicates ACK not received",
                "Sender must pause"
            ],
            answer: [0,1,2,3]
        },

        {
            type: "matching",
            question: "Match each protocol to its priority.",
            left: [
                "TCP",
                "UDP",
                "IP",
                "Go-Back-In"
            ],
            right: [
                "Reliability",
                "Speed",
                "Routing",
                "Bulk retransmission"
            ],
            answer: [0,1,2,3]
        }
    ],

    "graphic-design": [
        {
            type: "multiple-choice",
            question: "Which HTML tag is used to define the largest heading?",
            options: ["<h6>", "<heading>", "<h1>", "<title>"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which HTML tag does NOT require a closing tag?",
            options: ["<div>", "<p>", "<img>", "<span>"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "What attribute is used in an <a> tag to specify the destination URL?",
            options: ["src", "link", "url", "href"],
            answer: 3
        },

        {
            type: "multiple-choice",
            question: "Where should the <link> tag be placed when using external CSS?",
            options: ["Inside <body>", "Inside <footer>", "Inside <head>", "Anywhere"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "What is the purpose of CSS?",
            options: [
                "To structure webpage content",
                "To add interactivity to webpages",
                "To style and format HTML pages",
                "To store user data"
            ],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which CSS selector targets elements by their class?",
            options: [".classname", "#classname", "classname", "class>name"],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "Which tag is used to insert JavaScript into HTML?",
            options: ["<js>", "<script>", "<javascript>", "<code>"],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which property changes text color in CSS?",
            options: ["font-color", "color", "text-style", "text-color"],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "What does an HTML attribute do?",
            options: [
                "Defines a CSS stylesheet",
                "Adds extra information to an element",
                "Runs JavaScript code",
                "Generates a new element"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "What is nesting in HTML?",
            options: [
                "Placing CSS inside HTML",
                "Putting one element inside another",
                "Stacking <div> elements",
                "Indenting text"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which is the correct syntax for an internal CSS block?",
            options: [
                "<style></style>",
                "<css></css>",
                "<script></script>",
                "<sheet></sheet>"
            ],
            answer: 0
        },

        {
            type: "multiple-choice",
            question: "JavaScript events allow pages to respond to:",
            options: [
                "Browser installations",
                "User actions like clicks",
                "HTML compiling",
                "CSS animations only"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which example shows proper HTML nesting?",
            options: [
                "<p><em>text</p></em>",
                "<div><p>text</p></div>",
                "<img></img>",
                "</div><p>text</p>"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which of the following is a valid CSS property?",
            options: ["background-style", "bg", "background-color", "color-bg"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "Which symbol is used to access object properties in JavaScript?",
            options: [":", ".", "#", "@"],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which HTML element contains page metadata?",
            options: ["<meta>", "<body>", "<footer>", "<head>"],
            answer: 3
        },

        {
            type: "multiple-choice",
            question: "Which CSS unit is relative to the font size of the root element?",
            options: ["px", "em", "rem", "%"],
            answer: 2
        },

        {
            type: "multiple-choice",
            question: "What does the 'src' attribute define?",
            options: [
                "CSS class name",
                "The path to an image or media file",
                "Location of external CSS",
                "The text content of the page"
            ],
            answer: 1
        },

        {
            type: "multiple-choice",
            question: "Which of the following can JavaScript NOT do?",
            options: [
                "Modify HTML content",
                "Change CSS styles",
                "Reload the browser window",
                "Compile C++ code"
            ],
            answer: 3
        },
        
        {
            type: "multiple-choice",
            question: "Which HTML tag is used to create a line break?",
            options: ["<br>", "<lb>", "<break>", "<line>"],
            answer: 0
        },

        {
            type: "true-false",
            question: "True or False: The <img> tag requires a closing tag.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: CSS stands for Cascading Style Sheets.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: The href attribute is used to link an external CSS file.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: All HTML elements must have an attribute.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Internal CSS only affects the page it is written in.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: JavaScript can update HTML content dynamically.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: The <script> tag can appear in both the head and body sections.",
            answer: true
        },
        {
            type: "true-false",
            question: "True or False: Proper HTML nesting means tags overlap each other.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: Objects in JavaScript cannot store functions.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: CSS can change the layout of a webpage.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: All JavaScript events require user interaction.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: The <style> tag is used for internal CSS.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: HTML is a programming language.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: The <link> tag belongs in the <head> section.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: CSS classes can be reused on multiple elements.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: JavaScript cannot detect keyboard events.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: The DOM stands for Document Object Model.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Inline CSS affects only one element.",
            answer: true
        },

        {
            type: "true-false",
            question: "True or False: Attributes belong only to <img> and <a> tags.",
            answer: false
        },

        {
            type: "true-false",
            question: "True or False: The <meta> tag stores visible content.",
            answer: false
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: HTML stands for ______.",
            answer: "Hypertext Markup Language"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: CSS files are linked using the ______ tag.",
            answer: "link"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The attribute that defines an image path is called ______.",
            answer: "src"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: JavaScript is added to HTML using the ______ tag.",
            answer: "script"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: A CSS class is defined with a ______ symbol.",
            answer: "."
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: In HTML, placing an element inside another element is called ______.",
            answer: "nesting"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: CSS stands for Cascading ______ Sheets.",
            answer: "Style"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The part of an element that provides extra information is called an ______.",
            answer: "attribute"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The visual styling of a webpage is controlled using ______.",
            answer: "CSS"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The object that represents the entire webpage structure is called the ______.",
            answer: "DOM"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: JavaScript functions are stored inside ______.",
            answer: "objects"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The <br> tag is used to insert a ______.",
            answer: "line break"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The <a> tag uses the ______ attribute for navigation.",
            answer: "href"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Events allow JavaScript to react to ______ actions.",
            answer: "user"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Internal CSS is written inside the ______ tag.",
            answer: "style"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Reusable styles are created with CSS ______.",
            answer: "classes"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The process of adjusting spacing between elements in CSS is called ______.",
            answer: "margin"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: JavaScript can listen for button ______.",
            answer: "clicks"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: The <head> section contains page ______.",
            answer: "metadata"
        },

        {
            type: "fill-in-the-blank",
            question: "Fill in the blank: Objects are made of key-value ______.",
            answer: "pairs"
        },

        {
            type: "matching",
            question: "Match each HTML tag to what it represents.",
            left: ["<p>", "<h1>", "<img>", "<a>"],
            right: ["Heading", "Paragraph", "Image", "Link"],
            answer: [1, 0, 2, 3]
        },

        {
            type: "matching",
            question: "Match each CSS selector to what it targets.",
            left: [".item", "#main", "p", "*"],
            right: ["All elements", "Paragraphs", "ID", "Class"],
            answer: [3, 2, 1, 0]
        },

        {
            type: "matching",
            question: "Match each attribute to its purpose.",
            left: ["src", "href", "alt", "id"],
            right: [
                "Identifies an element",
                "Image path",
                "Link destination",
                "Screen reader description"
            ],
            answer: [1, 2, 3, 0]
        },

        {
            type: "matching",
            question: "Match each CSS property to what it controls.",
            left: ["color", "margin", "font-size", "background-color"],
            right: ["Background shade", "Space outside element", "Text color", "Text size"],
            answer: [2, 1, 3, 0]
        },

        {
            type: "matching",
            question: "Match each JavaScript concept.",
            left: ["object", "event", "function", "property"],
            right: [
                "User interaction",
                "Reusable code",
                "Named value stored in object",
                "Collection of key-value pairs"
            ],
            answer: [3, 0, 1, 2]
        },

        {
            type: "matching",
            question: "Match structure with its use.",
            left: ["<ul>", "<table>", "<form>", "<nav>"],
            right: [
                "Navigation links",
                "User input",
                "Lists",
                "Data grid"
            ],
            answer: [2, 3, 1, 0]
        },

        {
            type: "matching",
            question: "Match event types to descriptions.",
            left: ["click", "keyup", "load", "mouseover"],
            right: [
                "Triggered when page finishes loading",
                "Triggered when pressed key is released",
                "Triggered when mouse hovers",
                "Triggered when element is clicked"
            ],
            answer: [3, 1, 0, 2]
        },

        {
            type: "matching",
            question: "Match CSS units to their meaning.",
            left: ["px", "em", "%", "vh"],
            right: [
                "Percentage of container",
                "Pixels",
                "Based on parent font size",
                "Viewport height"
            ],
            answer: [1, 2, 0, 3]
        },

        {
            type: "matching",
            question: "Match each code example to the correct element type.",
            left: ["<div>", "<style>", "<script>", "<img>"],
            right: [
                "Image",
                "JavaScript",
                "CSS block",
                "Generic container"
            ],
            answer: [3, 2, 1, 0]
        },

        {
            type: "matching",
            question: "Match HTML structure terms.",
            left: ["Head", "Body", "Footer", "Main"],
            right: [
                "Content section",
                "Metadata and links",
                "Bottom of page",
                "Main content area"
            ],
            answer: [1, 0, 2, 3]
        },

        {
            type: "matching",
            question: "Match CSS concepts.",
            left: ["class", "id", "selector", "property"],
            right: [
                "Unique element label",
                "Reusable styling group",
                "CSS attribute like color or margin",
                "Targets elements"
            ],
            answer: [1, 0, 3, 2]
        },

        {
            type: "matching",
            question: "Match JS object components.",
            left: ["method", "value", "key", "object"],
            right: [
                "Stores paired data",
                "Identifier in a key-value pair",
                "Function stored inside object",
                "Data stored in property"
            ],
            answer: [2, 3, 1, 0]
        },

        {
            type: "matching",
            question: "Match HTML display types.",
            left: ["block", "inline", "inline-block", "none"],
            right: [
                "Hides element",
                "Sets width but stays inline",
                "Starts on new line",
                "Flows with text"
            ],
            answer: [2, 3, 1, 0]
        },

        {
            type: "matching",
            question: "Match link-related concepts.",
            left: ["href", "target", "<a>", "navigate"],
            right: [
                "Destination page",
                "Open link in new tab",
                "Action of following a link",
                "HTML link element"
            ],
            answer: [0, 1, 3, 2]
        },

        {
            type: "matching",
            question: "Match input types to examples.",
            left: ["text", "password", "checkbox", "radio"],
            right: [
                "Single option selection",
                "Hidden characters",
                "Typeable field",
                "Toggle on/off"
            ],
            answer: [2, 1, 3, 0]
        },

        {
            type: "matching",
            question: "Match JS event examples.",
            left: ["onclick", "oninput", "onload", "onfocus"],
            right: [
                "Triggered when element gains focus",
                "Triggered on text input change",
                "Triggered when page finishes loading",
                "Triggered when user clicks"
            ],
            answer: [3, 1, 2, 0]
        },

        {
            type: "matching",
            question: "Match CSS layout properties.",
            left: ["display", "position", "padding", "border"],
            right: [
                "Space between content and edge",
                "Outline around element",
                "Element type and behavior",
                "Element placement rules"
            ],
            answer: [2, 3, 0, 1]
        },

        {
            type: "matching",
            question: "Match HTML element groups.",
            left: ["Semantic", "Media", "Text", "Form"],
            right: [
                "Images and video",
                "p and span",
                "header and footer",
                "Input fields"
            ],
            answer: [2, 0, 1, 3]
        },

        {
            type: "matching",
            question: "Match CSS colors to examples.",
            left: ["hex", "rgb", "name", "hsl"],
            right: [
                "Red, green, blue values",
                "Hue, saturation, lightness",
                "Named colors like 'blue'",
                "#374e58"
            ],
            answer: [3, 0, 2, 1]
        },

        {
            type: "matching",
            question: "Match nesting examples.",
            left: ["<p><strong></strong></p>", "<a><img></a>", "<div><p></p></div>", "<style><div></div></style>"],
            right: [
                "Correct nesting",
                "Incorrect nesting (HTML inside CSS)",
                "Correct nesting",
                "Correct nesting but improper use"
            ],
            answer: [0, 3, 2, 1]
        }
    ]
};