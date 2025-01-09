import React from "react";

async function gettingmessages() {
    const apicalling = await fetch(`https://www.personalityforge.com/api/chat/index.php?apiKey=TtDcXGyNzimVDe0R&chatBotID=63906&message=how%27s+your+day+going%3F&externalID=abc-6391845436878`);
    const data = await apicalling.json();
    console.log(data);
}

gettingmessages()