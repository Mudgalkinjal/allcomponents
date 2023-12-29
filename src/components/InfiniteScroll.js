import React, { useEffect, useState } from 'react';
import '../styles/App.css';

export default function InfiniteScroll() {
    const [data, setData] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(15);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try {
            setLoading(true);
            const result = await fetch(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${end}`).then(res => res.json());
            setData(prevData => [...prevData, ...result]);
        } catch (error) {
            console.error("Error fetching the data ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchDataAsync = async () => {
            await fetchData();
        };
        fetchDataAsync();
    }, [start, end]);

    useEffect(() => {
        const handleScroll = () => {
            if (!loading && window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
                setStart(prevStart => prevStart + 15);
                setEnd(prevEnd => prevEnd + 15);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [start, end, loading]);

    return (
        <div id="infiniteScroll">
            {data.map((elem, index) => (
                <div key={index}>
                    <p>Id: {elem.id}</p>
                    <p>Name: {elem.name}</p>
                    <p>Body: {elem.body}</p>
                </div>
            ))}
            {loading && <p>Loading...</p>}
        </div>
    );
}
