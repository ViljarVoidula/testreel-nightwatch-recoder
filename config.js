'use strict';

module.exports = {
    win: {
        input: '',
        encode: 'dshow'
    },
    mac: {
        input: '1',
        encode: 'avfoundation'
    },
    linux: {
        input: '',
        encode: 'x11grab'
    }
};
