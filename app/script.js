// Work in progress...
var bible = [{ "id": "Gen", "verseCount": 1533, "chapters": [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26] }, { "id": "Exod", "verseCount": 1213, "chapters": [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38] }, { "id": "Lev", "verseCount": 859, "chapters": [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34] }, { "id": "Num", "verseCount": 1288, "chapters": [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13] }, { "id": "Deut", "verseCount": 959, "chapters": [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12] }, { "id": "Josh", "verseCount": 658, "chapters": [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33] }, { "id": "Judg", "verseCount": 618, "chapters": [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25] }, { "id": "Ruth", "verseCount": 85, "chapters": [22, 23, 18, 22] }, { "id": "1Sam", "verseCount": 810, "chapters": [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13] }, { "id": "2Sam", "verseCount": 695, "chapters": [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25] }, { "id": "1Kgs", "verseCount": 816, "chapters": [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53] }, { "id": "2Kgs", "verseCount": 719, "chapters": [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30] }, { "id": "1Chr", "verseCount": 942, "chapters": [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30] }, { "id": "2Chr", "verseCount": 822, "chapters": [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23] }, { "id": "Ezra", "verseCount": 280, "chapters": [11, 70, 13, 24, 17, 22, 28, 36, 15, 44] }, { "id": "Neh", "verseCount": 406, "chapters": [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31] }, { "id": "Esth", "verseCount": 167, "chapters": [22, 23, 15, 17, 14, 14, 10, 17, 32, 3] }, { "id": "Job", "verseCount": 1070, "chapters": [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17] }, { "id": "Ps", "verseCount": 2461, "chapters": [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6] }, { "id": "Prov", "verseCount": 915, "chapters": [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31] }, { "id": "Eccl", "verseCount": 222, "chapters": [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14] }, { "id": "Song", "verseCount": 117, "chapters": [17, 17, 11, 16, 16, 13, 13, 14] }, { "id": "Isa", "verseCount": 1292, "chapters": [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24] }, { "id": "Jer", "verseCount": 1364, "chapters": [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34] }, { "id": "Lam", "verseCount": 154, "chapters": [22, 22, 66, 22, 22] }, { "id": "Ezek", "verseCount": 1273, "chapters": [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35] }, { "id": "Dan", "verseCount": 357, "chapters": [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13] }, { "id": "Hos", "verseCount": 197, "chapters": [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9] }, { "id": "Joel", "verseCount": 73, "chapters": [20, 32, 21] }, { "id": "Amos", "verseCount": 146, "chapters": [15, 16, 15, 13, 27, 14, 17, 14, 15] }, { "id": "Obad", "verseCount": 21, "chapters": [21] }, { "id": "Jonah", "verseCount": 48, "chapters": [17, 10, 10, 11] }, { "id": "Mic", "verseCount": 105, "chapters": [16, 13, 12, 13, 15, 16, 20] }, { "id": "Nah", "verseCount": 47, "chapters": [15, 13, 19] }, { "id": "Hab", "verseCount": 56, "chapters": [17, 20, 19] }, { "id": "Zeph", "verseCount": 53, "chapters": [18, 15, 20] }, { "id": "Hag", "verseCount": 38, "chapters": [15, 23] }, { "id": "Zech", "verseCount": 211, "chapters": [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21] }, { "id": "Mal", "verseCount": 55, "chapters": [14, 17, 18, 6] }, { "id": "Matt", "verseCount": 1071, "chapters": [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20] }, { "id": "Mark", "verseCount": 678, "chapters": [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20] }, { "id": "Luke", "verseCount": 1151, "chapters": [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53] }, { "id": "John", "verseCount": 879, "chapters": [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25] }, { "id": "Acts", "verseCount": 1007, "chapters": [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31] }, { "id": "Rom", "verseCount": 433, "chapters": [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27] }, { "id": "1Cor", "verseCount": 437, "chapters": [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24] }, { "id": "2Cor", "verseCount": 257, "chapters": [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14] }, { "id": "Gal", "verseCount": 149, "chapters": [24, 21, 29, 31, 26, 18] }, { "id": "Eph", "verseCount": 155, "chapters": [23, 22, 21, 32, 33, 24] }, { "id": "Phil", "verseCount": 104, "chapters": [30, 30, 21, 23] }, { "id": "Col", "verseCount": 95, "chapters": [29, 23, 25, 18] }, { "id": "1Thess", "verseCount": 89, "chapters": [10, 20, 13, 18, 28] }, { "id": "2Thess", "verseCount": 47, "chapters": [12, 17, 18] }, { "id": "1Tim", "verseCount": 113, "chapters": [20, 15, 16, 16, 25, 21] }, { "id": "2Tim", "verseCount": 83, "chapters": [18, 26, 17, 22] }, { "id": "Titus", "verseCount": 46, "chapters": [16, 15, 15] }, { "id": "Phlm", "verseCount": 25, "chapters": [25] }, { "id": "Heb", "verseCount": 303, "chapters": [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25] }, { "id": "Jas", "verseCount": 108, "chapters": [27, 26, 18, 17, 20] }, { "id": "1Pet", "verseCount": 105, "chapters": [25, 25, 22, 19, 14] }, { "id": "2Pet", "verseCount": 61, "chapters": [21, 22, 18] }, { "id": "1John", "verseCount": 105, "chapters": [10, 29, 24, 21, 21] }, { "id": "2John", "verseCount": 13, "chapters": [13] }, { "id": "3John", "verseCount": 15, "chapters": [15] }, { "id": "Jude", "verseCount": 25, "chapters": [25] }, { "id": "Rev", "verseCount": 404, "chapters": [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21] }, { "comment": "3John has 14 verses in KJV but 15 verses in ESV" }]
// let jsonKJV = require('./bible/3John.json');
// apiLib by AmazinigMech2418 (Github) or AmazingMech2418 (Scratch)
var jsonKJV;
var chapterAndVerse = function(reference) {
var z = reference.split(" ");

    if (z.length>2) {
    var verse = z[z.length-1];
    } else {
    var verse = "1-";
    }
    z.pop;
        if (z.length>1) {
    var chapter = z[z.length-1];
    } else {
    var chapter = "1-";
    }
    z.pop;
    var book = z.join(" ");
var obj = new Object();
    obj.verse = verse;
    obj.chapter = chapter;
    obj.book = new Object();
    obj.book.name = book;
    return obj;
};
var apiLib = {
    get: function (site,callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open('GET', site, true);
        xhttp.send();
    }
};
apiLib.get("./bible/3John.json",function(data){jsonKJV=data;});
function getBook(bookGet) {
    var i = 0;
    while (bible[i].id != bookGet) {
        i++;
    }
    return i;
}
function getVerses(reference, version) {
    console.log(version);
    document.getElementById('result').style.display = 'hidden';
    // Renders NET
    if (version == 'net') {
        if (!navigator.onLine) {
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = '<strong>No Internet!</strong> Internet connection is required for some features, including the NET translation.';
        } else {
            document.getElementById('error').style.display = 'none';
        }
        url = 'http://labs.bible.org/api/?passage= ' + reference + '&formatting=full';
        fetch(url, {
            mode: 'cors'
        })
            .then(response => response.text())
            .then(result => {
                if (result != '') {
                    document.getElementById('scripture').innerHTML = result;
                    //document.getElementById('reference').innerHTML = reference;
                    document.getElementById('error').style.display = 'none';
                } else {
                    document.getElementById('error').style.display = 'block';
                    document.getElementById('error').innerHTML = 'Pardon, there was an error fetching the translation, please try again later';
                    setTimeout(function () { document.getElementById('error').style.display = "none" }, 5000);
                }
                document.getElementById('result').display = 'block';
                return result;
            });
    }
    // Renders KJV
    else {
        var a = chapterAndVerse(reference);
        var theChapter = a.chapter;
        var theBook = a.book.name.split(' ').join('');
        //jsonKJV = require('./bible/' + theBook + '.json');
        apiLib.get("./bible/"+theBook+".json",function(data){jsonKJV=data;});
        //jsonKJV = jsonKJV.chapters[0].verses[0]["1"];
        var length = "0";
        var toAdd = '';
        var i = 0;
        for (var i = 0; i < jsonKJV.chapters[Number(theChapter) - 1].verses.length; i++) {
            toAdd = toAdd + '<p class="verse">' + '<b class="vref">' + (i + 1) + '</b> ' + jsonKJV.chapters[Number(theChapter) - 1].verses[i][i + 1] + '</p>';
            
        }
        document.getElementById('scripture').innerHTML = toAdd;
        document.getElementById('error').style.display = 'none';
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.getElementById('result').style.display = 'block';
    document.title = chapterAndVerse(document.getElementById('book').value).book.name + ' ' + document.getElementById('chapter').value + ' - ' + 'Heb12 Bible App';
    localStorage.setItem("lastRef", chapterAndVerse(document.getElementById('book').value).book.name + ' ' + document.getElementById('chapter').value);
    console.log(localStorage.getItem('lastRef'));
    
}
var chapter, chapterE, books;

function updateText() {
    var translation = document.getElementById('translation').value;
    getVerses(books[getBook(chapterE)].innerHTML + ' ' + chapter.value, translation);

}

// Changes to the next and last chapters
function nextChapter() {
    books = document.getElementsByClassName('book');
    chapter = document.getElementById('chapter');
    chapterE = document.getElementById('book').value;
    
    if ((bible[getBook(chapterE)].chapters.length > 1) && (chapter.value != (bible[getBook(chapterE)].chapters.length))) {
        chapter.selectedIndex = Number(chapter.value);
        updateText();
    }
}
function lastChapter() {
    books = document.getElementsByClassName('book');
    chapter = document.getElementById('chapter');
    chapterE = document.getElementById('book').value;

    if ((bible[getBook(chapterE)].chapters.length > 1) && (Number(chapter.value) > 1)) {
        chapter.selectedIndex = Number(chapter.value) - 2;
        updateText();
    }
}

// Render the current book's chapters into the chapters dropdown
function loadChapters() {
    books = document.getElementsByClassName('book');
    chapter = document.getElementById('chapter');
    chapterE = document.getElementById('book').value;
    chapter.innerHTML = '';
    if (bible[getBook(chapterE)].chapters.length == 1) {
        chapter.innerHTML = chapter.innerHTML + '<option value=\"1-' + bible[getBook(chapterE)].chapters[0] + '\">' + '1-' + bible[getBook(chapterE)].chapters[0] + '</option>';
    } else {
        for (var x = 1; x < bible[getBook(chapterE)].chapters.length + 1; x++) {
            chapter.innerHTML = chapter.innerHTML + '<option value=\"' + (x) + '\">' + (x) + '</option>';
        }
    }
    updateTranslation();
}
function updateTranslation() {
    localStorage.setItem('translation', document.getElementById('translation').value);
}

// This lets you easily open a chapter
function setChapter(reference) {
    var a = chapterAndVerse(reference);
    var theChapter = a.chapter;
    var theBook = a.book.name.split(' ').join('');
    var val = a.book.name;
    var sel = document.getElementById('book');
    var opts = sel.options;
    for (var opt, j = 0; opt = opts[j]; j++) {
        if (opt.innerHTML == val) {
            sel.selectedIndex = j;
            break;
        }
    }
    loadChapters();
    sel = document.getElementById('chapter');
    sel.selectedIndex = a.chapter - 1;
    updateText();
}

// Increase and decrease text size
var script;
function fontSizePlus() {
    var fontSize = localStorage.getItem('fontSize');
    script = document.getElementById('scripture');
    console.log(String(Number(script.style.fontSize.split('px')[0]) + 1) + 'px');
    script.style.fontSize = String(Number(fontSize.split('px')[0]) + 1) + 'px';
    localStorage.setItem('fontSize', String(Number(fontSize.split('px')[0]) + 1) + 'px');
}
function fontSizeMinus() {
    var fontSize = localStorage.getItem('fontSize');
    script = document.getElementById('scripture');
    console.log(String(Number(script.style.fontSize.split('px')[0]) - 1) + 'px');
    script.style.fontSize = String(Number(fontSize.split('px')[0]) - 1) + 'px';
    localStorage.setItem('fontSize', String(Number(fontSize.split('px')[0]) - 1) + 'px');
}

function changeFont() {
    localStorage.setItem('font', document.getElementById('font').value);
    if (document.getElementById('font').value == 'default') {
        document.getElementById('scripture').style.fontFamily = 'Arial, Helvetica, sans-serif';
    } else {
        document.getElementById('scripture').style.fontFamily = document.getElementById('font').value;
    }
    
}
function changeTheme() {
    localStorage.setItem('theme', document.getElementById('theme').value);
    themeChoice = document.getElementById('theme').value;
    document.getElementById('themeStyle').href = './themes/' + themeChoice +'.css';
}
function changetextAlign() {
    localStorage.setItem('textAlign', document.getElementById('textAlign').value);
    document.getElementById('scripture').style.textAlign = document.getElementById('textAlign').value;
}
// This runs the first time the program is opened
function setup() {
    localStorage.setItem('fontSize', '17px');
    localStorage.setItem('lineSpacing', '25px');
    localStorage.setItem('firstTime', 'no');
    localStorage.setItem("lastRef", 'Hebrews 12');
    localStorage.setItem('font', 'default');
    localStorage.setItem('theme', 'theme1');
    localStorage.setItem('textAlign', 'left');
    console.log("Finished first-time setup of localStorage");
    
}
// Resets the program's localStorage
function reset() {
    localStorage.removeItem('fontSize');
    localStorage.setItem('lineSpacing', '25px');
    localStorage.removeItem('firstTime');
    localStorage.setItem("lastRef", 'Hebrews 12');
    return 'Sucessfully reset localStorage';
}



// Retrieves items from localStorage and sets up program


// Checks if this is the first time you opened the program
var firstTime = localStorage.getItem('firstTime');
console.log(firstTime + ' is the value of firstTime in localStorage.');

if (firstTime != 'no') {
    setup();
}


script = document.getElementById('scripture');

// Retrieve last font information and apply it to text
/*window.onload = function() {
    // Font size
    var fontSizers = localStorage.getItem('fontSize');
    script.style.fontSize = fontSizers;
    // Font align
    var textAligned = localStorage.getItem('textAlign');
    script.style.textAlign = textAligned;
}*/

console.log(localStorage.getItem('font') + ' is the font loaded from localStorage');

// Retrieve last font
var val = localStorage.getItem('font');
var sel = document.getElementById('font');
var opts = sel.options;
for (var opt, j = 0; opt = opts[j]; j++) {
    if (opt.value == val) {
        sel.selectedIndex = j;
        break;
    }
}
if (document.getElementById('font').value == 'default') {
    document.getElementById('scripture').style.fontFamily = 'Arial, Helvetica, sans-serif';
} else {
    document.getElementById('scripture').style.fontFamily = document.getElementById('font').value;
}
// Retrieve last textAlign
val = localStorage.getItem('textAlign');
sel = document.getElementById('textAlign');
opts = sel.options;
for (var opt, j = 0; opt = opts[j]; j++) {
    if (opt.value == val) {
        sel.selectedIndex = j;
        break;
    }
}
document.getElementById('scripture').style.textAlign = document.getElementById('textAlign').value;

// Retrieve last theme
val = localStorage.getItem('theme');
console.log(val + ' is the theme stored in localStorage.');

sel = document.getElementById('theme');
opts = sel.options;
for (var opt, j = 0; opt = opts[j]; j++) {
    if (opt.value == val) {
        sel.selectedIndex = j;
        break;
    }
}
var themeChoice = document.getElementById('theme').value;
document.getElementById('themeStyle').href = './themes/' + themeChoice + '.css';

// Retrieve last chapter viewed
setChapter(localStorage.getItem('lastRef'));

// Translation recovery does not work yet. This code does not affect the program negatively, but it is not operational
var translations = localStorage.getItem('translation');
sel = document.getElementById('translation');
console.log(translations + ' is the translation loaded from localStorage.');

if (translation == 'kjv') {
    sel.selectedIndex = 2;
}

