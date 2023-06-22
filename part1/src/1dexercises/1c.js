// component helper functions

const Hello = (props) => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }

    return (
        <div>
            <p>so you were born in {bornYear()}</p>
        </div>
    )
}

// destructuring!

const Hello = (props) => {
    const name = props.name
    const age = props.age
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }

    return (
        <div>
            <p>so you were born in {bornYear()}</p>
        </div>
    )
}

// destructuring through variable assignment

const Hello = (props) => {

    // NOTE THIS PART!
    const { name, age } = props
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }

    return (
        <div>
            <p>so you were born in {bornYear()}</p>
        </div>
    )
}


// destructuring through passing into component
// props fields are passed directly into name, age
const Hello = ({name, age}) => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }

    return (
        <div>
            <p>so you were born in {bornYear()}</p>
        </div>
    )
}