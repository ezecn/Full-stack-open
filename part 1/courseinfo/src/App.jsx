const Part = (exercise) => {
  console.log(exercise)
  return(
    <>
    <p>{exercise.part} {exercise.exercise}</p>
    </>
  )
}

const Header = (course) => {
  console.log(course);
  
  return (
    <>
      <h1>{course.title}</h1>
    </>
  )
}

const Content = (exercises) => {
  console.log(exercises);
  
  return(
    <>
      <Part part = {exercises.part1} exercise = {exercises.exercise1}/>
      <Part part = {exercises.part2} exercise = {exercises.exercise2} />
      <Part part = {exercises.part3} exercise = {exercises.exercise3} />
    </>
  )
}

const Total = (exercises) => {
  console.log(exercises)
  return(
    <>
      <p>Number of exercises {exercises.exercise1 + exercises.exercise2 + exercises.exercise3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title = {course}/>
      <Content part1 = {part1.name} part2 = {part2.name} part3 = {part3.name} exercise1 = {part1.exercises} exercise2={part2.exercises} exercise3 = {part3.exercises} />
      <Total exercise1 = {part1.exercises} exercise2 = {part2.exercises} exercise3 = {part3.exercises} />
    </div>
  )
}

export default App
