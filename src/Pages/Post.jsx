import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { instance } from '../api/axios';
import Navigation from '../Components/Navigation';
import '../styles/Post.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Post = () => {
    const params = useParams();
    const navigate = useNavigate()
    const [post, setPost] = React.useState([])
    const [uid, setUID] = React.useState('');
    const [comment, setComment] = React.useState('');
    const [updatedPost, setUpdatedPost] = React.useState('')

    React.useEffect(()=>{
        instance.get(`/post/${params.id}`).then((response)=>{
            console.log(response.data.post)
            setPost(response.data.post)
            setUpdatedPost(response.data.post.post)
        }).catch((error)=>{
            alert('Failed to get post try again later')
            navigate('/')
        })

        setUID(localStorage.getItem('uid'))
    }, [])

    const commentcall = ()=>{
        instance.post(`/comment/${params.id}`, {comment}, {
            headers:{
                'x-auth-token': localStorage.getItem('token')
            }
        }).then((response)=>{
            alert('Comment made')
            window.location.reload()
        }).catch((error)=>{
            alert(error.response.data.msg)
        })
    }

    const deletecall = ()=>{
        instance.delete(`/post/${params.id}`, {
            headers:{
                'x-auth-token': localStorage.getItem('token')
            }
        }).then(()=>{
            alert('Post succesfully deleted')
            navigate('/')
        }).catch((error)=>{
            alert(error.response.data.msg)
        })
    }

    const update = ()=>{
        instance.patch(`/post/${params.id}`, {post:updatedPost}, {
            headers:{
                'x-auth-token': localStorage.getItem('token')
            }
        }).then(()=>{
            alert('Post succesfully updated')
            window.location.reload()
        }).catch((error)=>{
            alert(error.response.data.msg)
        })
    }


    return (
        <div>
            <Navigation />

            {post && 
                <div className="post sm-80">
                    <h2>Autor: {post.email}</h2>
                    <p className='post-comment-count'>Comentário: {post.comments === null ? 0 : post.comments?.length}</p>
                    <div className="btn-conatiner">
                        {
                            parseInt(uid) === post.author ?  <Popup trigger={<button>Editar</button>} modal position="right center">
                                <div>
                                    <label className='input-label' htmlFor="post">Atualizar Post</label>
                                    <input className='input-field' type="text" value={updatedPost} onChange={(e)=>setUpdatedPost(e.target.value)}/>
                                    <button className='btn-update' onClick={update}>Atualizar</button>
                                </div>
                          </Popup>:null
                        }
                        {
                            parseInt(uid) === post.author ? <button onClick={deletecall}>Eliminar</button>:null

                        }
                    </div>
                    <div className="post-content">
                        <p>{post.post}</p>
                    </div>

                    <div className="comments">
                        <h3>Comentários:</h3>
                        {
                            post.comments && <div>
                                {
                                    post.comments.map((comment, idx)=>{
                                        return <div key={idx}>
                                            <h3>{comment?.author}</h3>
                                            <p>{comment?.comment}</p>
                                        </div>
                                    })
                                }
                            </div>
                        }
                        <div className="make-comment">
                            <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder='...'/>
                            <button onClick={commentcall}>Comentar</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Post
