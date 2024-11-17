const Part = (exercise) => {
  return(
    <>
    <p>{exercise.part} {exercise.exercise}</p>
    </>
  )
}

const Header = (course) => {
  return (
    <>
      <h1>{course.title}</h1>
    </>
  )
}

const Content = (exercises) => {
  return(
    <>
      <Part part = {exercises.part1} exercise = {exercises.exercise1}/>
      <Part part = {exercises.part2} exercise = {exercises.exercise2} />
      <Part part = {exercises.part3} exercise = {exercises.exercise3} />
    </>
  )
}

const Total = (exercises) => {
  return(
    <>
      <p>Number of exercises {exercises.exercise1 + exercises.exercise2 + exercises.exercise3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercise1 = {exercises1} exercise2={exercises2} exercise3 = {exercises3} />
      <Total exercise1 = {exercises1} exercise2 = {exercises2} exercise3 = {exercises3} />
    </div>
  )
}

export default App
