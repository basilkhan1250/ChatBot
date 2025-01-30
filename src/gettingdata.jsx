import React, { useEffect, useState } from 'react';

function Gettingdata() {
    const [data, setData] = useState();
    const [reply, setReply] = useState('');
    const [randomNum, setRandomNum] = useState();

    function generateRandom() {
        return Math.floor(Math.random() * 9_000_000_000_000) + 1_000_000_000_000;
    }

    useEffect(() => {
        const initialRandom = generateRandom();
        setRandomNum(initialRandom);
        console.log('Generated random number on page load:', initialRandom);
        fetchData(initialRandom, "Hello?");
    }, []);

    async function fetchData(random, message) {
        console.log('Fetching data with message:', message, 'and random:', random);
        try {
            const response = await fetch(`https://www.personalityforge.com/api/chat/index.php?apiKey=TtDcXGyNzimVDe0R&chatBotID=63906&message=${encodeURIComponent(message)}&externalID=abc-${random}`);
            const result = await response.json();
            setData(result);
            console.log(result.message.message);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className='main'>
            <h1 className='main-heading'>Chat Bot</h1>
            {data ? (<p>Message  {data.message.message}</p>) : (<p>Loading...</p>)}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Using random number on form submit:', randomNum);
                    fetchData(randomNum, reply);
                    setReply('')
                }}>
                <input
                    type="text"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)} />
            </form>
        </div>
    );
}

export default Gettingdata;