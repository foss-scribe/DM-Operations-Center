/*
MrFarland
version 1.0
----------------
getGender.js
*/

 // Get the selected (or randomly generated) gender from the selectGender dropdown menu.
 // --------------------------------------------------------------------------------

 function getGender() {

    // Get the NPCs genderForm from the selectGender dropdown.
    // - genderForm refers to the feminine or masculine form of the given name.
    selectGender = document.getElementById('selectGender');
    genderForm = selectGender.options[selectGender.selectedIndex].value;

    // Get the NPCs genderID from the selectGender dropdown.
    // - GenderID refers to the preferred gender identity of the NPC.
    selectGender = document.getElementById('selectGender');
    genderID = selectGender.options[selectGender.selectedIndex].text;

    // If the NPCs genderForm is not defined, choose one randomly.
    if (genderForm == "None"){
        genderForm = generate_text("GenderForm");
    }

    // If the NPCs genderID hasn't been selected the genderID defaults to 
    // the cisgender equivalent for the randomly selected genderForm.

    if (genderID == "Any Gender" && genderForm == "Feminine"){
        genderID = "Cisgender (F)";
    } else if (genderID == "Any Gender" && genderForm == "Masculine"){
        genderID = "Cisgender (M)";
    }
    
    // Define pronouns based on genderID.
    if (genderID == "Cisgender (F)"){
        pronouns = ["she","her","hers","her","herself"];
    } else if (genderID == "Cisgender (M)"){
        pronouns = ["he","his","his","him","himself"];
    } else {
        pronouns = ["they","their","theirs","them","themself"];
    }

    pronounSubject = pronouns[0];
    pronounObject = pronouns[1];
    pronounPossesive1 = pronouns[2];
    pronounPossesive2 = pronouns[3];
    prounounReflexive = pronouns[4];

    // Return the values for race and gender in an array.
    return [genderForm, genderID, pronounSubject, pronounObject, pronounPossesive1, pronounPossesive2, prounounReflexive];

}
