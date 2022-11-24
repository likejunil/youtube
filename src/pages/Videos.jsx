import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import VideoCard from "../Components/VideoCard/VideoCard";
import axios from "axios";

const Videos = () => {
    const {keyword} = useParams();
    const {
        isLoading,
        error,
        data: videos,
    } = useQuery(['videos', keyword], async () => {
        const target = `/data/videos/${keyword ? 'search' : 'popular'}.json`;
        /*
        return fetch(target)
            .then(res => res.json())
            .then(data => data.items);
         */
        return axios
            .get(target)
            .then(res => res.data.items)
            .catch()
            .finally()
    });
    
    return (
        <>
            <div>Videos {keyword ? `🔍${keyword}` : '🔥'}</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong...🌚</p>}
            {videos && (
                <ul>
                    {videos.map(video => (
                        <VideoCard key={video.id} video={video}/>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Videos;
