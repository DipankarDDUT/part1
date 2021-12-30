
import Header from "./header";
import Content from "./content";
import Total from "./total";

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
  return (
    <div>
      <h1><Header course={course.name} /></h1>
      <Content part1={course.parts} exercises1={course.parts} part2={course.parts} exercises2={course.parts} part3={course.parts} exercises3={course.parts} />
      <Total exercises1={course.parts} exercises2={course.parts} exercises3={course.parts} />
    </div>
  )
}

export default App