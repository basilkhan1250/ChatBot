import React, { useEffect, useState } from 'react';

function Gettingdata() {
    const [data, setData] = useState();
    const [reply, setReply] = useState();
    console.log(reply)

    async function fetchData() {
        try {
            const response = await fetch(`https://www.personalityforge.com/api/chat/index.php?apiKey=TtDcXGyNzimVDe0R&chatBotID=63906&message=${reply}%3F&externalID=abc-6391845436878`);
            const result = await response.json();
            setData(result);
            console.log(result.message.message)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    // fetchData();

    return (
        <div>
            <h1>API Data</h1>
            <input type="text" onChange={(e) => setReply(e.target.value)} />
            {data ? (<p>Message :{data.message.message}</p>) : (<p>Talk to me...</p>)}
            <button onClick={fetchData}>Submit</button>
        </div>
    );
}

export default Gettingdata;