import axios from 'axios'
import { toast } from 'react-toastify'
const Delete = ({postId, onDelete}) => {
    const handleDelete = async()=>{
        try {
            await axios.delete(`http://localhost:4000/posts/${postId}`)
            toast.success('Post eliminado correctamente')
            onDelete(postId)
        } catch (error) {
            toast.error('Error al eliminar el post')
        }
    }
  return (
    <button onClick={handleDelete} className="rounded-lg bg-red-500 p-2 text-white font-bold w-36">
        Eliminar Post
    </button>
  )
}

export default Delete
