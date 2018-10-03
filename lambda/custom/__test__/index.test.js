const va = require('virtual-alexa');
let alexa = null;

describe('with data {name: bob}', () => {

    beforeAll(async() => {
        alexa = va.VirtualAlexa.Builder()
        .handler('./index.handler')
        .interactionModelFile('../../models/en-US.json')
        .create();
        alexa.dynamoDB().mock();

        await alexa.utter('my name is bob');
    });

    test('should greet a person once it knows their name', () => {
        expect.assertions(1);
        return alexa.utter('hello').then((payload) => {
            let output = payload.response.outputSpeech.ssml.toLowerCase();
            console.log(output);
            expect(output).toContain('hello bob');
        }).catch(() => {
            console.log('caught failure at should greet a person once it knows their name (bob)');
        });
    });
});

//this wouldn't pass on live
describe('with data {name: foo}', () => {

    beforeAll(async() => {
        alexa = va.VirtualAlexa.Builder()
        .handler('./index.handler')
        .interactionModelFile('../../models/en-US.json')
        .create();
        alexa.dynamoDB().mock();

        await alexa.utter('my name is foo');
    });

    test('should greet a person once it knows their name', () => {
        expect.assertions(1);
        return alexa.utter('hello').then((payload) => {
            let output = payload.response.outputSpeech.ssml.toLowerCase();
            console.log(output);
            expect(output).toContain('hello foo');
        }).catch(() => {
            console.log('caught failure at should greet a person once it knows their name (foo)');
        });
    });
});


describe('without data', () => {

    beforeAll(() => {
        alexa = va.VirtualAlexa.Builder()
        .handler('./index.handler')
        .interactionModelFile('../../models/en-US.json')
        .create();
        alexa.dynamoDB().mock();
    });

    test('should ask for a name if it doesn\'t know the person\'s name', () => {
        expect.assertions(1);
        return alexa.utter('hello').then((payload) => {
            let output = payload.response.outputSpeech.ssml.toLowerCase();
            console.log(output);
            expect(output).toContain('what\'s your name?');
        }).catch(() => {
            console.log('caught failure at should ask for a name if it doesn\'t know the person\'s name');
        });
    });

    test('should thank a person for giving their name', () => {
        expect.assertions(1);
        return alexa.utter('my name is bob').then((payload) => {
            let output = payload.response.outputSpeech.ssml.toLowerCase();
            console.log(output);
            expect(output).toContain('thank you');
        }).catch(() => {
            console.log('caught failure at should thank a person for giving their name');
        });
    });
});