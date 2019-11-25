export default {
    getData: function (key) {
        return localStorage.getItem(key);
    },
    setData: function (key, value) {
        localStorage.setItem(key, value);
    }
};
