const flashcardsData = {
    cs1: {
        "Variable": {
            "Variable": [
                {
                    topic: "Variable",
                    definition: "a storage location identified by a name that holds a value which can be changed during run-time."
                }
            ]
        },

        "Data Types": {
            "Int": [
                {
                    topic: "Int",
                    definition: "data type that stores whole numbers without decimals."
                }
            ],
            "Float": [
                {
                    topic: "Float",
                    definition: "data type that stores numbers with decimal points, allowing for fractional values."
                }
            ],
            "Char": [
                {
                    topic: "Char",
                    definition: "data type that stores a single character, typically enclosed in single quotes."
                }
            ],
            "Bool": [
                {
                    topic: "Bool",
                    definition: "data type that represents boolean values, which can be either true or false."
                }
            ],
            "String": [
                {
                    topic: "String",
                    definition: "data type that represents a sequence of characters, typically enclosed in double quotes."
                }
            ],
            "Double": [
                {
                    topic: "Double",
                    definition: "data type that stores double-precision floating-point numbers, providing greater accuracy than float."
                }
            ]
        },

        "Functions": {
            "Functions": [
                {
                    topic: "Functions",
                    definition: "a block of code that performs a specific task, can take inputs (parameters) and may return an output (return value)."
                }
            ]
        },

        "Arrays": {
            "Arrays": [
                {
                    topic: "Arrays",
                    definition: "a type of sequential container that stores elements of the same data type in contiguous memory locations, uses []."
                }
            ]
        },

        "Recursion": {
            "Recursion": [
                {
                    topic: "Recursion",
                    definition: "a technique where a function calls itself in order to solve a problem by breaking it down into smaller subproblems."
                }
            ]
        },

        "Sorting Algorithms": {
            "Sorting Algorithms": [
                {
                    topic: "Sorting Algorithms",
                    definition: "methods used to arrange elements in a specific order, such as bubble sort, selection sort, and merge sort."
                }
            ]
        },

        "Searching Algorithms": {
            "Searching Algorithms": [
                {
                    topic: "Searching Algorithms",
                    definition: "methods used to find specific elements within a data structure, such as linear search and binary search."
                }
            ]
        },

        "Data Structures": {
            "Linear Structures": [
                {
                    topic: "Linear Structures",
                    definition: "data elements arranged in sequential order and are connected to their previous and next elements. Examples include arrays, linked lists, stacks, and queues."
                }
            ],
            "Non-Linear Structures": [
                {
                    topic: "Non-Linear Structures",
                    definition: "non-sequential data elements that are organized in a hierarchical manner. Examples include trees, graphs, hash tables."
                }
            ]
        }
    },

    cs2: {
        "Abstract Data Types": {
            "Abstract Data Types": [
                {
                    topic: "Abstract Data Types",
                    definition: "a data type that is defined by its behavior from the point of view of a user, specifically in terms of possible values, possible operations on data of this type, and the behavior of these operations."
                }
            ]
        },

        "Classes": {
            "Class": [
                {
                    topic: "Class",
                    definition: "user-defined data type that serves as a base to create objects."
                }
            ],
            "Object": [
                {
                    topic: "Object",
                    definition: "an instance of a class that can be used to access its data and functions."
                }
            ],
            "Access Specifiers": [
                {
                    topic: "Access Specifiers",
                    definition: "define visibility and accessibility of class members. These include public, private and protected."
                }
            ]
        },

        "Pointers": {
            "Pointer": [
                {
                    topic: "Pointer",
                    definition: "a variable that stores the memory address of another variable."
                }
            ],

            "Address-of Operator": [
                {
                    topic: "Address-of Operator",
                    definition: "gets memory address of a variable using &."
                }
            ],

            "Dereference Operator": [
                {
                    topic: "Dereference Operator",
                    definition: "used with existing pointer that can access the value it is holding using *."
                }
            ],

            "Nullptr": [
                {
                    topic: "Nullptr",
                    definition: "when the pointer isn't pointing to an object at the moment."
                }
            ]
        },

        "Dynamic Array": {
            "Dynamic Array": [
                {
                    topic: "Dynamic Array",
                    definition: "a variable that holds a pointer to an array value."
                }
            ]
        },

        "Templates": {
            "Templates": [
                {
                    topic: "Templates",
                    definition: "allows for the ability to write generic functions and classes that work with any data type given."
                }
            ],

            "Function Templates": [
                {
                    topic: "Function Templates",
                    definition: "function blueprint that can operate on several data types without rewriting function's logic."
                }
            ],

            "Class Templates": [
                {
                    topic: "Function Templates",
                    definition: "function blueprint for class that can allow for single class definition to manage objects of different data types."
                }
            ]
        },

        "Stacks": {
            "Stacks": [
                {
                    topic: "Stacks",
                    definition: "a container that store several elements using LIFO (Last In, First Out). Uses push() to put elements in stack, pop() to remove the top element, and top() to return a reference to element at top of stack."
                }
            ]
        },

        "Queues": {
            "Queues": [
                {
                    topic: "Queues",
                    definition: "a data structure that has access to front and back unlike stack and uses FILO (First in, Last out). Can use most of stack's functions but can also use front()/back()."
                }
            ]
        },

        "Linked Lists": {
            "Linked Lists": [
                {
                    topic: "Linked Lists",
                    definition: "a data structure where nodes are linked together using pointers, linear and each element points to the next one."
                }
            ]
        },

        "Trees": {
            "Trees": [
                {
                    topic: "Trees",
                    definition: "a data structure that is non-linear where a parent node can be connected to several children nodes."
                }
            ]
        },

        "Double Linked Lists": {
            "Double Linked Lists": [
                {
                    topic: "Double Linked Lists",
                    definition: "a data structure where each node can access it's next and previous node, allowing for forward and backward traversal."
                }
            ]
        },

        "Containers/Iterators": {
            "Containers": [
                {
                    topic: "Containers",
                    definition: "a data structure that stores and handles several objects."
                }
            ],

            "Iterators": [
                {
                    topic: "Iterators",
                    definition: "an object that allows for container traversal without modifying the actual container."
                }
            ]
        },

        "Inheritance": {
            "Base Class": [
                {
                    topic: "Base Class",
                    definition: "class whose members are inherited."
                }
            ],

            "Derived Class": [
                {
                    topic: "Derived Class",
                    definition: "class inheriting from base class and has its own unique functions."
                }
            ],

            "Single Inheritance": [
                {
                    topic: "Single Inheritance",
                    definition: "derived class inherits from one base class."
                }
            ],

            "Multiple Inheritance": [
                {
                    topic: "Multiple Inheritance",
                    definition: "derived class inherits from multiple base classes."
                }
            ]
        }
    },

    cs3: {
        "Associative Containers": {
            "Map": [
                {
                    topic: "Map",
                    definition: "an associative container that stores elements in pairs, first pair element is key that can be used to look for second pair element."
                },
                {
                    topic: "Unordered_Map",
                    definition: "an associative container that stores elements in key-value pairs without any specific order, providing average constant time complexity for lookups."
                }
            ],

            "Set": [
                {
                    topic: "Set",
                    definition: "an associative container that stores unique elements in a sorted order."
                },
                {
                    topic: "Unordered_Set",
                    definition: "an associative container that stores unique elements without any specific order, providing average constant time complexity for lookups."
                }
            ],

            "Multimap": [
                {
                    topic: "Multimap",
                    definition: "an associative container that allows multiple pairs with the same key, storing elements in a specific order."
                }
            ],

            "Multiset": [
                {
                    topic: "Multiset",
                    definition: "an associative container that allows multiple instances of the same element, storing them in a specific order."
                }
            ],

            "Pairs": [
                {
                    topic: "Pairs",
                    definition: "uses <utility> and std::make_pair, aggregates two values that could be the same. Often used in maps/multimaps."
                }
            ],

            "Lower_Bound": [
                {
                    topic: "Lower_Bound",
                    definition: "part of range lookup and will return iterator to first element no smaller than key."
                }
            ],

            "Upper_Bound": [
                {
                    topic: "Upper_Bound",
                    definition: "part of range lookup and will return iterator to first element greater than key."
                }
            ]
        },

        "Sequential Containers": {
            "Vector": [
                {
                    topic: "Vector",
                    definition: "a random access container and memory transparent container that can use capacity() and reserve() unlike other containers."
                }
            ],

            "Deque": [
                {
                    topic: "Deque",
                    definition: "a random access container and is memory opaque, it can insert and delete elements at the front and back unlike vector."
                }
            ],

            "List": [
                {
                    topic: "List",
                    definition: "a linear access container with the ability to insert and delete anywhere unlike vector and deque, has access to operations such as splice(), merge(), remove(), reverse(), and unique()."
                }
            ],

            "Iterator Invalidation": [
                {
                    topic: "Iterator Invalidation",
                    definition: "occurs when iterator goes out of scope when update operation is used with vector or deque."
                }
            ],

            "Lvalue": [
                {
                    topic: "Lvalue",
                    definition: "the result whose return type is a reference and has persistant memory address."
                }
            ],

            "Rvalue": [
                {
                    topic: "Rvalue",
                    definition: "an expression that uses && and does not have a persistent memory address and typically represents a temporary object or a value that is about to be moved from."
                }
            ],

            "Xvalue": [
                {
                    topic: "Xvalue",
                    definition: "an object that is near the end of its lifetime and can be moved from, typically representing a resource that can be transferred to another object."
                }
            ],

            "GLvalue": [
                {
                    topic: "GLvalue",
                    definition: "an expression that refers to an object that has a persistent address and can be either an lvalue or an xvalue."
                }
            ],

            "PRvalue": [
                {
                    topic: "PRvalue",
                    definition: "an rvalue that isn't an xvalue whose return type is not a reference."
                }
            ],

            "Move Semantics": [
                {
                    topic: "Move Semantics",
                    definition: "uses rvalue references to transfer resources from temporary objects to new objects, improving performance by avoiding unnecessary copies."
                }
            ],

            "std::move": [
                {
                    topic: "std::move",
                    definition: "a standard library function that casts an object to an rvalue reference, enabling move semantics."
                }
            ],

            "Emplace": [
                {
                    topic: "Emplace",
                    definition: "allocates a place in container and invokes constructor using specified arguments and is has a greater variety of constructors and is more resource efficient."
                }
            ],

            "Container Adapters": [
                {
                    topic: "Container Adapters",
                    definition: "modify a sequential underlying container for specfific purpose by limiting interface. Uses no iterators, indexing and has few functions that are supported like size(), empty(), and swap()."
                }
            ]
        },

        "STL Algorithms": {
            "Find": [
                {
                    topic: "Find",
                    definition: "an algorithm that searches for a specific value in a range and returns an iterator to the first occurrence of that value. If the value is not found, it returns the end iterator of the range."
                }
            ],

            "Function Pointers": [
                {
                    topic: "Function Pointers",
                    definition: "holds addrest of the first line of function code, may be invoked indirectly and can be passed as arguments to other functions. Ex: char (*fp)(int); fp = myFunc;"
                }
            ],

            "Find_If": [
                {
                    topic: "Find_If",
                    definition: "an algorithm that searches for the first element in a range that satisfies a specified predicate and returns an iterator to that element. If no such element is found, it returns the end iterator of the range."
                }
            ],

            "Lambda Expressions": [
                {
                    topic: "Lambda Expressions",
                    definition: "an anonymous function that allows for inline function definitions and can capture variables from the surrounding scope. Ex: [capture](parameters) -> return_type { body }"
                }
            ],

            "Count_if": [
                {
                    topic: "Count_if",
                    definition: "an algorithm that counts the number of elements in a range that satisfy a specified predicate and returns the count as an integer. Ex: int cnt = count_if(v.begin(), v.end(), [](int x) { return x > 5; });"
                }
            ],

            "Generate": [
                {
                    topic: "Generate",
                    definition: "fills elements with value returned by callback. Ex: generate(v.begin(), v.end(), []() { return rand() % 10; });"
                }
            ],

            "For_Each": [
                {
                    topic: "For_Each",
                    definition: "executes a callback per element in a range. Ex: for_each(v.begin(), v.end(), [](int &n) { cout << n << endl; });"
                }
            ],

            "Accumulate": [
                {
                    topic: "Accumulate",
                    definition: "accumalates data about container and has two versions, one returns accumulated value and the other can invoke callback where first is accumulator. Ex (lamda version): int sum = accumulate(v.begin(), v.end(), 0, [](int a, int b) { return a + b; });"
                }
            ],

            "Functors": [
                {
                    topic: "Functors",
                    definition: "objects that can be treated as though they are functions or function pointers by overloading the operator()."
                }
            ],

            "Predifined Functors": [
                {
                    topic: "Predifined Functors",
                    definition: "standard library functors defined in <functional> header, such as std::plus, std::minus, std::multiplies, std::divides, std::modulus, std::negate, std::equal_to, std::not_equal_to, std::greater, std::less, std::greater_equal, and std::less_equal."
                }
            ],

            "Binders": [
                {
                    topic: "Binders",
                    definition: "specialized function that creates a function by assigning a value of parameter of another function. Ex: auto newFunc = std::bind(originalFunc, _1, 42);"
                }
            ],

            "Std::function": [
                {
                    topic: "Std::function",
                    definition: "using <functional>, it can point to lambas, function pointers, functors, and binders. Ex: std::function<int(int, int)> func = [](int a, int b) { return a + b; };"
                }
            ],

            "Utility": [
                {
                    topic: "Non-modifying",
                    definition: "algorithms that do not change the content of the container, such as min_element, max_element, swap, find_first_of, search, search_n, equal, mismatch, lexicographical_compare, for_each, count, count_if, accumulate."
                },
                {
                    topic: "Modifying",
                    definition: "algorithms that change the content of the container, such as remove(), remove_if(), transform(), copy(), copy_if(), remove_copy(), remove_copy_if(), replace(), replace_if(), reverse(), unique(), generate_n(), sort()."
                }
            ]
        },

        "Singleton": {
            "Singleton Pattern": [
                {
                    topic: "Singleton Pattern",
                    definition: "a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance."
                }
            ],

            "Meyer's Singleton": [
                {
                    topic: "Meyer's Singleton",
                    definition: "a singleton implementation that uses a static local variable within a function to ensure that only one instance of the class is created, providing thread-safe initialization in C++11 and later."
                }
            ],

            "Classic Singleton": [
                {
                    topic: "Classic Singleton",
                    definition: "a singleton implementation that uses a private static pointer to the single instance and a public static method to access it, often requiring manual memory management."
                }
            ]
        },

        "Abstract vs. Concrete Classes": {
            "Abstract Class": [
                {
                    topic: "Abstract Class",
                    definition: "a class that provides a list of abstract functions to be used by pattern. Often uses pure virtual functions and provides interface for derived classes."
                }
            ],

            "Concrete Class": [
                {
                    topic: "Concrete Class",
                    definition: "a class that provides implementation for abstract functions. Can be instantiated and used to create objects."
                }
            ]
        },

        "Casting": {
            "Static_Cast": [
                {
                    topic: "Static_Cast",
                    definition: "a compile-time cast that performs conversions between related types, such as from a base class pointer to a derived class pointer or between numeric types."
                }
            ],

            "Dynamic_Cast": [
                {
                    topic: "Dynamic_Cast",
                    definition: "a runtime cast that will return nullptr and throw std::bad_cast if incorrect."
                }
            ],

            "Const_Cast": [
                {
                    topic: "Const_Cast",
                    definition: "a cast that adds or removes const-ness, only safe if const-ness."
                }
            ],

            "Reinterpret_Cast": [
                {
                    topic: "Reinterpret_Cast",
                    definition: "doesn't check type and is considered unsafe, it converts any pointer type to any other pointer type, even if the types are unrelated."
                }
            ]
        },

        "Bridge Design Pattern": {
            "Bridge Design Pattern": [
                {
                    topic: "Bridge Design Pattern",
                    definition: "structural design that decouples interface hierarchy from implementation hierarchy through delegation, allowing both to vary independently."
                }
            ],

            "Delegation": [
                {
                    topic: "Delegation",
                    definition: "an object (delegator) relies upon another delegatee object for functionality."
                }
            ],

            "Delegatee": [
                {
                    topic: "Delegatee",
                    definition: "the object that provides the actual implementation of delegator functionality."
                }
            ]
        },

        "Composite Design Pattern": {
            "Composite Design Pattern": [
                {
                    topic: "Composite Design Pattern",
                    definition: "a structural design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies, enabling clients to treat individual objects and compositions uniformly."
                }
            ],

            "Component": [
                {
                    topic: "Component",
                    definition: "abstract uniform interface class for both collections and primitive items. Often used with Visitor pattern and will provide traversal."
                }
            ],

            "Leaf": [
                {
                    topic: "Leaf",
                    definition: "concrete primative class."
                }
            ],

            "Composite": [
                {
                    topic: "Composite",
                    definition: "collection possibly consisting of leaves or other composites, implements interface and traversal to children/parents"
                }
            ]
        },

        "Command Design Pattern": {
            "Command Design Pattern": [
                {
                    topic: "Command Design Pattern",
                    definition: "a behavioral design pattern that encapsulates a request as an object, allowing for parameterization of clients with queues, requests, and operations."
                }
            ],

            "Command": [
                {
                    topic: "Command",
                    definition: "declares interface for executing the operation using execute()."
                }
            ],

            "Concrete Command": [
                {
                    topic: "Concrete Command",
                    definition: "implements execute() by invoking operations on receiver."
                }
            ],

            "Receiver": [
                {
                    topic: "Receiver",
                    definition: "knows how to perform the operations associated with the command."
                }
            ],

            "Invoker": [
                {
                    topic: "Invoker",
                    definition: "asks the command to carry out the request."
                }
            ],

            "Client": [
                {
                    topic: "Client",
                    definition: "creates a concrete command object and sets its receiver."
                }
            ]
        },

        "Mediator Design Pattern": {
            "God Object": [
                {
                    topic: "God Object",
                    definition: "an anti-pattern where a single class is overloaded with too many responsibilities, leading to high coupling and low cohesion."
                }
            ],

            "Mediator Design Pattern": [
                {
                    topic: "Mediator Design Pattern",
                    definition: "a behavioral design pattern that defines an object that encapsulates how a set of objects interact, promoting loose coupling by preventing objects from referring to each other explicitly."
                }
            ],

            "Abstract Mediator": [
                {
                    topic: "Abstract Mediator",
                    definition: "declares interface for communication between colleague objects."
                }
            ],

            "Concrete Mediator": [
                {
                    topic: "Concrete Mediator",
                    definition: "implements cooperative behavior by coordinating colleague objects."
                }
            ],

            "Colleague": [
                {
                    topic: "Colleague",
                    definition: "communicates with other colleague objects through the mediator."
                }
            ]
        },

        "Memento Design Pattern": {
            "Memento Design Pattern": [
                {
                    topic: "Memento Design Pattern",
                    definition: "a behavioral design pattern that captures and encapsulates object's state for later restoration, used for history, checkpoints/rollbacks, and undo mechanisms."
                }
            ],

            "Originator": [
                {
                    topic: "Originator",
                    definition: "creates memento containing a snapshot of its current internal state and uses memento to restore its internal state."
                }
            ],

            "Memento": [
                {
                    topic: "Memento",
                    definition: "stores internal state of the originator object and protects against access by objects other than the originator."
                }
            ],

            "Caretaker": [
                {
                    topic: "Caretaker",
                    definition: "is responsible for the memento's safekeeping and never operates on or examines the contents of a memento."
                }
            ]
        },

        "Chain of Responsibility Design Pattern": {
            "Chain of Responsibility Design Pattern": [
                {
                    topic: "Chain of Responsibility Design Pattern",
                    definition: "a behavioral design pattern that has handlers handle a request and pass it to the next if it lacks required responsibilities."
                }
            ]
        },

        "Prototype Design Pattern": {
            "Prototype Design Pattern": [
                {
                    topic: "Prototype Design Pattern",
                    definition: "a creational design pattern that allows cloning objects using clone(), reason is because copy constructors cannot be overloaded."
                }
            ]
        },

        "State Design Pattern": {
            "State Design Pattern": [
                {
                    topic: "State Design Pattern",
                    definition: "a behavioral design pattern that allows an object to alter its behavior when its internal state changes, appearing to change its class."
                }
            ],

            "Context": [
                {
                    topic: "Context",
                    definition: "class whose objects have states and passes operations to state class."
                }
            ],

            "State": [
                {
                    topic: "State",
                    definition: "abstract class representing state with the set of abstract operations on states."
                }
            ]
        },

        "Visitor Design Pattern": {
            "Visitor Design Pattern": [
                {
                    topic: "Visitor Design Pattern",
                    definition: "a behavioral design pattern that separates an algorithm from the object structure on which it operates, allowing new operations to be added without modifying the object structure."
                }
            ],

            "Element": [
                {
                    topic: "Element",
                    definition: "declares accept() that takes a visitor as an argument."
                }
            ],

            "Visitor": [
                {
                    topic: "Visitor",
                    definition: "defines visit() with corresponding parameter to particular concrete element."
                }
            ],

            "Concrete Visitor": [
                {
                    topic: "Concrete Visitor",
                    definition: "implements each visit() operation declared in visitor interface."
                }
            ],

            "Concrete Element": [
                {
                    topic: "Concrete Element",
                    definition: "implements accept() that takes a visitor as an argument."
                }
            ],

            "Double Dispatch": [
                {
                    topic: "Double Dispatch",
                    definition: "run-time selection that selects based on multiple objects and is used in Visitor Pattern."
                }
            ]
        },

        "Adapter Design Pattern": {
            "Adapter Design Pattern": [
                {
                    topic: "Adapter Design Pattern",
                    definition: "a structural design pattern that allows incompatible interfaces to work together by converting the interface of one class into another expected by clients."
                }
            ],

            "Adapter": [
                {
                    topic: "Adapter",
                    definition: "concrete class that inherits from interface."
                }
            ],

            "Adaptee": [
                {
                    topic: "Adaptee",
                    definition: "implementation class whose interface is adapted."
                }
            ],

            "Class Adapter": [
                {
                    topic: "Class Adapter",
                    definition: "uses multiple inheritance to adapt interface and implementation."
                }
            ],

            "Object Adapter": [
                {
                    topic: "Object Adapter",
                    definition: "uses delegation from adapter to an adaptee."
                }
            ]
        },

        "Decorator Design Pattern": {
            "Decorator Design Pattern": [
                {
                    topic: "Decorator Design Pattern",
                    definition: "a structural design pattern that allows behavior to be added to individual objects."
                }
            ],

            "Component": [
                {
                    topic: "Component",
                    definition: "declares interface for objects that can have responsibilities added to them."
                }
            ],

            "Concrete Component": [
                {
                    topic: "Concrete Component",
                    definition: "defines an object to which additional responsibilities can be attached."
                }
            ],

            "Decorator": [
                {
                    topic: "Decorator",
                    definition: "maintains a reference to a component object and defines an interface that conforms to component's interface."
                }
            ],

            "Concrete Decorator": [
                {
                    topic: "Concrete Decorator",
                    definition: "adds responsibilities to the component."
                }
            ]
        },

        "Observer Design Pattern": {
            "Observer Design Pattern": [
                {
                    topic: "Observer Design Pattern",
                    definition: "uses observers that depend on subject to be notified of state changes, also known as publish-describe."
                }
            ],

            "Subject": [
                {
                    topic: "Subject",
                    definition: "publishes changes by sending observers messages or notifying them of any changes to state."
                }
            ],

            "Observer": [
                {
                    topic: "Observer",
                    definition: "subscribe to change state notifications from subjects."
                }
            ],

            "Push Method": [
                {
                    topic: "Push Method",
                    definition: "subject sends detailed update information to observers."
                }
            ],

            "Pull Method": [
                {
                    topic: "Pull Method",
                    definition: "observer queries state of subject after notified of change."
                }
            ]
        },


        "Flyweight Design Pattern": {
            "Flyweight Design Pattern": [
                {
                    topic: "Flyweight Design Pattern",
                    definition: "a structural design pattern that minimizes memory usage by sharing as much data as possible with similar objects."
                }
            ],

            "Intrinsic State": [
                {
                    topic: "Intrinsic State",
                    definition: "state that is shared among flyweight objects and is independent of the flyweight's context."
                }
            ],

            "Extrinsic State": [
                {
                    topic: "Extrinsic State",
                    definition: "state that depends on the flyweight's context and cannot be shared."
                }
            ],

            "Abstract Flyweight": [
                {
                    topic: "Abstract Flyweight",
                    definition: "declares interface through which flyweights can receive and act on extrinsic state."
                }
            ],

            "Concrete Flyweight": [
                {
                    topic: "Concrete Flyweight",
                    definition: "implements the flyweight interface and stores intrinsic state."
                }
            ],

            "Flyweight Factory": [
                {
                    topic: "Flyweight Factory",
                    definition: "creates and manages flyweight objects, ensuring that flyweights are shared properly."
                }
            ],

            "Client": [
                {
                    topic: "Client",
                    definition: "stores extrinsic part of object."
                }
            ]
        }
    },

    "computer-communication-networks": {
        "TCP": {
            "TCP": [
                {
                    topic: "TCP",
                    definition: "also known as Transmission Control Protocol, it is a reliable and robust data delivery that utilizes the three-way handshake and has reliable error/delivery handling."
                }
            ]
        },

        "UDP": {
            "UDP": [
                {
                    topic: "UDP",
                    definition: "also known as User Datagram Protocol, it is a less reliable and connectionless protocol that is faster than TCP but doesn't have guarenteed error/delivery handling."
                }
            ]
        },

        "IP": {
            "IP": [
                {
                    topic: "IP",
                    definition: "also referred to as Internet Protocol, it is a set of rules for addressing and routing data on the Internet and is a key component in DNS."
                }
            ]
        },

        "Go-Back-In": {
            "Go-Back-In": [
                {
                    topic: "Go-Back-In",
                    definition: "often used in TCP, this will retransmit all subsequent packets after lost one that is simple but not as effecient."
                }
            ]
        },

        "Selective Repeat": {
            "Selective Repeat": [
                {
                    topic: "Selective Repeat",
                    definition: "often used in TCP, this will only retransmit the lost packet and its reciever window size is equal to sender window size, much more efficient but more complex."
                }
            ]
        },

        "Congestion vs. Flow Control": {
            "Congestion Control": [
                {
                    topic: "Congestion Control",
                    definition: "utilized Additive incress (increase rate by one max segment per RTT (round trip time) until something is lost, Multiplicative decrease is used once packet is lost and cuts rate down in half per loss event."
                }
            ],

            "Flow Control": [
                {
                    topic: "Flow Control",
                    definition: "primarily handles data sending by preventing the reciever from being overwhelmed by server, often works with congestion control."
                }
            ]
        }
    },

    "graphic-design": {
        "HTML/CSS Basics": {
            "HTML": [
                {
                    topic: "HTML",
                    definition: "also known as Hypertext Markup Language, this is often use to create websites and can even use CSS and Javascript to further enhance functionalility."
                }
            ],

            "Elements": [
                {
                    topic: "Elements",
                    definition: "often uses <tag></tag> to create headers or paragraphs for example. <img> and <br> do not need the closing tag."
                }
            ],

            "Attributes": [
                {
                    topic: "Attributes",
                    definition: "provides additional information about an element and is specified within opening tag. Ex: <a href=\"url\"."
                }
            ],

            "Nesting": [
                {
                    topic: "Nesting",
                    definition: "an element inside another element to create a hierarchy. Ex: <p> inside <main> tag."
                }
            ],

            "CSS": [
                {
                    topic: "CSS",
                    definition: "also called Cascading Style Sheets and is often used to customize HTMLs."
                }
            ],

            "External CSS": [
                {
                    topic: "External CSS",
                    definition: "can be used for multiple pages and is linked to an HTML document using <link> tag in <head> section."
                }
            ],

            "Internal CSS": [
                {
                    topic: "Internal CSS",
                    definition: "defined in a <style> tag in <head> section of HTML and only applies to that specific page."
                }
            ]
        },

        "Javascript Fundamentals": {
            "Javascript": [
                {
                    topic: "Javascript",
                    definition: "a programming language that provides interactivity to HTML pages. In HTML, the <script> tag allows for .js files to be linked to it."
                }
            ],

            "Objects": [
                {
                    topic: "Objects",
                    definition: "these store variables and functions and can be accessed using a dot or bracket."
                }
            ],

            "Events": [
                {
                    topic: "Events",
                    definition: "allows Javascript to react to user actions like button clicks or form input."
                }
            ]
        }
    }
};

let subject = localStorage.getItem("selectedSubject");
let selectedTopics = JSON.parse(localStorage.getItem("selectedTopics"));
let difficulty = localStorage.getItem("selectedDifficulty");

let allCards = [];
selectedTopics.forEach(topic => {
    let subtopics = flashcardsData[subject][topic];

    for (let sub in subtopics) {
        subtopics[sub].forEach(card => {
            allCards.push({
                mainTopic: topic,
                subtopic: sub,
                topic: card.topic,
                definition: card.definition
            });
        });
    }
});


//for medium difficulty there will a timer before user can flip card
let mediumTimer;
function startMediumTimer() {
    if (difficulty !== "medium") return;

    allowFlip = false; 
    const flipBtn = document.getElementById("flip-btn");
    flipBtn.disabled = true; // disable flip button for 10 sec
    if (mediumTimer) clearTimeout(mediumTimer);

    mediumTimer = setTimeout(() => {
        allowFlip = true;
        flipBtn.disabled = false;
    }, 10000);
}

//Creates flashcard
let currentIndex = 0;
function renderCard() {
    let card = allCards[currentIndex];

    let container = document.getElementById("flashcard-container");

    container.innerHTML = `
        <div class="flashcard" id="flashcard">
            <div class="card-side card-front">${card.topic}</div>
            <div class="card-side card-back">${card.definition}</div>
        </div>
    `;

    setupDifficulty();
    startMediumTimer();
}

//less strict answer checking so it doesn't need to be 100% accurate
function similarity(a, b) {
    a = a.toLowerCase().trim();
    b = b.toLowerCase().trim();

    let cleanA = a.replace(/[^\w\s]/gi, "").split(/\s+/);
    let cleanB = b.replace(/[^\w\s]/gi, "").split(/\s+/);

    if (cleanA.length === 0 || cleanB.length === 0) return false;

    // Count words in each string
    let matchCount = cleanA.filter(word => cleanB.includes(word)).length;
    let similarityPercent = matchCount / cleanA.length;

    // correct if it matches actual definition by 50%
    return similarityPercent >= 0.5;
}


//this will be for hard/medium
function setupDifficulty() {
    if (difficulty !== "hard") return;

    let overlay = document.getElementById("hard-overlay");
    let input = document.getElementById("hard-input");
    let btn = document.getElementById("check-hard-btn");
    let feedback = document.getElementById("hard-feedback");

    overlay.style.display = "flex"; 
    input.value = "";
    feedback.textContent = "";
    allowFlip = false;

    const overlayMessage = overlay.querySelector("p");
    overlayMessage.textContent = `Active Recall! Type in definition for: "${allCards[currentIndex].topic}"`;

    let attemptCount = 3; // track attempts and decriment until 0
    let blockedAttempts = false; //indicates user ran out of attempts

    btn.onclick = () => {
        if (blockedAttempts){
            allowFlip = true;
            overlay.style.display = "none";
            return;
        }

        let userText = input.value;
        let actualText = allCards[currentIndex].definition;

        if (similarity(userText, actualText)) {
            feedback.textContent = "Correct!";
            allowFlip = true;
            overlay.style.display = "none"; 
        } else {
            attemptCount--;
            if (attemptCount == 0) {
                feedback.textContent = " You ran out of attempts! Check definition and study this term! You may flip the card.";
                blockedAttempts = true; 
            }

            else {
                feedback.textContent = `That's not quite correct. Try again! (${attemptCount}/3)`;
            }
        }
    };
}

//hard/medium won't allow card to be flipped until answer is correct
let allowFlip = (difficulty !== "hard");

document.getElementById("flip-btn").addEventListener("click", () => {
    if (!allowFlip) return;

    let card = document.getElementById("flashcard");
    card.classList.toggle("flipped");
});

//display completion page when all cards are done
function showCompletionScreen() {
    let container = document.getElementById("flashcard-container");
    let buttons = document.getElementById("flashcard-buttons");

    if (buttons) buttons.style.display = "none";
    container.innerHTML = `
        <div class="completion-screen">
            <p>&#x1F389 Congratulations! You completed all ${allCards.length} flashcards!&#x1F389</p>
            <p>\nIf you wish to review cards again, click Retry Flashcards. Otherwise try a Practice Quiz!</p>
            <button id="retry-btn">Retry Flashcards</button>
            <button id="practice-btn">Try Practice!</button>
        </div>
    `;

    document.getElementById("retry-btn").addEventListener("click", () => {
        currentIndex = 0;
        allowFlip = (difficulty !== "hard");
        if (buttons) buttons.style.display = "flex";
        renderCard();
    });

    document.getElementById("practice-btn").addEventListener("click", () => {
        window.location.href = "../../PracticePage/practice.html"; // redirect to practice page
    });
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= allCards.length){
        showCompletionScreen();
        return;
    }

    allowFlip = (difficulty !== "hard");
    let check = document.getElementById("ready-checkbox");
    if (check) check.checked = false;

    renderCard();
});


document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + allCards.length) % allCards.length;
    allowFlip = (difficulty !== "hard");
    let check = document.getElementById("ready-checkbox");
    if (check) check.checked = false;

    renderCard();
});


renderCard();

