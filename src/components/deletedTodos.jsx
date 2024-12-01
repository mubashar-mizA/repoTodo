import { useEffect, useState } from "react"

const DeletedTodos = () => {
    const [deletedTodos, setDeletedTodos] = useState([])

    useEffect(() => {
        let deletedTodods = JSON.parse(localStorage.getItem('deleted')) || []
        setDeletedTodos(deletedTodods)
    }, [])

    return (
        <>
            <div>This is deleted todo page</div>
            <ul>
                {
                    deletedTodos.map((todo, index) => (
                        <li key={index}>
                            <h2>{todo.title}</h2>
                            <h2>{todo.content}</h2>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default DeletedTodos