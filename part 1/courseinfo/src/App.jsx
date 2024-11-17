const Part = (exercise) => {
  console.log(exercise) 
  return(
    <>
    <p>{exercise.part} {exercise.exercise}</p>
    </>
  )
}

const Header = (course) => {
  console.log(course.course.name);
  
  return (
    <>
      <h1>{course.course.name}</h1>
    </>
  )
}

const Content = (exercises) => {
  console.log(exercises.course.parts[1].name);  
  
  return(
    <>
      <Part part = {exercises.course.parts[0].name} exercise = {exercises.course.parts[0].exercises}/>
      <Part part = {exercises.course.parts[1].name} exercise = {exercises.course.parts[1].exercises}/>
      <Part part = {exercises.course.parts[2].name} exercise = {exercises.course.parts[2].exercises}/>
      
    </>
  )
}

const Total = (exercises) => {
  /* console.log(exercises) */
  return(
    <>
      <p>Number of exercises {exercises.course.parts[0].exercises + exercises.course.parts[1].exercises + exercises.course.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  console.log(course.parts[0].name);
  
  return (
    <div>
      <Header course = {course}/>
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}

export default App
