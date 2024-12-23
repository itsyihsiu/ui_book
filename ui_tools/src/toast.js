const Toast = {
    icon: {
        error: '<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path fill="#ffffff" d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>',
        success: '<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path fill="#ffffff" d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    },
    color: {
        error: '#d74e45',
        success: '#4caf50'
    },
    root: null,
    init: function() {
        let div = document.createElement('div');
        div.style.cssText = 'overflow-y: auto; height: auto; width: 100%; max-width: 360px; position:fixed; top: 0; right: 0; z-index:9999; background-color:rgba(0,0,0,0); padding-top: 24px; right: 24px;';
        document.body.appendChild(div);
        this.root = div;
    },
    fire: function (title, message, duration, type) {
        let toast = document.createElement('div');
        toast.insertAdjacentHTML('beforeend', `
            <div>
                ${this.icon[type]}
            </div>
            <div style="flex-grow: 1;">
                <div style="font-size: 1.3rem; font-weight: bold; margin-bottom: 5px;">${title}</div>
                <div style="font-size: 1rem;">${message}</div>
            </div>
            <div class="close-btn" style="position: absolute; top:12px; right:12px; cursor: pointer; width:28px; height:28px; border-radius: 50%;">
                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28"><path fill="rgba(255,255,255,0.9)" d="m480-424 116 116q11 11 28 11t28-11q11-11 11-28t-11-28L536-480l116-116q11-11 11-28t-11-28q-11-11-28-11t-28 11L480-536 364-652q-11-11-28-11t-28 11q-11 11-11 28t11 28l116 116-116 116q-11 11-11 28t11 28q11 11 28 11t28-11l116-116Zm0 344q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </div>
        `);
        toast.style.cssText = `box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; border-radius: 5px; padding: 1rem; display:flex; align-items:center; gap: 1rem; position: relative; background-color: ${this.color[type]}; color: #fff; transition:transform .3s; margin-bottom: 12px;`;
        toast.querySelector('.close-btn').addEventListener('click', () => {
            this.root.removeChild(toast);
        });
        this.root.appendChild(toast);
        if (duration) {
            if (!isFinite(duration) || duration < 3000) {
                duration = 3000;
            }
            setTimeout(() => {
                try {
                    this.root.removeChild(toast);
                } catch (e) {
                }
            }, duration);
        }
    },
    success: function ({title, message, duration}) {
        this.fire(title, message, duration, 'success');
    },
    error: function ({title, message, duration}) {
        this.fire(title, message, duration, 'error');
    }
}

Toast.init();

export default Toast;

// Toast.success({
//     title: 'Success',
//     message: 'This is a success message',
//     duration: 5000
// });

// Toast.error({
//     title: 'Error',
//     message: 'This is an error message',
//     // duration: 5000
// });