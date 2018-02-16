function decypherPhraze(cypherMap, phraze) {
    let decypherMap = {};
    for (key in cypherMap) {
        decypherMap[cypherMap[key]] = key;
    }
    return cypherPhraze(decypherMap, phraze);
}