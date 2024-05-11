<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Processed Text</title>
</head>
<body>
    <h2>Processed Text</h2>
    <?php
    // Check if form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve input text from form
        $user_input = $_POST["user_input"];
        
        // Display the input text
        echo "<p>You entered: $user_input</p>";
    } else {
        // If form is not submitted, display an error message
        echo "<p>Error: Form not submitted.</p>";
    }
    ?>
</body>
</html>
