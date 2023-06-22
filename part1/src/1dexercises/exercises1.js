const Header = (props) => {
    return (
      <div>
        <h1>
          {props.course}
        </h1>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
        <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
        <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
      </div>
    )
  }
  
  const Total = (props) => {
    console.log(props)
    return (
      <div>
        <p>Total: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      </div>
    )
  }