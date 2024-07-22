// Array of interview questions
var interviewQuestions = [
    "Tell me about yourself and your background.",
    "What interests you about this position?",
    "Can you describe a challenging project you've worked on and how you overcame obstacles?",
    "How do you handle tight deadlines and pressure?",
    "What are your strengths and weaknesses?",
    "Give an example of a time when you demonstrated leadership or initiative.",
    "How do you approach problem-solving?",
    "What skills or qualities do you possess that make you a strong candidate for this role?",
    "Where do you see yourself in the next 5 years, both professionally and personally?",
    "What questions do you have for us about the company or this position?"
];

// Function to display interview questions
function displayInterviewQuestions() {
    // Display each question in a numbered list
    var message = "Before entering the exam environment, please take a moment to consider the following interview questions:\n\n";
    interviewQuestions.forEach(function(question, index) {
        message += (index + 1) + ". " + question + "\n\n";
    });

    // Display the questions in an alert box
    alert(message);
}

// Call the function when the page loads
window.onload = function() {
    displayInterviewQuestions();
};
