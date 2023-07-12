const toastBox = document.querySelector("#toastBox");
const buttons = document.querySelectorAll(".btn");

const items = {
    timer: 5000, 
    danger: {
        icon: "fa-skull",
        text: "Danger Toast"
    },
    success: {
        icon: "fa-heart",
        text: "Success Toast"
    },
    warning: {
        icon: "fa-circle-exclamation",
        text: "Warning Toast"
    },
    missing: {
        icon: "fa-circle-question",
        text: "Missing Toast"
    },
    info: {
        icon: "fa-file-lines",
        text: "Info Toast"
    },
    upload: {
        icon: "fa-mug-hot",
        text: "Upload Toast"
    }
};

function removeToast(toast) {
    toast.classList.add("hide");
    if(toast.remover) clearTimeout(toast.remover);
    setTimeout(() => toast.remove(), 500)
}

function createToast(id) {
    const {icon, text} = items[id];
    const toast = document.createElement('li');
    toast.classList.add("toast", "column", id);
    toast.innerHTML = `
    <div class="toastItems">
        <i class="fa-solid ${icon}"></i>
        <span>${text}</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
    `;

    toastBox.append(toast);
    toast.remover = setTimeout(_ => removeToast(toast), items.timer);
}

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        createToast(btn.id);
    })
})