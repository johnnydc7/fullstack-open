import Header from './Header'
import Content from './Content'

const Course = ( { course }) => {
    console.log('Course received:', course)
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course