// Retrieves rules button
const rulesButton = document.querySelector(".rules-button");

// Defines rules when rules button is click
const displayRules = function() {
    const modalContainer = document.createElement("DIV");
    modalContainer.className = "modal-container";
    document.body.appendChild(modalContainer);

    // Create a modal for display rules
    const modal = document.createElement("DIV");
    modal.className="modal-rules";
    modalContainer.appendChild(modal);

    // Add title
    const modalTitle = document.createElement("H2");
    modalTitle.className = "modal-rules__title";
    modalTitle.innerHTML = "rules";
    modal.appendChild(modalTitle);

    // Add rules 
    const modalRules = document.createElement("DIV");
    modalRules.className = "modal-rules__image";
    modal.appendChild(modalRules);

    // Add close sign
    const modalClose = document.createElement("A");
    modalClose.className = "modal-rules__close";
    modal.appendChild(modalClose);

    // Closing modal window
    const closeModal = function() {
        modal.style.animation = "fade-out 0.6s ease-out both";
        document.body.removeChild(modalContainer);
    }
    
    modalClose.addEventListener("click", closeModal);
    modalContainer.addEventListener("click", closeModal);
}

// Add an event on rules button when is click
rulesButton.addEventListener("click", displayRules);