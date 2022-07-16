// Given a phrase, I want to highlight keywords.
//
// Basically this amounts to splitting the string into parts (tokenizing?) that do not match the keywords and parts
// that do match the keywords. I think I can do the base case pretty easily, but I think I might stumble with algorithmic
// complexity when there are multiple words to match.
//
// Let's adapt the code in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//
// UPDATE: well maybe 'split' will work well enough for complexity.. not sure.

const phrase = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

console.log(`Let's highlight following phrase for various keywords:`);
console.log('\t', phrase, '\n');

{
    const keyword = "dog";
    const indexOfFirst = phrase.indexOf(keyword);
    console.log(`The index of the first "${keyword}" from the beginning is ${indexOfFirst}.`);

    const indexOfSecond = phrase.indexOf(keyword, (indexOfFirst + 1));
    console.log(`The index of the 2nd "${keyword}" is ${indexOfSecond}.`);

    console.log();
}

/**
 * Given a phrase, highlight a keyword.
 *
 * @param {string} phrase - a given phrase
 * @param {string} keyword - a keyword to highlight
 * @return {string} the same phrase but with the keywords highlighted using asterisks.
 */
function highlight(phrase, keyword) {
    const splits = phrase.split(keyword);
    return splits.join("*" + keyword + "*");
}

/**
 * Given a phrase, highlight all keywords.
 *
 * @param {string} phrase - a given phrase
 * @param {Array<string>} keywords - keywords to highlight
 * @return {string} the same phrase but with the keywords highlighted using asterisks.
 */
function highlightMultiple(phrase, keywords) {
    // "Defensive copy" the array. The original array can't be shared across different function executions because
    // each execution will 'pop()' the array. We don't want to side-effect an object shared across contexts.
    const keywordsSafe = keywords.slice();
    const keyword = keywordsSafe.pop();
    let sections = phrase.split(keyword);

    if (keywordsSafe.length > 0) {
        sections = sections.map(s => highlightMultiple(s, keywordsSafe));
    } else {
        // This is the "bottom out" point for the recursive algorithm. There is no more highlighting work to do because
        // we've processed all the keywords for highlighting.
    }

    if (sections.length === 1) {
        // There was no match for the keyword. Return the original phrase.
        return phrase;
    } else {
        return sections.join("*" + keyword + "*");
    }
}


{
    const phraseHighlighted = highlight(phrase, "dog");
    console.log("Here is the phrase highlighted for 'dog':");
    console.log('\t', phraseHighlighted, '\n');
}

{
    const phraseHighlighted = highlightMultiple(phrase, ["dog", "lazy"]);
    console.log("Here is the phrase highlighted for 'dog' and 'lazy':");
    console.log('\t', phraseHighlighted, '\n');
}
