import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import styled from 'styled-components'
import Sidebar from './Sidebar'

function Airing({rendered}) {
    const {airingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                return(
                    <div>
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <p>{anime.title}</p>
                    </Link>
                        </div>
                    )
            })
        }else{
            return searchResults?.map((anime) => {
                return(
                    <div>
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <p>{anime.title}</p>
                    </Link>
                        </div>
                    )
            })
        }
    }

    return (
        <PopularStyled>
            <div className="airing-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
    display: flex;
    background-color:black;
    .airing-anime{
        // margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 5rem;
        padding-right: 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        
        border-top: 5px solid #e5e7eb;
   
        div{
            height: 400px;
            width:350px;
            border-radius: 7px;
            border-radius: 5px;
            opacity:0.9;
            transition:0.8s ease;
            border:5px solid white;
            // border: 5px solid #e5e7eb;
            box-shadow: white 3px 2px 4px;
            display:flex;
            flex-direction:column;
            align-items:center;
            
        }
        a{
            width:100%;
            height:100%;
        }
        a img{
            width: 100%;
            height: 70%;
            
            
        }
        div:hover{
            opacity:1;
            transform:scale(1.03);
            backdrop-filter: brightness(3);
        backdrop-filter: contrast(2);
        }
        p{
            text-align:center;
            color:white;
            margin-top:20px;
            font-size:1.3em;
            

        }
    }
`;

export default Airing