import '../styles/App.css';

export default function Form() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.elements.name.value)
        console.log(e.target.elements.phone.value)
        console.log(e.target.elements.age.value)
        console.log(e.target.elements.address.value)
    }

    return (<div id="formComponent">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='text'>Enter the name: </label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor='phone'>Enter the phone: </label>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="phone" />
            </div>
            <div>
                <label htmlFor='age'>Enter the age: </label>
                <input type="number"  id="age" name="age" max={100} />
            </div>
            <div>
                <label htmlFor='address'>Enter the address: </label>
                <textarea type="textArea" name="address" id="address" />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>)
}