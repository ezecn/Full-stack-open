const Part = (exercise) => {
  console.log(exercise) 
  return(
    <>
    <p>{exercise.part} {exercise.exercise}</p>
    </>
  )
}

const Header = (course) => {
  console.log(course.title);
  
  return (
    <>
      <h1>{course.title}</h1>
    </>
  )
}

const Content = (exercises) => {
  console.log(exercises.parts[0].name, exercises.parts[0].exercises); 
  
  return(
    <>
      <Part part = {exercises.parts[0].name} exercise = {exercises.parts[0].exercises}/>
      <Part part = {exercises.parts[1].name} exercise = {exercises.parts[1].exercises}/>
      <Part part = {exercises.parts[2].name} exercise = {exercises.parts[2].exercises}/>
      
    </>
  )
}

const Total = (exercises) => {
  /* console.log(exercises) */
  return(
    <>
      <p>Number of exercises {exercises.parts[0].exercises + exercises.parts[1].exercises + exercises.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header title = {course}/>
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App
