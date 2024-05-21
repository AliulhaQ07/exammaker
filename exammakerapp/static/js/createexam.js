// window.alert("js is linked");

// document.addEventListener("DOMContentLoaded", function () {
//     const mcqsContainer = document.getElementById('mcqscontainer');
//     const addMCQSButton = document.getElementById('addmcqs');
//     const mcqsForm = document.getElementById('mcqsform');
//
//
//     // Event listener for adding MCQS
//     addMCQSButton.addEventListener('click', function () {
//         const mcqsDiv = document.createElement('div');
//         mcqsDiv.classList.add('mcqs-field');
//
//         // Create input field for question
//         const questionInput = document.createElement('input');
//         questionInput.type = 'text';
//         questionInput.placeholder = 'Enter question';
//         questionInput.classList.add('form-control', 'mb-2');
//         mcqsDiv.appendChild(questionInput);
//
//         // Create input fields for options
//         for (let i = 1; i <= 4; i++) {
//             const optionInput = document.createElement('input');
//             optionInput.type = 'text';
//             optionInput.placeholder = `Option ${i}`;
//             optionInput.classList.add('form-control', 'mb-2');
//             mcqsDiv.appendChild(optionInput);
//         }
//
//         // Append MCQS div to container
//         mcqsContainer.appendChild(mcqsDiv);
//     });
//
//     // Event listener for form submission
//     mcqsForm.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent default form submission behavior
//
//
//         // Iterate through MCQS fields
//         const mcqsFields = document.querySelectorAll('.mcqs-field');
//         const mcqsData = [];
//
//         mcqsFields.forEach(mcqsDiv => {
//             const questionInput = mcqsDiv.querySelector('input[type="text"]');
//             const optionInputs = mcqsDiv.querySelectorAll('input[type="text"]');
//
//             const mcqs = {
//                 question: questionInput.value,
//                 options: []
//             };
//
//             // Populate options array for the MCQS question
//             optionInputs.forEach(optionInput => {
//                 if (optionInput.value.trim() !== '') { // Exclude empty options
//                     mcqs.options.push(optionInput.value);
//                 }
//             });
//
//             // Add MCQS object to data array if question and options are provided
//             if (mcqs.question.trim() !== '' && mcqs.options.length > 0) {
//                 mcqsData.push(mcqs);
//             }
//         });
//
//         // Check if at least one MCQS is added
//         if (mcqsData.length === 0) {
//             alert('Please add at least one MCQS.');
//             return; // Prevent further execution
//         }
//
//         // Log MCQS data (you can send it to server or save in database)
//         console.log(mcqsData);
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const mcqsContainer = document.getElementById('mcqscontainer');
//     const addMCQSButton = document.getElementById('addmcqs');
//     const mcqsForm = document.getElementById('mcqsform');
//
//     // Load MCQS data from local storage on page load
//     const savedMCQSData = JSON.parse(localStorage.getItem('mcqsData')) || [];
//
//     // Function to save MCQS data to local storage
//     const saveMCQSDataToLocalStorage = (data) => {
//         localStorage.setItem('mcqsData', JSON.stringify(data));
//     };
//
//     // Function to render MCQS from local storage
//     const renderMCQSFromLocalStorage = () => {
//         savedMCQSData.forEach(mcqs => {
//             const mcqsDiv = document.createElement('div');
//             mcqsDiv.classList.add('mcqs-field');
//
//             const questionInput = document.createElement('input');
//             questionInput.type = 'text';
//             questionInput.placeholder = 'Enter question';
//             questionInput.classList.add('form-control', 'mb-2');
//             questionInput.value = mcqs.question;
//             mcqsDiv.appendChild(questionInput);
//
//             mcqs.options.forEach((option, index) => {
//                 const optionInput = document.createElement('input');
//                 optionInput.type = 'text';
//                 optionInput.placeholder = `Option ${index + 1}`;
//                 optionInput.classList.add('form-control', 'mb-2');
//                 optionInput.value = option;
//                 mcqsDiv.appendChild(optionInput);
//             });
//
//             mcqsContainer.appendChild(mcqsDiv);
//         });
//     };
//
//     // Render MCQS from local storage on page load
//     renderMCQSFromLocalStorage();
//
//     // Event listener for adding MCQS
//     addMCQSButton.addEventListener('click', function () {
//         const mcqsDiv = document.createElement('div');
//         mcqsDiv.classList.add('mcqs-field');
//
//         const questionInput = document.createElement('input');
//         questionInput.type = 'text';
//         questionInput.placeholder = 'Enter question';
//         questionInput.classList.add('form-control', 'mb-2');
//         mcqsDiv.appendChild(questionInput);
//
//         for (let i = 1; i <= 4; i++) {
//             const optionInput = document.createElement('input');
//             optionInput.type = 'text';
//             optionInput.placeholder = `Option ${i}`;
//             optionInput.classList.add('form-control', 'mb-2');
//             mcqsDiv.appendChild(optionInput);
//         }
//
//         mcqsContainer.appendChild(mcqsDiv);
//     });
//
//     // Event listener for form submission
//     mcqsForm.addEventListener('submit', function (event) {
//         event.preventDefault();
//
//         const mcqsFields = document.querySelectorAll('.mcqs-field');
//         const mcqsData = [];
//
//         mcqsFields.forEach(mcqsDiv => {
//             const questionInput = mcqsDiv.querySelector('input[type="text"]');
//             const optionInputs = mcqsDiv.querySelectorAll('input[type="text"]');
//
//             const mcqs = {
//                 question: questionInput.value,
//                 options: []
//             };
//
//             optionInputs.forEach(optionInput => {
//                 if (optionInput.value.trim() !== '') {
//                     mcqs.options.push(optionInput.value);
//                 }
//             });
//
//             if (mcqs.question.trim() !== '' && mcqs.options.length > 0) {
//                 mcqsData.push(mcqs);
//             }
//         });
//
//         if (mcqsData.length === 0) {
//             alert('Please add at least one MCQS.');
//             return;
//         }
//
//         // Save MCQS data to local storage
//         saveMCQSDataToLocalStorage(mcqsData);
//
//         // Log MCQS data (you can send it to server or save in database)
//         console.log(mcqsData);
//     });
// });


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("addMcqsBtn").addEventListener('click', function () {
        addInputFields("");
    });

    document.getElementById('saveMcqsBtn').addEventListener('click', function () {
        saveInputFields();
    });

    // Load input fields from local storage when the page loads
    loadInputFields();

    // function to create input field ;
    function addInputFields(value) {
        let Q_input = document.createElement("input");
        Q_input.setAttribute("type", "text");
        Q_input.setAttribute('placeholder', 'Enter Your Question.!');

        Q_input.value = value;

        let container = document.getElementById("mcqsContainer");
        document.getElementById('mcqsContainer').style.marginBottom = "16px";
        container.appendChild(Q_input);
    }

    // function to save data locally;
    function saveInputFields() {
        let inputs = document.querySelectorAll("#mcqsContainer Q_input")
        let values = [];
        inputs.forEach(input => {
            values.push(input.value);
        });
        localStorage.setItem("mcqsContainer", JSON.stringify(values));
        alert("MCQ SAVED SUCCESSFULLY.!");
    }

//     load the input fields from local storage;

    function loadInputFields() {
        let savedValues = JSON.parse(localStorage.getItem("mcqsContainer"));
        if (savedValues) {
            savedValues.forEach(value => {
                addInputFields(value);
            });
        }
    }

    // window.onload = loadInputFields;
})

