var filterList = ["the", "with", "at", "from", "into", "until", "against", "of", "to", "i", "a", "an", "this", "in", "for", "on", "by", "like", "through", "before", "but", "off", "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've"];
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
        if(filterList.includes(word))
            continue;
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

    wordFrequency[0].size = 170;
    for(var i = 1; i < wordFrequency.length; i++){
        var size = wordFrequency[i].size;
        //place holder, will need a better algorithm
        wordFrequency[i].size = size*3;
    }
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