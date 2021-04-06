import Card from './Card'

export default function CardList(props) {
    return (
        <div>
            {props.testData.map(profile => <Card {...profile}/>)}
        </div>
    )
}
