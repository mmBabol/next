const { readySeed, readyDownload } = require('./lib/torrent.js');

describe('Create files', () => {
    test('Files created', () => {
        expect(readySeed).toBeTruthy();
    });

    test('Check torrented files', () => {
        expect(readyDownload).toBeTruthy();
    });
});
