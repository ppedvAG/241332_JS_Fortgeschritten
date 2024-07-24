function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Bitte geben Sie eine Aufgabe ein.");
        return;
    }

    const pendingTasks = document.getElementById("pendingTasks");
    const li = document.createElement("li");
    li.textContent = taskText;

    // Zufälliges Ablaufdatum generieren (heute + 1 bis 7 Tage)
    const randomDays = Math.floor(Math.random() * 7) + 1;
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + randomDays);


    // dateSpan: Erstellt ein SPAN-Element und setzt dessen Klasse auf date. 
    // Der Textinhalt wird auf das formatierte Ablaufdatum gesetzt.
    // li.appendChild(dateSpan): Fügt das SPAN-Element zum Listenelement hinzu.
    const dateSpan = document.createElement("span");
    dateSpan.className = "date";
    dateSpan.textContent = dueDate.toLocaleDateString();

    li.appendChild(dateSpan);


//     Beim Klicken auf das Listenelement wird überprüft, ob es die Klasse completed hat.
//     Wenn nicht, wird die Klasse completed hinzugefügt, das Ablaufdatum wird auf "Erledigt" gesetzt,
//     und das Listenelement wird zur Liste der erledigten Aufgaben (completedTasks) verschoben.
//     Wenn es bereits die Klasse completed hat, wird diese entfernt, das Listenelement wird zurück 
//     zur Liste der anstehenden Aufgaben (pendingTasks) verschoben, und das ursprüngliche Ablaufdatum wird wieder angezeigt.
    li.onclick = function () {
        if (!li.classList.contains("completed")) {
            li.classList.add("completed");
            li.querySelector(".date").textContent = "Erledigt";
            const completedTasks = document.getElementById("completedTasks");
            completedTasks.appendChild(li);
        } else {
            li.classList.remove("completed");
            pendingTasks.appendChild(li);
            li.querySelector(".date").textContent = dueDate.toLocaleDateString();
        }
    };

    pendingTasks.appendChild(li);
    taskInput.value = "";
}
