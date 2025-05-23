// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

document.addEventListener("DOMContentLoaded", () => {
  const simulateButton = document.getElementById("simulate-click");
  const form = document.getElementById("user-form");

  if (simulateButton) {
    simulateButton.addEventListener("click", () => {
      simulateClick("dynamic-content", "Button Clicked!!");
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      handleFormSubmit("user-form", "dynamic-content");
    });
  }
});

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

function addElementToDOM(containerId, content) {
  const container = document.getElementById(containerId);
  if (container) {
    const p = createElement("p", { textContent: content });
    container.appendChild(p);
  }
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

function simulateClick(containerId, content) {
  addElementToDOM(containerId, content);
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const input = form?.querySelector('input[type="text"]');
  const errorMessage = document.getElementById("error-message");

  if (!input || !input.value.trim()) {
    showError(errorMessage, "Input cannot be empty");
    return;
  }

  clearError(errorMessage);
  addElementToDOM(outputId, input.value);
  input.value = "";
}

function showError(element, message) {
  if (element) {
    element.textContent = message;
    element.classList.remove("hidden");
  }
}

function clearError(element) {
  if (element) {
    element.textContent = "";
    element.classList.add("hidden");
  }
}

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function createElement(tag, attributes = {}) {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    if (key in element) {
      element[key] = value;
    } else {
      element.setAttribute(key, value);
    }
  });
  return element;
}

// Export Functions for Jest
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
