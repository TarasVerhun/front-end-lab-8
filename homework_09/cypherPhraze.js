function cypherPhraze(cypherMap, phraze) {
    return getTransformedArray(phraze.split(''), function(el) {
        return cypherMap[el] || el;
    }).join('');
}