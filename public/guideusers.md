# Package Tracking System
This is a JavaScript-based system that allows users to track, sort, and filter packages. The system also generates unique tracking codes for each package using bitwise operations. It ensures scalability for large amounts of package data and gracefully handles invalid inputs.

## Features

- **Package Data Entry**: Input package details including recipient name, package ID, delivery address, and weight. The system validates all fields to ensure correct input.
- **Sorting**: Packages are sorted based on weight, from lightest to heaviest.
- **Tracking**: Generates a unique tracking code for each package by combining the Package ID and weight using bitwise operations.
- **Error Handling**: Displays specific error messages for invalid input, ensuring only valid packages are processed.

## Prerequisites

To run this project locally, ensure you have the following:

- A modern web browser (e.g., Google Chrome, Firefox, Brave, Edge)
- Basic knowledge of JavaScript


## Installation

1. Clone this repository to your local machine:

   Open your terminal and make sure you are in a folder where you will see the entire project
    then put the following command (as an example):

   git clone https://github.com/yourusername/yourrepository.git

2. After that go to the project folder and open the index.html file in your web browser.

3. Enter Package Details:
- Recipient Name: Type the name (only letters).
- Package ID: Type the ID (only numbers).
- Delivery Address: Enter the address (only letters).
- Weight (kg): Enter the weight (positive numbers only).

4. See the Result
After entering the details, the package will be added, sorted by weight, and a unique tracking code will be generated.

5. Congrats! you now have a system that helps you track your orders.