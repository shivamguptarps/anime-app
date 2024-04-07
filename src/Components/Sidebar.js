import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';


function Sidebar() {
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <SidebarStyled>
            <div className="anime">
            <h3 style={{"font-size":"1.5em" ,"margin-right":"0px","width":"200px"}}>Top 5 Popular</h3>
                {sorted?.slice(0,5).map((anime) => {
                    return  <div className='sideCard'>
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <h5>
                            {anime.title}
                        </h5>
                    </Link>
                    </div>
                })}
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    // margin-top: 2rem;
    // background-color: #fff;
    border-left:4px solid #e5e7eb;
    // border-left-radius:2px;
    border-top: 5px solid #e5e7eb;
    padding-right: 5rem;
    padding-left: 4rem;
    padding-top: 2rem;
    .anime{
        display: flex;
        flex-direction: column;
        // align-items:center;
        justify-content:center;
        width: 150px;
        
    .sideCard{
        
        margin-top: 2rem;
        border:5px solid white;
        box-shadow: white 3px 2px 4px;
        opacity:0.9;
        transition:0.8s ease;
        width:180px;

        
    }

    .sideCard:hover{
        opacity:1;
        transform:scale(1.03);
        backdrop-filter: brightness(3);
        backdrop-filter: contrast(2);
    }

        img{
            width: 100%;
            margin-bottom:1rem;
            border-radius: 5px;
            // border: 5px solid #e5e7eb;
            
        }
        a{
            
            display: flex;
            flex-direction: column;
            gap: .4rem;
            color: #27AE60;
            h4{
                font-size: 1.1rem;
                
            }
        }
        h5{
            text-align:center;
            margin:10px;
            
        }
    }
`;

export default Sidebar