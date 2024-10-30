
function whitespace(text: string[], i: number) {
    let wscount = 0;
    let n = i;
    while (n < text.length && text[n] == "") {
        wscount++;
        n++;
    }
    return wscount;
} 

export const putCompare = (text1: string, text2: string):boolean[] => {
    const text1column = text1.split('\n');
    const text2column = text2.split('\n');

    let wrongList: Array<boolean>;
    wrongList = [];

    let text1ws = 0;
    let text2ws = 0;

    for (let i = 0; i+text1ws < text1column.length && i+text2ws < text2column.length; i++) {

        //text1ws += whitespace(text1column, i + text1ws);
        //text2ws += whitespace(text2column, i + text2ws);

        console.log(text1column[i + text1ws]);
        console.log(text2column[i + text2ws]);

        if (text1column[i + text1ws] == null || text2column[i + text2ws] == null) {
            console.log(false);
            wrongList.push(true);
        } else {
            console.log(text1column[i + text1ws] == text2column[i + text2ws]);
            wrongList.push(!(text1column[i + text1ws] == text2column[i + text2ws]))
        }
    }

    for (let i = wrongList.length; i + text1ws < text1column.length || i + text2ws < text2column.length; i++) {
        wrongList.push(true);
    }

    return wrongList
}