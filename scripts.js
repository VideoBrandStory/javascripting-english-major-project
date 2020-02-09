let arraySymbolicMessage, arrayConnotedImage, arrayDenotedImage, arrayAnchorage, arrayRelay, arrayPolysemy, arrayLexia, arraySyntagm, arrayParadigm, arrayRhetoricOfTheImage;

arraySymbolicMessage = [["id", 1], ["term", "<i>Term</i>"], ["definition", "definition"]];

arrayConnotedImage = [["id", 2], ["term", "<i>Term</i>"], ["definition", "definition"]];

arrayDenotedImage = [["id", 3], ["term", "<i>Term</i>"], ["definition", "definition"]];

arrayAnchorage = [["id", 4], ["term", "<i>Term</i>"], ["definition", "definition"]];

arrayRelay = [["id", 5], ["term", "<i>Term</i>"], ["definition", "definition"]];

arrayPolysemy = [["id", 6], ["term", "<i>Term</i>"], ["definition", "definition"]];

arrayLexia = [["id", 7], ["term", "<i>Term</i>"], ["definition", "definition"]];

arraySyntagm = [["id", 8], ["term", "<i>Term</i>"], ["definition", "definition"]];

arrayParadigm = [["id", 9], ["term", "<i>Term</i>"], ["definition", "definition"]];

arrayRhetoricOfTheImage = [["id", 10], ["term", "<i>Term</i>"], ["definition", "definition."]];

arrayRhetoricOfTheImageTermDefinition = [arrayRhetoricOfTheImage[1][1], " means ", arrayRhetoricOfTheImage[2][1]];

$("#response").html(arrayRhetoricOfTheImageTermDefinition);
