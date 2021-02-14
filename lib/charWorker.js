import * as tf from '@tensorflow/tfjs';

let char2idx = new Map([
    [" ", 0],
    [".", 1],
    ["a", 2],
    ["b", 3],
    ["c", 4],
    ["d", 5],
    ["e", 6],
    ["f", 7],
    ["g", 8],
    ["h", 9],
    ["i", 10],
    ["j", 11],
    ["k", 12],
    ["l", 13],
    ["m", 14],
    ["n", 15],
    ["o", 16],
    ["p", 17],
    ["q", 18],
    ["r", 19],
    ["s", 20],
    ["t", 21],
    ["u", 22],
    ["v", 23],
    ["w", 24],
    ["x", 25],
    ["y", 26],
    ["z", 27]
])

let idx2char = new Map(Array.from(char2idx, a => a.reverse()))

function str2Idx(str) {
    let result = []
    for (var i = 0; i < str.length; i++) {
        var ch = str.toLowerCase().charAt(i)
        var idx = char2idx.get(ch)
        result.push(idx)
    }
    return tf.tensor1d(result)
}

async function generateCover(txt) {
    // Load the model from the configuration file
    const model = await tf.loadLayersModel("/models/char_model/model.json")

    // Get the starting text from the user input
    txt = "I am writing to apply for the role of " + txt;
    // Convert into numeric ids
    var seed = str2Idx(txt)
    seed = seed.expandDims(0)

    // Store the generated text in a list
    var temperature = 1.

    // Reset the internal state of the model
    model.resetStates()

    var count = 0;
    var word = [];
    for (var i = 0; i < 1500; i++) {
        // Predict the next character, returns probablity for each possible output
        var prediction = model.predict(seed)
        prediction = prediction.squeeze(0)
        prediction = prediction.div(temperature)

        // Choose next char randomly based on probability
        var predicted_id = tf.multinomial(prediction, 1)
        predicted_id = predicted_id.arraySync()
        predicted_id = predicted_id[predicted_id.length - 1][0]

        // Set the seed as the predicted char
        seed = tf.tensor([predicted_id])
        seed = seed.expandDims(0)

        // Append to the generated text
        if (idx2char.get(predicted_id) == " ") {
            var txt = " " + word.join("");
            postMessage(txt);
            word = [];
        }
        else {
            word.push(idx2char.get(predicted_id));
        }
    }
    postMessage("Yours Faithfully,");
    close();
}

onmessage = function (e) {
    generateCover(e.data);
};

