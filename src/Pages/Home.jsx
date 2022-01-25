import React from 'react'
import { useNavigate } from 'react-router-dom';
import { instance } from '../api/axios';
import Navigation from '../Components/Navigation';
import '../styles/home.css'

const Home = () => {

    const [posts, setPosts] = React.useState([]);
    const [newPost, setNewPost] = React.useState('');
    const navigate = useNavigate();

    React.useEffect(()=>{
        instance.get('/post').then((response)=>{
            console.log(response.data.posts)
            setPosts(response.data.posts)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])
    
    const post = ()=>{
        instance.post('/post', {post:newPost}, {
            headers:{
                'x-auth-token':localStorage.getItem('token')
            }
        }).then((response)=>{
            alert(response.data.msg)
            window.location.reload()
        }).catch((error)=>{
            alert(error.response.data.msg)
        })
    }

    const redirect = (id)=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='home'>
            <Navigation />
            <div className="blog">
                <input onChange={(e)=> setNewPost(e.target.value)} type="text" placeholder='Blog'/>
                <button onClick={post}>Postar</button>
            </div>
            {
                posts && <div className='post-container'>
                    {
                        posts.map((post, idx)=>{
                            return(
                                <div onClick={()=>redirect(post.id)} className='post' key={post.id}>
                                    <p>{post.post}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Home
