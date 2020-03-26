﻿  

        const jq = document.createElement('script');
        jq.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js";
        document.head.appendChild(jq);
        jq.addEventListener('load', () => {
            console.log("hello world");
            console.log($ === jQuery);
        });

        //code to move top of the page, when user scrolls down

        //Get the button
        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            // document.body.scrollTop = 0;
            //  document.documentElement.scrollTop = 0;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // jQuery like selection of elements.
        "use strict";

        window.$ = document.querySelectorAll.bind(document);

        // Changes for  Firefox
        if (navigator.userAgent.match(/firefox/i)) {
            // Unicode font sizes
            var ffBtn = "font-weight: normal; font-size: 2em; margin-left: 0.3em;";
            $("#restart-symbol")[0].setAttribute("style", ffBtn);

            var ffwait = "line-height: 1em; font-size: 4em;";
            $(".waiting")[0].setAttribute("style", ffwait);
        }

        /////////////////////////////////////////

        // Sorted list of the 500 most common English words.
        var wordList = ["ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ", "ੋ", "ੇ", "੍", "ਿ", "ੁ", "ਪ", "ਰ", "ਕ", "ਤ", "ਚ", "ਟ", "ੋ", "ੇ", "ੁ", "ਰ", "੍", "ਕ", "ਿ", "ਟ", "ਚ"];

        //////////////////////////////////////////

        // Knuth-Fisher-Yates Shuffle
        // http://bost.ocks.org/mike/shuffle/
        function shuffle(array) {
            var m = array.length,
                t = undefined,
                i = undefined;
            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        }

        // Add words to word-section

        function addWords() {
            // clear existing word-section
            var wordSection = $("#word-section")[0];
            wordSection.innerHTML = "";

            for (var i = 300; i > 0; i--) {
                var words = shuffle(wordList);
                var wordSpan = "<span>" + words[i] + "</span>";
                wordSection.innerHTML += wordSpan;
            }
            // mark first word as current-word
            wordSection.firstChild.classList.add("current-word");
         }

        //////////////////////////////////////////

        // Word Colors
        var colorCurrentWord = " #dddddd";
        var colorCorrectWord = "#93C572";
        var colorIncorrectWord = "#e50000";

        // Word Count and other data.
        var wordData = {
            //seconds: 300,
            correct: 0,
            incorrect: 0,
            total: 0,
            typed: 0
        };

        //////////////////////////////////////////
        // Initial implementation notes:
        // next word on <space>, if empty, then set value=""
        // after <space> if value == current-word, mark as correct-word
        // else, mark as incorrect-word
        // if value.length != current-word[:value.length], mark as incorrect-word
        // else, mark as current-word
        //////////////////////////////////////////

        function checkWord(word) {
            var wlen = word.value.length;
            // how much we have of the current word.
            var current = $(".current-word")[0];
            var currentSubstring = current.innerHTML.substring(0, wlen);
            // check if we have any typing errors
            if (word.value.trim() != currentSubstring) {
                current.classList.add("incorrect-word-bg");
                return false;
            } else {
                current.classList.remove("incorrect-word-bg");
                return true;
            }
        }

        /*Timer code*/

        var clock = null;//Define a global variable for the clock
        var isRunning = false;
        var initTime = null;
        var Typeminutes; //declared to get the no of minutes spent by the user while typing
        var finaltypeminutes;
        var roundminutes;
        var grossspeed;

        function typingTest(e) {
            // Char:        Key Code:
            // <space>      32
            // <backspace>  8
            // <shift>      16
            // [A-Z]        65-90
            // [' "]        222

            //start timer
            // markPresent();

            // Get key code of current key pressed.
            e = e || window.event;
            var kcode = e.keyCode;
            var word = $("#typebox")[0];

            //  check if empty (starts with space)
            if (isRunning == false) {
                word.value = "";
                //alert("Clock not running!")
                if (document.getElementById("clock").hasAttributes('disabled')) {
                    document.getElementById("errorMessage").innerText = "Please Click on Start!";
                }
                else {
                    document.getElementById("errorMessage").innerText = "Please Click on Re-Start!";
                }
            }
            else
            {
                if (word.value.match(/^\s/g)) {
                    word.value = "";
                }
                else
                {
                    checkWord(word); // checks for typing errors while you type
                    // <space> submits words
                    if (kcode == 32)
                    {
                        //console.log("Last Element is: " + lastelement);
                        submitWord(word); // keep track of correct / incorrect words
                        clearLine(); // get rid of old words
                        $("#typebox")[0].value = ""; // clear typebox after each word
                    }
                    wordData.typed += 1; // count each valid character typed
                }
            }

        }

        function Clock(clck) {

            //disable span error
            document.getElementById("errorMessage").innerText = "";

            //set autofocus to typing textbox
            document.getElementById("typebox").focus();

            //console.log("Called clock");
            if (clock != null)
            {
                
                if (Typeminutes <= 0.5 || wordData.total == 0) {
                    alert("Please Check! Either time is less than one minute or you haven't completed the exercise");
                }
                else
                {
                    //Clock is running
                    //console.log("Stopping clock");
                    clearInterval(clock);
                    clock = null;
                    document.getElementById("clock").innerText = "Start";
                    document.getElementById("test").innerText = "";
                    isRunning = false;
                    addWords(); //to reset word color to black once the user stops the clock
                    //console.log(wordData.correct);
                    //console.log(wordData.incorrect);
                    //console.log(wordData.total);
                    showDiv();//show graphs after user stops typing and disable button
                    document.getElementById(clck.id).disabled = true;
                }
            }
            else
            {
                //Clock is not running
                //console.log("Starting clock");
                setInitialTime();
                clock = setInterval(updateClock, 1000); // Starts calling updateClock, which should do what your need with the clock.
                document.getElementById("clock").innerText = "Stop"; //Changes the clock button text
                updateClock();
                isRunning = true;
                // document.getElementById("clock").innerText = "Disable me";
            }
        }

        function setInitialTime() {
            initTime = new Date().getTime();
        }

        function updateClock() {
            //console.log("Clock update");
            let currTime = new Date().getTime(),
            diff = currTime - initTime;
            //console.log("Actual time is " + currTime);
            //console.log("Time inited was " + initTime);
            document.getElementById("test").innerText = format(diff / 1000);

            //getting minute from the momement when clock is stopped
            var hms = format(diff / 1000);   // your input string
            var a = hms.split(':'); // split it at the colons
            console.log("hms: " + hms);
            console.log("a: " + a);
            var hrstoseconds = parseInt(a[0]);
            var mintoseconds = parseInt(a[1]);
            var orgseconds = parseInt(a[2]);
            console.log(hrstoseconds);
            console.log(mintoseconds);
            console.log(orgseconds);
            // Hours are worth 60 minutes.
            // Typeminutes = (+a[0]) * 60 + (+a[1]);

            //added by me to get seconds
            var typeseconds = hrstoseconds * 60 * 60 + mintoseconds * 60 + orgseconds;
            console.log(typeseconds);
            finaltypeminutes = typeseconds / 60;
            roundminutes = finaltypeminutes.toFixed(2);
            console.log(finaltypeminutes);
            console.log(roundminutes);
        }

        function format(seconds) {
            var numhours = parseInt(Math.floor(((seconds % 31536000) % 86400) / 3600), 10);
            var numminutes = parseInt(Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 10);
            var numseconds = parseInt((((seconds % 31536000) % 86400) % 3600) % 60, 10);
            return ((numhours < 10) ? "0" + numhours : numhours) + ":" + ((numminutes < 10) ? "0" + numminutes : numminutes) + ":" + ((numseconds < 10) ? "0" + numseconds : numseconds);
        }

        function submitWord(word) {
            // update current-word and
            // keep track of correct & incorrect words
            var current = $(".current-word")[0];

            if ($(current).is('span'))
            {
                if (!$(current).is(':last-child')) {
                    console.log(" exists");
                    if (checkWord(word)) {
                        current.classList.remove("current-word");
                        current.classList.add("correct-word-c");
                        wordData.correct += 1;
                    } else {
                        current.classList.remove("current-word", "incorrect-word-bg");
                        current.classList.add("incorrect-word-c");
                        wordData.incorrect += 1;
                    }
                    // update wordData
                    wordData.total = wordData.correct + wordData.incorrect;
                    current.nextSibling.classList.add("current-word");
                }
                else {
                    console.log(" last child");
                    if (checkWord(word)) {
                        current.classList.remove("current-word");
                        current.classList.add("correct-word-c");
                        wordData.correct += 1;
                    } else {
                        current.classList.remove("current-word", "incorrect-word-bg");
                        current.classList.add("incorrect-word-c");
                        wordData.incorrect += 1;
                    }
                    // update wordData
                    wordData.total = wordData.correct + wordData.incorrect;
                    //console.log(wordData.correct);
                    //console.log(wordData.incorrect);
                    //console.log(wordData.total);
                    $("#typebox")[0].value = "";
                    clearInterval(clock);
                    clock = null;
                    document.getElementById("clock").innerText = "Start";
                    document.getElementById("test").innerText = "";
                    isRunning = false;
                    addWords(); //to reset word color to black once the user stops the clock
                    //console.log(wordData.correct);
                    //console.log(wordData.incorrect);
                    //console.log(wordData.total);
                    showDiv();//show graphs after user stops typing and disable button
                    clearvariables();
                    // redraw();
                    document.getElementById('clock').disabled = true;
                    document.getElementById("errorMessage").innerText = "Please Click on Re-Start!";
                }

            }
        }

        function clearLine() {
            // remove past words once you get to the next line
            var wordSection = $("#word-section")[0];
            var current = $(".current-word")[0]; // second line (first word)
            var previous = current.previousSibling; // first line (last word)
            var children = $(".correct-word-c, .incorrect-word-c").length;

            // <span>'s on the next line have a greater offsetTop value
            // than those on the top line.
            // Remove words until the first word on the second line
            // is the fistChild of word-section.
            if (current.offsetTop > previous.offsetTop) {
                for (var i = 0; i < children; i++) {
                    console.log(current.offsetHeight);
                    wordSection.removeChild(wordSection.firstChild);
                }
            }
        }

        function showDiv() {
            window.scrollTo({ top: 995, behavior: 'smooth' });
            rendertypingresults();
            renderaccuracy();
            rendergrossspeed();
            rendernetspeed();
            document.getElementById('chartrow').style.visibility = 'visible';
            document.getElementById('chartrow').style.display = 'block';
            clearvariables();
            console.log("Before" + wordData.total + ":" + wordData.correct + ":" + wordData.incorrect);
             document.getElementById('restarttype').removeAttribute('disabled');
        }

        //Graph Generating code

        function rendertypingresults() {
            Chart.defaults.global.defaultFontColor = 'blue';
            $('#mcyhartdiv').append('<canvas id="myChart"><canvas>');
            var ctx = document.getElementById('myChart').getContext('2d');
            var chartresult = new Chart(ctx,
                {
                    // The type of chart we want to create
                    type: 'bar',
                    animationEnabled: true,
                    // The data for our dataset
                    data: {
                        labels: ['Total Characters', 'Correct Characters', 'Incorrect Characters'],
                        datasets: [{
                            label: 'Results',
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: [wordData.total, wordData.correct, wordData.incorrect],
                            //  data: [3, 5, 6],
                            backgroundColor: ["purple", "green", "red"]
                        }]
                    },
                    // Configuration options go here
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                // Change here
                                barPercentage: 0.2
                            }]
                        }
                    }
                });
        }

        //To calculate this mathematically, take the number of correct characters typed divided by the total number, multiplied by 100%
        
        function renderaccuracy() {

            //to create chart for accuracy
            var accuracyresult = (wordData.correct / wordData.total) * 100;
            accuracyresult = accuracyresult.toFixed(2);
            Chart.defaults.global.defaultFontColor = 'blue';
            $('#accuracydiv').append('<canvas id="accuracyChart"><canvas>');
            var ctx = document.getElementById('accuracyChart').getContext('2d');
            accuracychart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'bar',
                // The data for our dataset
                data: {
                    labels: ['Accuracy(%)'],
                    datasets: [{
                        label: 'Accuracy(%)',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [accuracyresult],
                        // backgroundColor: ["DarkGoldenRod"]
                    }]
                },
                // Configuration options go here
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            // Change here
                            barPercentage: 0.2
                        }]
                    }
                }
            });

        }

        /*Formula to count gross speed:----> gross speed = (All typed entries/5)/Time(min) */

        function rendergrossspeed() {
            //to create chart for Gross Speed
            //console.log(numseconds);
            //minutestyped = numseconds / 60;
            console.log("Round Minutes before graph: " + roundminutes);
            grossspeed = (wordData.total / roundminutes); //characters per minute without sace
            grossspeed = grossspeed.toFixed(2);
            console.log('Grossspeed=' + grossspeed);
            Chart.defaults.global.defaultFontColor = 'blue';
            $('#grossdiv').append('<canvas id="grossspeedchart"><canvas>');
            var ctx2 = document.getElementById('grossspeedchart').getContext('2d');
            grossspeedchart = new Chart(ctx2, {
                // The type of chart we want to create
                type: 'bar',

                // The data for our dataset
                data: {
                    labels: ['Gross Speed(CPM)'],
                    datasets: [{
                        label: 'Gross Speed(CPM)',
                        backgroundColor: 'rgb(139,69,19)',
                        borderColor: 'rgb(139,69,19)',
                        data: [grossspeed],
                        // backgroundColor: ["MidnightBlue "]
                    }]
                },
                // Configuration options go here
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            // Change here
                            barPercentage: 0.2
                        }]
                    }
                }
            });
        }

        /*Formula to count Net speed:----> Gross speed - (Incorrect characters)/Time(min) */

        function rendernetspeed() {
            //to create chart for Net speed
            //  console.log('Grossspeed in net spteed' + grossspeed);

            var incorrecttypespeed = (wordData.incorrect / roundminutes).toFixed(2);
            var netspeed = (grossspeed - incorrecttypespeed).toFixed(2);
            console.log('Net Speed=' + netspeed);
            Chart.defaults.global.defaultFontColor = 'blue';
            $('#netdiv').append('<canvas id="netspeedChart"><canvas>');
            var ctx1 = document.getElementById('netspeedChart').getContext('2d');
            netspeedchart = new Chart(ctx1, {
                // The type of chart we want to create
                type: 'bar',
                // The data for our dataset
                data: {
                    labels: ['Net Speed(CPM)'],
                    datasets: [{
                        label: 'Net Speed(CPM)',
                        backgroundColor: 'rgb(178,34,34)',
                        borderColor: 'rgb(178,34,34)',
                        data: [netspeed],
                        //  backgroundColor: ["DarkRed"]
                    }]
                },
                // Configuration options go here
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            // Change here
                            barPercentage: 0.2
                        }]
                    }
                }
            });
        }

        function clearvariables() {
            wordData.total = 0;
            wordData.correct = 0;
            wordData.incorrect = 0;
            wordData.typed = 0;
            grossspeed = 0;
            netspeed = 0;
        }

        function disableButton(btn) {
           
            $('#myChart').remove();
            $('iframe.chartjs-hidden-iframe').remove();
            $('#accuracyChart').remove();
            $('iframe.chartjs-hidden-iframe').remove();
            $('#grossspeedchart').remove();
            $('iframe.chartjs-hidden-iframe').remove();
            $('#netspeedChart').remove();
            $('iframe.chartjs-hidden-iframe').remove();
            document.getElementById('chartrow').style.display = 'none';
            document.getElementById(btn.id).disabled = true;
            document.getElementById('clock').removeAttribute('disabled');
            document.getElementById("errorMessage").innerText = "";
            document.getElementById("typebox").focus();
            Clock(this);
            //  clearvariables();
            console.log("After" + wordData.total + ":" + wordData.correct + ":" + wordData.incorrect);
        }