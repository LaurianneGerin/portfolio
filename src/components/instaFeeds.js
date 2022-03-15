import React, { useState, useEffect, useRef } from 'react'
import { Link } from "gatsby"
import axios from 'axios'

import Feed from './feed'

const containerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "15px",
}


const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    // use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;
    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();
        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div style={containerStyle} className="container">
            {feeds.map((feed) => (
               <Link to={feed.media_url}>
                <Feed key={feed.id} feed={feed} />
               </Link>
            ))}
        </div>
    );
}

export default InstaFeeds;