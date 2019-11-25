import Vue from 'vue';

Vue.filter('getNameFromPath', (value) => {
    try {
        if (value) {
            value = value.substring(value.lastIndexOf('/') + 1, value.length);
            return value;
        }
    } catch (e) {
        return 'Error';
    }
});
