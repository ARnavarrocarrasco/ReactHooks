
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';

export const AddTodo = ({onAdd}) => {
    
    const {description, handleInputChange, onResetForm} = useForm({
        description : "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const newInputTodo = description.trim();

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: newInputTodo,
        }
        if (newInputTodo.length > 0) {
            onAdd(newTodo);
            onResetForm();
        }
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="description"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    value={description}
                    onChange={handleInputChange}
                />

                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                >
                    Agregar
                </button>
            </form> 
        </>
    )
}

AddTodo.propTypes = {
    onAdd : PropTypes.func.isRequired,
}