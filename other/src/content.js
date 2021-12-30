import Part from "./part";
const Content = (props) => {
    return (
        <div>


            <Part part={props.part1[0].name} exercise={props.exercises1[0].exercises} />


            <Part part={props.part2[1].name} exercise={props.exercises2[1].exercises} />


            <Part part={props.part3[2].name} exercise={props.exercises3[2].exercises} />

        </div>
    )

}


export default Content;