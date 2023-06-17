function introduction(name) {
return(`Hi, my name is ${name}.`);
}

introduction("${name}");

function introductionWithLanguage(name,language) {
return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguage("${name}, ${language}");

function introductionWithLanguageOptional(name,language = "JavaScript") {
return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
    
introductionWithLanguageOptional("${name}, ${language}");