/**
 * Created by dannyd1221 on 2/18/2017.
 */
var wordFrequency = [];
function parseText(text)
{
    //all lowercase, remove punctuation and any extra spaces
    text = text.toLowerCase();
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    text = text.replace(/\s{2,}/g," ");

    var words = text.split(" ");
    for(var i = 0; i < words.length; i++)
    {
        word = words[i];
        var index = indexOf(wordFrequency, word);
        if(index == -1)
        {
            wordFrequency.push({"text": word, "size": 10});
        }
        else
        {
            wordFrequency[index].size += 10;
        }
    }

    wordFrequency.sort(function(word1, word2){
        return word2.size - word1.size;
    })
    return wordFrequency;
}

function indexOf(wordFreq, query)
{
    for (var i = 0;i < wordFreq.length; i++)
    {
        var value = wordFreq[i].text;

        if (value === query)
        {
            return i;
        }

    }
    return -1;
}