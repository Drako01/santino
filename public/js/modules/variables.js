export const LS = {
    set: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
    get: (key, fallback = []) => JSON.parse(localStorage.getItem(key)) || fallback
}

export const LS_KEY = 'favorites';