import styled from "styled-components";

export const BoardMediaTitles = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin:1rem 2rem 2rem 2rem;
    color: white;
    gap: 40px 16px;
    text-align: center;
    h1{
        font-size: 1.5em;
    }
    h2{
        font-size: .8em;
        margin-top:10px;
        font-weight:lighter;
        color: #e2e2e2;
        z-index:-1000;
    }
    img{
        max-height: 500px;
        border-radius: 4px;
        min-width: 350px;
        border-radius: 4px;
    }
    @media (max-width: 720px) {
        margin:1rem 1rem 1rem 1rem;
    }
`

export const ImgSkeleton = styled.div`
        height:500px;
        border-radius: 4px;
        cursor: pointer;
        min-width: 350px;
        background-color:#383535e6;
        background-repeat: no-repeat;
        animation: shimmer 1s linear infinite;
        background-image: linear-gradient(to right, #1e1d1d00 0%, rgba(0,0,0,0.10) 20%, #524e4e73 40%, #302e2e 100%);
        @keyframes shimmer {
            0%{
                background-position: -450px 0;
            }
            100%{
                background-position: 450px 0;
            }
        }
`
export const TitleSkeleton = styled.div`
     height:20px;
     margin: 0 2rem;
     border-radius: 4px;
     margin-top:10px;
        background-color:#383535e6;
        background-repeat: no-repeat;
        animation: shimmer 1s linear infinite;
        background-image: linear-gradient(to right, #1e1d1d00 0%, rgba(0,0,0,0.10) 20%, #524e4e73 40%, #302e2e 100%);
        @keyframes shimmer {
            0%{
                background-position: -450px 0;
            }
            100%{
                background-position: 450px 0;
            }
        }
`
export const SubTitleSkeleton = styled.div`
     height:20px;
     margin: 0 1rem;
     border-radius: 4px;
     margin-top:10px;
        background-color:#383535e6;
        background-repeat: no-repeat;
        animation: shimmer 1s linear infinite;
        background-image: linear-gradient(to right, #1e1d1d00 0%, rgba(0,0,0,0.10) 20%, #524e4e73 40%, #302e2e 100%);
        @keyframes shimmer {
            0%{
                background-position: -450px 0;
            }
            100%{
                background-position: 450px 0;
            }
        }
`